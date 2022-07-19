import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

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

HeroSlider.propTypes = {
  data: PropTypes.array.isRequired,
};

const HeroSliderItem = ({ item }) => (
  <div className={`hero-slider__item`}>
    <div className="hero-slider__item__info">
      <div className={`hero-slider__item__info__title color-${item.color}`}>
        <span>{item.title}</span>
      </div>
      <div className="hero-slider__item__info__description">
        <span>{item.description}</span>
      </div>
      <div className="hero-slider__item__info__btn">
        {/* <Link to={props.item.path}>
          <Button
            backgroundColor={props.item.color}
            icon="bx bx-cart"
            animate={true}
          >
            xem chi tiết
          </Button>
        </Link> */}
      </div>
    </div>
    <div className="hero-slider__item__image">
      <div className={`shape bg-${item.color}`}></div>
      <img src={item.img} alt="" />
    </div>
  </div>
);
export default HeroSlider;
