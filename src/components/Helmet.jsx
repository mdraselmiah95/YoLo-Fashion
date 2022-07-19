import React from "react";
import PropTypes from "prop-types";

const Helmet = (props) => {
  document.title = "Yolo - " + props.title;
  return <div>Helmet</div>;
};

Helmet.propTypes = {};

export default Helmet;
