import React from "react";
import PropTypes from "prop-types";

import "./Languages.scss";

export const Languages = (props) => {
  return (
    <section className="languages">
      <div className="section-title">Languages</div>
      <div className="subtitle">English</div>
      <div className="lang-desc">full professional proficiency</div>
    </section>
  );
};

Languages.propTypes = {
  props: PropTypes.object,
};
