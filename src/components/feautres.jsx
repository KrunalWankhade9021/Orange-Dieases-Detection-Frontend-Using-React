import React from 'react';
const Features = () => {
  return (
    <div id="feature-mini">
      <div className="container">
        <div className="row align-items-stretch text-center">
          
          <div className="col-md-3 col-sm-6 mb-4">
            <div className="feature-item p-3 h-100">
              <i className="fa fa-image fa-2x mb-3" />
              <h3 className="h5">Upload Image</h3>
              <p>Just one click to upload orange leaf</p>
            </div>
          </div>
          
          <div className="col-md-3 col-sm-6 mb-4">
            <div className="feature-item p-3 h-100">
              <i className="fa fa-microscope fa-2x mb-3" />
              <h3 className="h5">AI Diagnosis</h3>
              <p>Trained on 30,000+ disease samples</p>
            </div>
          </div>
          
          <div className="col-md-3 col-sm-6 mb-4">
            <div className="feature-item p-3 h-100">
              <i className="fa fa-brain fa-2x mb-3" />
              <h3 className="h5">Smart Detection</h3>
              <p>Detects 4+ orange diseases with accuracy</p>
            </div>
          </div>
          
          <div className="col-md-3 col-sm-6 mb-4">
            <div className="feature-item p-3 h-100">
              <i className="fa fa-chart-line fa-2x mb-3" />
              <h3 className="h5">Instant Results</h3>
              <p>Get results in less than 5 seconds</p>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default Features;
