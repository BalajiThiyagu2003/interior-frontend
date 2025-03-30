import React from "react";

const Footer = () => {
  return (
    <footer className="footer-section">
      <div className="container">
        <div className="row">



          <div className="col-md-4 footer-content">
            <h2 className="footer-title">KTB</h2>
            <p className="footer-text">
              At KTB, we specialize in interior architecture, blending aesthetics and functionality
              to craft stunning spaces. Our expertise ensures a seamless balance between structure and usability.
            </p>
          </div>

          <div className="col-md-4 footer-content">
            <h2 className="footer-title">We Are In</h2>
            <ul className="footer-list">
              {["Bangalore", "Chennai", "Kerala", "Delhi", "Pune"].map((city) => (
                <li key={city}>
                  <a href="#" className="footer-link">{city}</a>
                </li>
              ))}
            </ul>
          </div>

          <div className="col-md-4 footer-content">
            <h2 className="footer-title">Follow Us</h2>
            <ul className="footer-list">
              {["Facebook", "LinkedIn", "Twitter", "Instagram"].map((platform) => (
                <li key={platform}>
                  <a href="#" className="footer-link">{platform}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="text-center footer-bottom">
          <p className="footer-text">&copy; 2025 KTB Interiors. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
