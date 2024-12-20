import React from 'react';
import '../index.css';
import '../styles/Contacts.css';

function Contact() {
  return (
    <div className="page-container">
      <div className="content-wrap">
        <div className="contact-container">
          <h1>Get in Touch</h1>
          <div className="contact-content">
            <div className="contact-info">
              <p>Feel free to reach out for collaborations or just a friendly hello!</p>
              <p>Email: coelho1@ua.pt</p>
            </div>
            <div className="form-wrapper fadeIn">
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
        </div>
      </div>
    </div>
  );
}

export default Contact;