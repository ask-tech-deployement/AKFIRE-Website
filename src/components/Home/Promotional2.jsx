import React from "react";
import { Link } from "react-router-dom";
import noimg from "../../assets/banner/1.png";
import pkg2 from "../../assets/banner/pkg2.png";
import pkg3 from "../../assets/banner/pkg3.png";

const Promotional2 = () => {
  return (
    <section className="promotional-banner mt-32">
      <div className="container container-lg">
        <div className="row gy-4">
          {/* Fire Safety Products */}
          <div className="col-lg-4 col-sm-6">
            <div className="position-relative rounded-16 overflow-hidden z-1 p-32 d-flex flex-row">
              <img
                src="assets/images/bg/promo-bg-img1.png"
                alt="Fire Safety"
                className="position-absolute inset-block-start-0 inset-inline-start-0 w-100 h-100 object-fit-cover z-n1"
              />
              <div className="text-container pe-xxl-4">
                <h6 className="mb-8" style={{ color: "white" }}>
                  Fire Safety Solutions
                </h6>
                <p className="mb-16" style={{ color: "white" }}>
                  Protect your assets with fire alarms, extinguishers, and
                  safety gear.
                </p>
                <Link
                  to="/product/1/0"
                  className="d-inline-flex align-items-center gap-8 text-heading text-md fw-medium border border-top-0 border-end-0 border-start-0 border-gray-900 hover-text-main-two-600 hover-border-main-two-600"
                >
                  Explore Now
                  <span className="icon text-md d-flex">
                    <i className="ph ph-plus" />
                  </span>
                </Link>
              </div>
              <div className="image-container">
                <img
                  src={noimg}
                  alt="Fire Safety Products"
                  style={{ minWidth: "150px", maxHeight: "200px" }}
                />
              </div>
            </div>
          </div>

          {/* Tools and Equipment */}
          <div className="col-lg-4 col-sm-6">
            <div className="position-relative rounded-16 overflow-hidden z-1 p-32 d-flex flex-row">
              <img
                src="assets/images/bg/promo-bg-img2.png"
                alt="Tools"
                className="position-absolute inset-block-start-0 inset-inline-start-0 w-100 h-100 object-fit-cover z-n1"
              />
              <div className="text-container pe-xxl-4">
                <h6 className=" mb-8" style={{ color: "white" }}>
                  Tools & Equipment
                </h6>
                <p className="mb-16" style={{ color: "white" }}>
                  Essential tools and safety equipment for industrial needs and
                  beyond.
                </p>
                <Link
                  to="/product/3/0"
                  className="d-inline-flex align-items-center gap-8 text-heading text-md fw-medium border border-top-0 border-end-0 border-start-0 border-gray-900 hover-text-main-two-600 hover-border-main-two-600"
                >
                  Explore Now
                  <span className="icon text-md d-flex">
                    <i className="ph ph-plus" />
                  </span>
                </Link>
              </div>
              <div className="image-container">
                <img
                  src={pkg2}
                  alt="Tools & Equipment"
                  style={{ minWidth: "150px", maxHeight: "200px" }}
                />
              </div>
            </div>
          </div>

          {/* Electrical Items */}
          <div className="col-lg-4 col-sm-6">
            <div className="position-relative rounded-16 overflow-hidden z-1 p-32 d-flex flex-row">
              <img
                src="assets/images/bg/promo-bg-img3.png"
                alt="Electrical Items"
                className="position-absolute inset-block-start-0 inset-inline-start-0 w-100 h-100 object-fit-cover z-n1"
              />
              <div className="text-container pe-xxl-4">
                <h6 className=" mb-8" style={{ color: "white" }}>
                  Electrical Supplies
                </h6>
                <p className="mb-16" style={{ color: "white" }}>
                  Find everything from electrical components to installation
                  tools.
                </p>
                <Link
                  to="/product/2/0"
                  className="d-inline-flex align-items-center gap-8 text-heading text-md fw-medium border border-top-0 border-end-0 border-start-0 border-gray-900 hover-text-main-two-600 hover-border-main-two-600"
                >
                  Explore Now
                  <span className="icon text-md d-flex">
                    <i className="ph ph-plus" />
                  </span>
                </Link>
              </div>
              <div className="image-container">
                <img
                  src={pkg3}
                  alt="Electrical Items"
                  style={{ minWidth: "150px", maxHeight: "200px" }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Promotional2;
