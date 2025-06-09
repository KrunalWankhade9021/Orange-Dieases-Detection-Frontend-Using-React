import React from 'react';
import Navigation from './components/Navbar';
import Header from './components/Header';
import Features from './components/feautres';
import FeatureSection from './components/FeatureSection';
import ProcessSection from './components/Processesselction';
import ProductsSection from './components/ProductsSection';
import TestimonialSection from './components/Testominal';
import FAQSection from './components/Faq';
import ContactSection from './components/ContactUs';
import DiseaseDetection from './Models/UploadPage';
import ChartComponent from './Models/Dashboard';
function App() {
  return (

            <>

              <Navigation/>
              <Header />
              <Features />
              <FeatureSection />
              <ProcessSection />
              <ProductsSection />
              <TestimonialSection />
              <FAQSection />
              <ContactSection />  
            </>
       

  );
}

export default App;