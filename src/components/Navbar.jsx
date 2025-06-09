import React, { useEffect, useState } from 'react';
import './navbar.css';

const Navigation = () => {
  const [sticky, setSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // If scrollY is more than 30px, set sticky true, else false
      if (window.scrollY > 30) {
        setSticky(true);
      } else {
        setSticky(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    // Clean up listener on unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav id="nav" className={sticky ? 'nav-sticky' : ''}>
      <div className="navbar navbar-expand-md bg-light navbar-light">
        <a href="#" className="navbar-brand">Orange AI</a>
        <button
          type="button"
          className="navbar-toggler"
          data-toggle="collapse"
          data-target="#navbarCollapse"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse justify-content-between" id="navbarCollapse">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item"><a href="#header" className="nav-link">Home</a></li>
            <li className="nav-item"><a href="#feature" className="nav-link">Features</a></li>
            <li className="nav-item"><a href="#process" className="nav-link">Process</a></li>
            <li className="nav-item"><a href="#products" className="nav-link">Products</a></li>
            <li className="nav-item"><a href="#testimonial" className="nav-link">Reviews</a></li>
            <li className="nav-item"><a href="#faqs" className="nav-link">FAQs</a></li>
            <li className="nav-item"><a href="#contact" className="nav-link">Contact</a></li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
