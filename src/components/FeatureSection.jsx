// src/components/FeatureSection.jsx
import React from 'react';
// import './featureSection.css'; // your CSS

const FeatureSection = () => {
  return (
    <div id="feature">
      <div className="container">
        <div className="section-header">
          <p>Smart & Reliable</p>
          <h1>AI-Powered Features</h1>
        </div>
        <div className="row align-items-center">
          {/* Left Features */}
          <div className="col-md-4">
            <div className="product-feature">
              <div className="product-content">
                <h2>Easy to Use</h2>
                <p>Upload an orange leaf image and get instant results with a single click.</p>
              </div>
              <div className="product-icon">
                <i className="fa fa-upload" />
              </div>
            </div>
            <div className="product-feature">
              <div className="product-content">
                <h2>Trained Dataset</h2>
                <p>Our model is trained on 30,000+ leaf images for high accuracy detection.</p>
              </div>
              <div className="product-icon">
                <i className="fa fa-database" />
              </div>
            </div>
          </div>

          {/* Center Image */}
          <div className="col-md-4">
            <div className="product-img">
              <img src="/images/ORANGE-LEAVES.jpg" alt="Orange Disease Detection Image" />
            </div>
          </div>

          {/* Right Features */}
          <div className="col-md-4">
            <div className="product-feature">
              <div className="product-icon">
                <i className="fa fa-brain" />
              </div>
              <div className="product-content">
                <h2>AI-Powered Results</h2>
                <p>Get disease prediction results powered by advanced CNN models.</p>
              </div>
            </div>
            <div className="product-feature">
              <div className="product-icon">
                <i className="fa fa-notes-medical" />
              </div>
              <div className="product-content">
                <h2>Actionable Insights</h2>
                <p>Understand symptoms and get suggested actions for disease control.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeatureSection;
