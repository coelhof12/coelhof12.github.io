// fetchGitHubData.js

require("dotenv").config();
const fs = require("fs");
const fetch = require("node-fetch");

const token = process.env.REACT_APP_GITHUB_TOKEN;

(async () => {
  try {
    const response = await fetch(
      "https://api.github.com/users/coelhof12/repos",
      {
        headers: {
          Authorization: `token ${token}`,
        },
      }
    );

    if (!response.ok) {
      throw new Error(
        `GitHub API responded with a status of ${response.status}`
      );
    }

    const repos = await response.json();

    const projectsWithDetails = await Promise.all(
      repos.map(async (repo) => {
        const languagesResponse = await fetch(repo.languages_url, {
          headers: {
            Authorization: `token ${token}`,
          },
        });
        const languages = await languagesResponse.json();

        let image = null;
        let additionalInfo = null;

        try {
          const readmeResponse = await fetch(
            `https://api.github.com/repos/${repo.full_name}/readme`,
            {
              headers: {
                Authorization: `token ${token}`,
              },
            }
          );

          const readmeData = await readmeResponse.json();

          if (readmeData.content) {
            const readmeContent = Buffer.from(
              readmeData.content,
              "base64"
            ).toString("utf-8");
            const imageMatch = readmeContent.match(/!\[.*\]\((.*)\)/);
            const additionalInfoMatch = readmeContent.match(
              /## 💡 The Concept([\s\S]*?)(##|$)/
            );

            image = imageMatch ? imageMatch[1] : null;
            additionalInfo = additionalInfoMatch
              ? additionalInfoMatch[1].trim()
              : null;
          }
        } catch (err) {
          console.warn(`No README found for ${repo.name}`);
        }

        return {
          ...repo,
          languages: Object.keys(languages),
          image,
          additionalInfo,
        };
      })
    );

    // Save the data to a JSON file in the src directory
    fs.writeFileSync(
      "./src/githubData.json",
      JSON.stringify(projectsWithDetails)
    );
    console.log("GitHub data fetched successfully.");
  } catch (error) {
    console.error("Error fetching GitHub data:", error);
    process.exit(1);
  }
})();
