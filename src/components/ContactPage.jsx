import React from 'react';
import '../styles/ContactPage.css';

const ContactPage = () => {
  return (
    <div className="contact-page">
      <div className="container py-5">
        <h1 className="text-center mb-5">CONTACT US</h1>
        
        <div className="row">
          <div className="col-md-6">
            <div className="contact-details">
              <div className="contact-item">
                <span className="contact-icon">📧</span>
                <a href="mailto:ncci2025@svce.ac.in" className="contact-link">ncci2025@svce.ac.in</a>
              </div>
              
              <div className="contact-item">
                <span className="contact-icon">🏛️</span>
                <address>
                  Sri Venkateswara College of Engineering,<br />
                  Sriperumbudur, Tamil Nadu 602117
                </address>
              </div>
            </div>

            <div className="mt-5">
              <h2>LOCATION</h2>
              <a 
                href="https://www.google.com/maps/place/Sri+Venkateswara+College+of+Engineering/@12.986972,79.972028,15z"
                target="_blank" 
                rel="noopener noreferrer"
                className="btn btn-outline-primary mt-3"
              >
                Get Directions
              </a>
              
            </div>

            <div className="mt-4">
              <h3>Contact Person</h3>
              <p>MADHUMITHA R - 9498330139</p>
              <p>RAJA VISHALINI - 9003381773</p>
            </div>
          </div>

          <div className="col-md-6">
            <div className="map-container">
              <iframe
                title="SVCE Location"
                width="100%"
                height="400"
                frameBorder="0"
                style={{ border: 0 }}
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.225213509522!2d79.96983921482294!3d12.986972218361932!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a528a9c41b7d371%3A0x5c5a9b0e9c5b5e9c!2sSri%20Venkateswara%20College%20of%20Engineering!5e0!3m2!1sen!2sin!4v1620000000000!5m2!1sen!2sin"
                allowFullScreen
              ></iframe>
              <div className="text-center mt-2">
                <a 
                  href="https://www.google.com/maps/place/Sri+Venkateswara+College+of+Engineering/@12.986972,79.972028,15z" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-muted"
                >
                  View larger map
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;