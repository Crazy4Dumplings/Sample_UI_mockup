import React from "react";
import "../styles/Footer.css";

function Footer() {
  return (
    <footer>
      <div className="container">
        <br />
        <br />
        <div className="footer">
          <div className="footer-item">
            <h2 className=" mp-reset">Logo</h2>
            <div className="social-icon">
              <div className="social-icon-item">
                <i className="fab fa-facebook-f"></i>
              </div>
              <div className="social-icon-item">
                <i className="fab fa-twitter"></i>
              </div>
              <div className="social-icon-item">
                <i className="fas fa-map-marker-alt"></i>
              </div>
            </div>
          </div>
          <div className="footer-item">
            <p>info@example.com</p>
            <p>(312 3123-31231, (123) 213-1234)</p>
            <p>1255 W 15th St #815, Piano, TX 75075, USA</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
