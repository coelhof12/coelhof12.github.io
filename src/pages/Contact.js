import React from 'react';
import '../styles/Contacts.css';
import '../index.css';

function Contact() {
  return (
    <div className="contact-container">
      <h1>Get in Touch</h1>
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
  );
}

export default Contact;