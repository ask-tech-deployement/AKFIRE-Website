import React from "react";
import Banner from "./Banner";
import ProductSlider from "./ProductSlider";
import PromotionalOneBuroNeel from "./PromotionalOneBuroNeel";
import FeaturedOneHome from "./FeaturedOneHome";
import PromotionalBanner1 from "./PromotionalBanner1";
import Promotional2 from "./Promotional2";
import Collabs from "./Collabs";
import Brands from "./Brands";
// import Preloader from "../../helper/Preloader";

const Home = () => {
  return (
    <>
      {/* <Preloader /> */}
      <Banner />
      <FeaturedOneHome title="Fire Safety Products" categoryid={1} />
      <PromotionalOneBuroNeel />
      <ProductSlider title="Fire Safety Products" categoryid={1} />
      <Promotional2 />
      <ProductSlider title="Tools and Equipment" categoryid={2} />
      <PromotionalBanner1 />
      {/* <Collabs /> */}
      <ProductSlider title="Electrical Items" categoryid={3} />
      <Brands />
    </>
  );
};

export default Home;
