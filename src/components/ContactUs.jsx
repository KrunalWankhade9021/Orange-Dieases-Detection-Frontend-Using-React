import React from 'react';


const ContactSection = () => {
  return (
    <section id="contact" className="d-flex align-items-center justify-content-center">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-8">
            <div className="contact-info text-center">
              <h2>Get in Touch</h2>
              <p>
                If you have any questions, suggestions, or need assistance, feel free to reach out.
                We’re here to help!
              </p>
              <h3><i className="fa fa-map-marker"></i> Chichwadgaon, Pune, Maharashtra, India</h3>
              <h3><i className="fa fa-envelope"></i> parthyangandul@gmail.com</h3>
              <h3><i className="fa fa-phone"></i> +91-8530731105</h3>
              <a className="btn" href="mailto:parthyangandul@gmail.com">Contact Us</a>
              <div className="social">
                <a href="https://twitter.com/htmlcodex" target="_blank" rel="noopener noreferrer"><i className="fab fa-twitter"></i></a>
                <a href="https://facebook.com/htmlcodex" target="_blank" rel="noopener noreferrer"><i className="fab fa-facebook-f"></i></a>
                <a href="#" rel="noopener noreferrer"><i className="fab fa-linkedin-in"></i></a>
                <a href="#" rel="noopener noreferrer"><i className="fab fa-instagram"></i></a>
                <a href="#" rel="noopener noreferrer"><i className="fab fa-youtube"></i></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
