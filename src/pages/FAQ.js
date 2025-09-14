import React from 'react';
import './FAQ.css';

const FAQ = () => {
  return (
    <section className="faq-container">
      <h2>Frequently Asked Questions</h2>
      <div className="faq-item">
        <h3>How does ViPOOL work?</h3>
        <p>ViPOOL connects drivers and riders to share rides conveniently.</p>
      </div>
      <div className="faq-item">
        <h3>Is ViPOOL free?</h3>
        <p>Creating an account is free. Drivers set ride prices.</p>
      </div>
    </section>
  );
};

export default FAQ;
