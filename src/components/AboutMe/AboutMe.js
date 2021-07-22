import React from "react";
import PropTypes from "prop-types";

import "./AboutMe.scss";

export const AboutMe = ({ info }) => {
  return <section className="about-me">
    <div className="section-title">About Me</div>
    <div className="born">(Born in {info.birthYear})</div>
    <div className="content">{info.content}</div>
  </section>;
};

AboutMe.propTypes = {
  info: PropTypes.object,
};
