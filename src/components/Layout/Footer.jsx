import React from "react";
import logo from "../../assets/header/logo.png";
import { Link } from "react-router-dom";
import { FaFacebookF, FaLinkedinIn, FaPhoneAlt } from "react-icons/fa";
import { FaXTwitter, FaLocationDot } from "react-icons/fa6";
import { FaWhatsapp } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { BsInstagram } from "react-icons/bs";
import { phone1, phone2, email, email2, whatsapp, address } from "../../utils";

const Footer = () => {
  return (
    <footer
      className="footer py-40 mt-40 "
      style={{ backgroundColor: "rgb(235 197 52)" }}
    >
      <div className="container container-lg">
        <div className="footer-item-two-wrapper d-flex align-items-start flex-wrap justify-content-center">
          <div className="footer-item max-w-300">
            <div className="footer-item__logo text-center">
              <Link to="/">
                {" "}
                <img src={logo} alt="" style={{ mixBlendMode: "multiply" }} />
              </Link>
            </div>
            <p className="mb-24 fw-bold text-gray-900 text-center">
              Trusted Safety Solutions for Every Need
            </p>
          </div>

          <div className="footer-item" style={{ maxWidth: "500px" }}>
            <div className="flex-align gap-16 mb-16 d-flex align-items-center">
              <FaPhoneAlt />
              <div
                className="d-flex gap-10 flex-column"
                style={{ flexWrap: "wrap" }}
              >
                <a
                  href={`tel:${phone1}`}
                  className="text-md text-gray-900 hover-text-main-600"
                >
                  {phone1}
                </a>
                <a
                  href={`tel:${phone2}`}
                  className="text-md text-gray-900 hover-text-main-600"
                >
                  {phone2}
                </a>
              </div>
            </div>
            <div className="flex-align gap-16 mb-16">
              <MdEmail />
              <a
                href={`mailto:${email}`}
                className="text-md text-gray-900 hover-text-main-600"
              >
                {email}
              </a>
            </div>
            <div className="flex-align gap-16 mb-16">
              <MdEmail />
              <a
                href={`mailto:${email2}`}
                className="text-md text-gray-900 hover-text-main-600"
              >
                {email2}
              </a>
            </div>
            <div className="flex-align gap-16 mb-16">
              <FaLocationDot />
              <span className="text-md text-gray-900">{address}</span>
            </div>
          </div>

          <div className="footer-item">
            {/* <h6 className="footer-item__title">About</h6> */}
            <ul className="footer-menu">
              <li className="mb-16">
                <Link to="/" className="text-gray-600 hover-text-main-600">
                  Home
                </Link>
              </li>
              <li className="mb-16">
                <Link to="/about" className="text-gray-600 hover-text-main-600">
                  About Us
                </Link>
              </li>
              <li className="mb-16">
                <Link to="/#" className="text-gray-600 hover-text-main-600">
                  Brochure
                </Link>
              </li>

              <li className="mb-16">
                <Link
                  to="/contact"
                  className="text-gray-600 hover-text-main-600"
                >
                  Enquiry
                </Link>
              </li>
            </ul>
          </div>
          <div className="footer-item">
            <h6 className="footer-item__title">Find us on</h6>
            <ul className="footer-menu d-flex justify-content-center py-8 gap-14 align-items-center">
              <li>
                <a href="#">
                  <FaFacebookF />
                </a>
              </li>
              <li>
                <a
                  href={`https://wa.me/${whatsapp}`}
                  className="text-dark"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaWhatsapp />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
