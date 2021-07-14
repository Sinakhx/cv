import React from "react";
import PropTypes from "prop-types";

import "./AboutMe.scss";

export const AboutMe = (props) => {
  return <section className="about-me">
    <div className="section-title">About Me</div>
    <div className="born">(Born in 1991)</div>
    <div className="content">I got interested in programming since 14 when I found out how fantastic it can be to create & automate my computer works from nothing but codes. I'm now devoted to programming full-time & I'm amazed by the awesome software engineering concepts that pop & go every & each day to make better applications that can challenge my creativity towards my enthusiast to make the world a better place.
I'm eager to learn & grow both as a person & as an effective team-player by writing quality code that scale to challenging enterprise applications.</div>
  </section>;
};

AboutMe.propTypes = {
  props: PropTypes.object,
};
