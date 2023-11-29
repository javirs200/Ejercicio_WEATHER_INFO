import React from "react";
import './Footer.css'
import { FaInstagram, FaLinkedin, FaGoogle } from "react-icons/fa";

const Footer = () => {
  return (
    <footer>
      <div className="footer-content">
        <ul className="socials">
          <li>
            <a href="#">
              <FaGoogle size={30} color="#DB4437" />
            </a>
          </li>
          <li>
            <a href="#">
              <FaInstagram size={30} color="#C13584" />
            </a>
          </li>
          <li>
            <a href="#">
              <FaLinkedin size={30} color="#0077B5" />
            </a>
          </li>
        </ul>
      </div>
      <div className="footer-bottom">
        <p>
          copyright &copy; <a href="#">Javi</a>{" "}
        </p>
      </div>
    </footer>)
};

export default Footer;
