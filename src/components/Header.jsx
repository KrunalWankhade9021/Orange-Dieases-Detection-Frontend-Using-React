import React from 'react';
import { Link } from 'react-router-dom'; // Import Link
import './header.css';
import '../Models/UploadPage'

const Header = () => {
  return (
    <div id="header">
      <div className="container">
        <div className="row align-items-center">

          {/* Mobile Image */}
          <div className="col-md-6 d-md-none d-block">
            <div className="header-img">
              <img
                src="/images/ChatGPT Image Apr 5, 2025, 02_39_09 PM.png"
                alt="Orange Disease Detection"
              />
            </div>
          </div>

          {/* Text Content */}
          <div className="col-md-6">
            <div className="header-content">
              <h2>
                Detect Leaf Disease
                <br />
                With <span>AI & Vision</span>
              </h2>
              <p>
                Upload an image of your orange leaf and let our AI model detect diseases with speed and precision.
              </p>
              <Link className="btn" to="/upload">Try It Now</Link>
            </div>
          </div>

          {/* Desktop Image */}
          <div className="col-md-6 d-md-block d-none">
            <div className="header-img">
              <img
                src="/images/ChatGPT Image Apr 5, 2025, 02_39_09 PM.png"
                alt="Orange Disease Detection"
              />
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Header;