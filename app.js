// Delaying the text animations for a staggered effect
const texts = document.querySelectorAll('.animate-text');
texts.forEach((text, index) => {
    text.style.animationDelay = `${index * 0.3}s`;
});
