// src/components/ProcessSection.jsx
import React, { useState } from 'react';
import './Process.css'
const ProcessSection = () => {
  const [showVideo, setShowVideo] = useState(false);

  const handleThumbnailClick = () => {
    setShowVideo(true);
  };

  return (
    <div id="process">
      <div className="container">
        <div className="section-header">
          <p>How It Works</p>
          <h1>Orange Disease Detection</h1>
        </div>

        <div className="row">
          <div className="col-md-4">
            <div className="process-col">
              <i className="fa fa-upload"></i>
              <h2>Upload Image</h2>
              <p>
                Select a clear image of an orange leaf showing visible symptoms and upload it using our web interface.
              </p>
            </div>
          </div>

          <div className="col-md-4">
            <div className="process-col">
              <i className="fa fa-brain"></i>
              <h2>AI Prediction</h2>
              <p>
                Our deep learning model (CNN) analyzes the image to identify if the leaf is healthy or infected.
              </p>
            </div>
          </div>

          <div className="col-md-4">
            <div className="process-col">
              <i className="fa fa-notes-medical"></i>
              <h2>Get Results</h2>
              <p>
                The system instantly displays the disease type, confidence score, and expert suggestions for treatment.
              </p>
            </div>
          </div>
        </div>

        {/* Optional Video Section */}
        <div id="video-section" className="mt-5">
          <div className="container text-center">
            {showVideo ? (
              <iframe
                width="100%"
                height="400"
                src="https://www.youtube.com/embed/ec1Rxxmg3YI?autoplay=1"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            ) : (
              <div className="youtube-player" onClick={handleThumbnailClick} style={{ cursor: 'pointer' }}>
                <img
                  src="https://img.youtube.com/vi/ec1Rxxmg3YI/hqdefault.jpg"
                  alt="Video Thumbnail"
                  className="img-fluid"
                />
                <div className="play"></div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProcessSection;
