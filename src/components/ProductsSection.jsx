// src/components/ProductsSection.jsx
import React from 'react';


const diseases = [
  {
    title: 'Black Spot',
    description: 'Bacterial infection causing lesions',
    imgSrc: '/images/oranges_with_black_spots_caused_by_citrus (1).jpeg',
    alt: 'Citrus Canker',
  },
  {
    title: 'Caner',
    description: 'Fungal disease causing dark lesions',
    imgSrc: '/images/oranges_with_black_spots_caused_by_citrus (1).jpeg',
    alt: 'Greasy Spot',
  },
  {
    title: 'Melanose',
    description: 'Brown spots due to fungal infection',
    imgSrc: '/images/oranges_with_black_spots_caused_by_citrus (2).jpeg',
    alt: 'Melanose',
  },
  {
    title: 'Scab',
    description: 'Warty growth on fruit and leaves',
    imgSrc: '/images/oranges_with_scab_warty_growth_on_fruit.jpeg',
    alt: 'Scab',
  },
];


const ProductsSection = () => {
  return (
    <div id="products">
      <div className="container">
        <div className="section-header">
          <p>Disease Detection</p>
          <h1>Orange Leaf Diseases</h1>
        </div>
        <div className="row align-items-center">
          {diseases.map(({ title, description, imgSrc, alt }, index) => (
            <div className="col-lg-3 col-md-6" key={index}>
              <div className="product-single">
                <div className="product-title">
                  <h2>{title}</h2>
                  <p>{description}</p>
                </div>
                <div className="product-img">
                  <img src={imgSrc} alt={alt} />
                </div>
                <div className="product-footer">
                  <h3>Detected</h3>
                  <a className="btn" href="#">
                    Learn More
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductsSection;
