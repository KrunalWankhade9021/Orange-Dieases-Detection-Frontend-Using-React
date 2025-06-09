import React, { useState } from 'react';
import './upload.css'; // Keep your styles here

const DiseaseDetection = () => {
  const [image, setImage] = useState(null);
  const [result, setResult] = useState('');

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setImage(imageUrl);
      setResult(''); // clear previous result
    }
  };

  const predictDisease = () => {
    // Replace with your model prediction logic or API call
    setResult('Prediction: Citrus Canker'); // Example static result
  };

  return (
    <div className="main-container">
      <h1>Orange Leaf Disease Detection</h1>

      <div className="upload-box">
        <input type="file" accept="image/*" onChange={handleImageChange} />
        <br />
        <button onClick={predictDisease}>Analyze</button>
      </div>

      {image && (
        <div className="preview">
          <img src={image} alt="Preview" />
        </div>
      )}

      {result && (
        <div className="result">
          <h2>{result}</h2>
        </div>
      )}
    </div>
  );
};

export default DiseaseDetection;
