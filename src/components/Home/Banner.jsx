import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import FireSafetyImage from "../../assets/banner/banner-img1.png";
import ToolsImage from "../../assets/banner/banner-2.png";
import ElectricalImage from "../../assets/banner/banner-3.png";
import axios from "../../axios";

const Banner = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
        },
      },
    ],
  };

  const [categorys, setCategorys] = useState([]);

  useEffect(() => {
    getAllCategory();
  }, []);

  const getAllCategory = async () => {
    const [mainCat, subCat] = await Promise.all([
      axios.get("GetAllactiveMainCategory"),
      axios.get("/GetAllActiveSubCategory"),
    ]);
    const allcategories = mainCat.data.map((mcat) => {
      const subCategories = subCat.data.filter(
        (scat) => scat.MainCategory_Id === mcat.MainCategory_Id
      );
      return { ...mcat, subCategories };
    });
    setCategorys(allcategories);
  };

  return (
    <div className="banner-two">
      <div className="container container-lg">
        <div className="banner-two-wrapper d-flex align-items-start">
          <div
            style={{ maxHeight: "500px", minHeight: "400px" }}
            className="mt-20 rounded-24 overflow-hidden position-relative arrow-center flex-grow-1 mx-10"
          >
            <img
              src="assets/images/bg/banner-two-bg.png"
              alt=""
              className="banner-img position-absolute inset-block-start-0 inset-inline-start-0 w-100 h-100 z-n1 object-fit-cover rounded-24"
            />
            <div className="banner-item-two__slider">
              <Slider {...settings}>
                {/* Slide 1: Fire Safety Products */}
                <div className="banner-item-two">
                  <div className="banner-item-two__content">
                    <h2 className="banner-item-two__title bounce text-white">
                      Protect What Matters Most
                    </h2>
                    <p className="text-white mb-8">
                      Guarding Lives with Advanced Fire Safety
                      Solutions,Portable Extinguishers, Alarms, Suppression
                      Systems & More
                    </p>
                    <Link
                      to="/category/fire-safety"
                      className="btn btn-outline-white d-inline-flex align-items-center rounded-pill gap-8 mt-48"
                    >
                      Explore Fire Safety
                      <span className="icon text-xl d-flex">
                        <i className="ph ph-fire-simple" />
                      </span>
                    </Link>
                  </div>
                  <div className="banner-item-two__thumb position-absolute bottom-0 end-0">
                    <img
                      src={FireSafetyImage}
                      alt="Fire Safety Products"
                      style={{
                        maxHeight: "700px",
                        objectFit: "contain",
                      }}
                    />
                  </div>
                </div>

                {/* Slide 2: Tools & Equipment */}
                <div className="banner-item-two">
                  <div className="banner-item-two__content">
                    <h2 className="banner-item-two__title bounce text-white">
                      Precision Tools for Industrial Safety
                    </h2>
                    <p className="text-white mb-8">
                      Built to Last, Designed to Protect - Professional Grade
                      Equipment
                    </p>
                    <Link
                      to="/category/tools-equipment"
                      className="btn btn-outline-white d-inline-flex align-items-center rounded-pill gap-8 mt-48"
                    >
                      View Tools
                      <span className="icon text-xl d-flex">
                        <i className="ph ph-hammer" />
                      </span>
                    </Link>
                  </div>
                  <div className="banner-item-two__thumb position-absolute bottom-0 end-0">
                    <img
                      src={ToolsImage}
                      alt="Industrial Tools"
                      style={{
                        maxHeight: "700px",
                        objectFit: "contain",
                      }}
                    />
                  </div>
                </div>

                {/* Slide 3: Electrical Safety Items */}
                <div className="banner-item-two">
                  <div className="banner-item-two__content">
                    <h2 className="banner-item-two__title bounce text-white">
                      Power Safely, Work Confidently
                    </h2>
                    <p className="text-white mb-8">
                      Shockproof Solutions for Hazard-Free Electrical Work
                    </p>
                    <Link
                      to="/category/electrical-safety"
                      className="btn btn-outline-white d-inline-flex align-items-center rounded-pill gap-8 mt-48"
                    >
                      Electrical Solutions
                      <span className="icon text-xl d-flex">
                        <i className="ph ph-lightning" />
                      </span>
                    </Link>
                  </div>
                  <div className="banner-item-two__thumb position-absolute bottom-0 end-0">
                    <img
                      src={ElectricalImage}
                      alt="Electrical Safety Equipment"
                      style={{
                        maxHeight: "700px",
                        objectFit: "contain",
                      }}
                    />
                  </div>
                </div>
              </Slider>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
