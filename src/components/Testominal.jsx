// src/components/TestimonialSection.jsx
import React, { useState } from 'react';
import './testominal.css'
const testimonials = [
  {
    name: 'Ramesh Pawar',
    title: 'Orange Farmer, Nagpur',
    text: "This disease detection tool helped me identify citrus canker at an early stage. I saved almost 60% of my crop. It's easy to use and gives results in seconds.",
    imgSrc: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=60&q=80',
  },
  {
    name: 'Savita Jadhav',
    title: 'Farmer, Jalgaon',
    text: "I always struggled to find out what's wrong with my plants. Now with just one photo, this system tells me the disease. It’s really helpful for small farmers like me.",
    imgSrc: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=60&q=80',
  },
  {
    name: 'Manoj Patil',
    title: 'Horticulturist, Amravati',
    text: "The model is very accurate. It detected Greasy Spot in my farm, and I immediately took preventive steps. This kind of tech can really change agriculture.",
    imgSrc: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=60&q=80',
  },
  {
    name: 'Bhaskar Deshmukh',
    title: 'Orange Orchard Owner, Wardha',
    text: "Excellent work! I scanned some infected leaves and it correctly told me about Scab. Earlier, I had to wait for experts, now I get instant answers.",
    imgSrc: 'https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?auto=format&fit=crop&w=60&q=80',
  },
];

const TestimonialSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div id="testimonial">
      <div className="container">
        <div className="section-header">
          <p>Farmers</p>
          <h1>What They Say</h1>
        </div>

        <div className="row">
          <div className="col-12">
            <div className="testimonial-slider-nav d-flex justify-content-center mb-4">
              {testimonials.map(({ imgSrc, name }, index) => (
                <div
                  key={index}
                  className={`slider-nav mx-2 ${index === activeIndex ? 'active' : ''}`}
                  onClick={() => setActiveIndex(index)}
                  style={{
                    cursor: 'pointer',
                    border: index === activeIndex ? '2px solid #FFD662' : 'none',
                    borderRadius: '50%',
                    padding: '2px',
                  }}
                >
                  <img
                    src={imgSrc}
                    alt={`Testimonial ${name}`}
                    style={{ width: '60px', height: '60px', borderRadius: '50%', objectFit: 'cover' }}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-12">
            <div className="testimonial-slider text-center">
              <div className="slider-item">
                <h1>{testimonials[activeIndex].name}</h1>
                <h2>{testimonials[activeIndex].title}</h2>
                <p>{testimonials[activeIndex].text}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialSection;
