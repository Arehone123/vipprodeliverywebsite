import React from "react";
import "./Footer.css"; // if you're separating styles later

const Footer = () => {
  return (
    <footer className="footer" data-aos="fade-up">
      <div className="footer-content">
        {/* Left Section - Services */}
        <div className="footer-left" data-aos="fade-right">
          <h2 className="footer-title">All Roads Lead To Africa</h2>
          <div className="footer-line"></div>
          <ul className="footer-list">
            <li>Tourism / Tours</li>
            <li>Airports and Transfers</li>
            <li>Charters / Business Trips</li>
            <li>Short and Long Routes</li>
          </ul>
        </div>

        {/* Right Section - Contact Info */}
        <div className="footer-right" data-aos="fade-left">
          <p>📞 <a href="tel:+27815936882">+27-81-593-6882</a></p>
          <p>📞 <a href="tel:+27785236712">+27-78-523-6712</a></p>
          <p>📧 <a href="mailto:B.katundu@gmail.com">B.katundu@gmail.com</a></p>
          <p>🌍 <a href="https://vipprodelivery.com" target="_blank" rel="noopener noreferrer">vipprodelivery.com</a></p>
        </div>
      </div>

      <div className="footer-text" data-aos="fade-up" data-aos-delay="200">
        © 2025 All Roads Lead To Africa. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
