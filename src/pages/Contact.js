import React from 'react';
import '../index.css';
import '../styles/Contacts.css';


function Contact() {
  return (
    <div className="contact-container">
      <h1>Get in Touch</h1>
      {/* Add the form wrapper here */}
      <div className="form-wrapper">
        <form className="contact-form">
          <div className="form-group">
            <input type="text" id="name" required />
            <label htmlFor="name">Name</label>
          </div>
          <div className="form-group">
            <input type="email" id="email" required />
            <label htmlFor="email">Email</label>
          </div>
          <div className="form-group">
            <textarea id="message" rows="5" required></textarea>
            <label htmlFor="message">Message</label>
          </div>
          <button type="submit" className="submit-button">Send Message</button>
        </form>
      </div>
    </div>
  );
}

export default Contact;