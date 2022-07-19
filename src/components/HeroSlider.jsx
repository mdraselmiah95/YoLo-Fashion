import React from "react";
import PropTypes from "prop-types";

const HeroSlider = ({ data }) => {
  return (
    <div className="hero-slider">
      {data.map((item) => (
        <HeroSliderItem
          key={item.id}
          item={item}
          // active={index === activeSlide}
        />
      ))}
    </div>
  );
};

HeroSlider.propTypes = {};

const HeroSliderItem = ({ item }) => {
  console.log(item);
  <div className="hero-slider__item"></div>;
};

export default HeroSlider;
