import React, { useState } from 'react';

const faqs = [
  {
    id: 1,
    question: 'How does the orange disease detection system work?',
    answer: `Our system uses a Convolutional Neural Network (CNN) model trained on thousands of orange leaf images. Just upload a photo of the leaf, and the system will analyze and predict the type of disease in seconds.`,
  },
  {
    id: 2,
    question: 'What kind of images should I upload?',
    answer: `You should upload a clear image of the orange leaf, preferably taken in natural light. Ensure that the diseased area is visible and not blurry or shadowed for accurate results.`,
  },
  {
    id: 3,
    question: 'Which orange diseases can this detect?',
    answer: `Currently, our model can detect the following diseases: Citrus Canker, Greasy Spot, Citrus Scab, and Black Spot. More diseases will be added in future updates as we expand our dataset.`,
  },
  {
    id: 4,
    question: 'Is this service free to use?',
    answer: `Yes, our platform is currently free for all users. We aim to support farmers and agricultural researchers by providing accessible plant health diagnostics.`,
  },
];

const FAQSection = () => {
  const [openId, setOpenId] = useState(null);

  const toggleFAQ = (id) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <div id="faqs" style={{ padding: '90px 0', backgroundColor: '#fff' }}>
      <div className="container" style={{ maxWidth: '900px' }}>
        <div className="section-header" style={{ marginBottom: '40px' }}>
          <p style={{ color: '#555' }}>Quick</p>
          <h1>FAQs</h1>
        </div>

        <div className="row" style={{ display: 'flex', flexWrap: 'wrap', gap: '40px' }}>
          <div className="col-md-6" style={{ flex: '1 1 45%' }}>
            <div className="faqs-text">
              <h2>Frequently Asked Questions</h2>
              <p>
                Here are some common questions farmers and users ask about our orange disease detection platform. We aim to make crop health management simple and accessible for everyone.
              </p>
              <p>
                If you have any other queries, feel free to reach out through our contact page or support email.
              </p>
            </div>
          </div>

          <div className="col-md-6" style={{ flex: '1 1 45%' }}>
            <div>
              {faqs.map(({ id, question, answer }) => (
                <div
                  key={id}
                  style={{
                    borderBottom: '1px solid #eee',
                    padding: '15px 0',
                    cursor: 'pointer',
                  }}
                  onClick={() => toggleFAQ(id)}
                  aria-expanded={openId === id}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      toggleFAQ(id);
                    }
                  }}
                >
                  <h5 style={{ margin: 0, fontWeight: '600', color: openId === id ? '#FFD662' : '#333' }}>
                    {question}
                  </h5>
                  {openId === id && (
                    <p style={{ marginTop: '10px', fontWeight: '400', color: '#555' }}>{answer}</p>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQSection;
