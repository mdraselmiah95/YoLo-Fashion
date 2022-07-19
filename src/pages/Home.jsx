import React from "react";
import Helmet from "../components/Helmet";
import HeroSlider from "../components/HeroSlider";

import heroSliderDate from "../assets/fake-data/hero-slider";

const Home = () => {
  return (
    <Helmet title="Trang chủ">
      {/* hero slider */}
      <HeroSlider
        data={heroSliderDate}
        control={true}
        auto={true}
        timeOut={5000}
      />
      {/* end hero slider */}
    </Helmet>
  );
};

export default Home;
