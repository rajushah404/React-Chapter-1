import "../css/Footer.css";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Company Info */}
        <div className="footer-section">
          <h2 className="footer-title">Demo</h2>
          <p className="footer-text">Your Demo eCommerce platform for all your shopping needs.</p>
        </div>

        {/* Quick Links */}
        <div className="footer-section">
          <h3 className="footer-subtitle">Quick Links</h3>
          <ul className="footer-list">
            <li><a href="#">Home</a></li>
            <li><a href="#">Shop</a></li>
            <li><a href="#">About Us</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </div>

        {/* Customer Service */}
        <div className="footer-section">
          <h3 className="footer-subtitle">Customer Service</h3>
          <ul className="footer-list">
            <li><a href="#">FAQs</a></li>
            <li><a href="#">Shipping & Returns</a></li>
            <li><a href="#">Privacy Policy</a></li>
            <li><a href="#">Terms & Conditions</a></li>
          </ul>
        </div>

        {/* Social Media */}
        <div className="footer-section">
          <h3 className="footer-subtitle">Follow Us</h3>
          <div className="footer-socials">
            <a href="#"><FaFacebookF /></a>
            <a href="#"><FaTwitter /></a>
            <a href="#"><FaInstagram /></a>
            <a href="#"><FaLinkedinIn /></a>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="footer-copyright">
        &copy; {new Date().getFullYear()} Demo. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
