import React from "react";
import "./About.css";
import Collabs from "../Home/Collabs";
import Brands from "../Home/Brands";
import aboutimg from "../../assets/banner/about.jpeg";

const About = () => {
  return (
    <>
      <section className="about-us-section py-40">
        <div className="container">
          {/* Hero Section */}
          <div className="row align-items-center mx-5 py-36">
            <div className="col-lg-6 my-4 mb-lg-0">
              <h5 className="font-weight-bold text-primary mb-3 flex-align-start">
                About{" "}
                <span className="text-dark">AK Fire Safety Solutions</span>
              </h5>
              <h2 className="mb-3">Your Shield Against the Flames</h2>
              <p className="text-dark mt-4">
                Established in 2019, AK Fire Safety Solutions is a trusted
                provider of high-quality fire safety equipment and systems,
                serving industries across India with reliable protection
                solutions.
              </p>
            </div>
            <div className="col-lg-6 text-center">
              <img
                src={aboutimg}
                alt="Fire Safety Equipment"
                className="img-fluid rounded shadow"
                style={{ maxHeight: "400px" }}
              />
            </div>
          </div>

          {/* Vision & Mission */}
          <div className="row gy-4 text-center my-36">
            <div className="col-md-6">
              <div className="card">
                <h4 className="text-primary font-weight-bold mb-10">
                  Our Vision
                </h4>
                <p className="text-muted">
                  To create worry-free environments for businesses and
                  facilities through cutting-edge fire safety solutions.
                </p>
              </div>
            </div>
            <div className="col-md-6">
              <div className="card">
                <h4 className="text-primary font-weight-bold mb-10">
                  Our Mission
                </h4>
                <p className="text-muted">
                  Deliver uncompromising fire safety products and systems that
                  protect lives, assets, and infrastructure.
                </p>
              </div>
            </div>
          </div>

          {/* Why Choose Us & Core Values */}
          <div className="row gy-4 text-center my-36">
            <div className="col-md-6">
              <div className="card">
                <h4 className="text-primary font-weight-bold mb-10">
                  Why Choose Us?
                </h4>
                <p className="text-muted">
                  For reliable, innovative fire safety equipment that ensures
                  robust protection for your facilities and personnel. We are
                  your trusted partner in safety.
                </p>
              </div>
            </div>
            <div className="col-md-6">
              <div className="card">
                <h4 className="text-primary font-weight-bold mb-10">
                  Our Core Values
                </h4>
                <ul className="text-muted text-left">
                  <li>
                    <strong>Quality Integrity:</strong> Uncompromising standards
                    in all our products.
                  </li>
                  <li>
                    <strong>Transparent Reliability:</strong> Honest and
                    dependable service.
                  </li>
                  <li>
                    <strong>Efficient Delivery:</strong> Fast turnaround for
                    urgent safety needs.
                  </li>
                  <li>
                    <strong>Nationwide Coverage:</strong> Serving clients across
                    India.
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Founder Section */}
          <div className="text-center mb-5 my-40">
            <h2 className="font-weight-bold text-primary mb-40">Our Team</h2>
            <div className="row gy-4 justify-content-center text-center">
              <div className="col-md-8">
                <h4 className="font-weight-bold mb-20">
                  Founder: Mr. Dharmendra Narshi Minat
                </h4>
                <p className="text-muted">
                  With over 15 years of experience in the fire safety industry,
                  our founder leads AK Fire Safety Solutions with a commitment
                  to innovation, quality, and customer trust.
                </p>
              </div>
            </div>
          </div>

          {/* Product Range */}
          <div className="text-center mt-40">
            <h2 className="font-weight-bold text-primary mb-40">
              Our Product Range
            </h2>
            <div className="row gy-4 justify-content-center">
              <div className="col-lg-4 col-sm-6">
                <div className="card">
                  <h4 className="text-dark mb-20">
                    Fire Extinguishers & Systems
                  </h4>
                  <p className="text-muted">
                    ABC Dry Powder, CO₂, Foam, Clean Agent (FM-200), and Fire
                    Ball extinguishers.
                  </p>
                </div>
              </div>
              <div className="col-lg-4 col-sm-6">
                <div className="card">
                  <h4 className="text-dark mb-20">Detection & Alarm Systems</h4>
                  <p className="text-muted">
                    Smoke/Heat Detectors, Control Panels, Hooters, and Strobe
                    Lights.
                  </p>
                </div>
              </div>
              <div className="col-lg-4 col-sm-6">
                <div className="card">
                  <h4 className="text-dark mb-20">PPE & Rescue Equipment</h4>
                  <p className="text-muted">
                    Safety Helmets, Fire Retardant Suits, First Aid Kits, and
                    Evacuation Chairs.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Statistics */}
          <div className="row text-center gy-4 mt-10 justify-content-center">
            <div className="col-lg-4 col-sm-6">
              <div className="p-40 bg-secondary text-white rounded shadow-sm">
                <h2 className="text-white">1000+</h2>
                <p>Satisfied Clients</p>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6">
              <div className="p-40 bg-secondary text-white rounded shadow-sm">
                <h2 className="text-white">15+</h2>
                <p>Years of Expertise</p>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6">
              <div className="p-40 bg-secondary text-white rounded shadow-sm">
                <h2 className="text-white">500+</h2>
                <p>Products Available</p>
              </div>
            </div>
            {/* <div className="col-lg-3 col-sm-6">
              <div className="p-40 bg-secondary text-white rounded shadow-sm">
                <h2 className="text-white">India</h2>
                <p>Service Coverage</p>
              </div>
            </div> */}
          </div>
        </div>
      </section>
      {/* <Collabs /> */}
      <Brands />
    </>
  );
};

export default About;
