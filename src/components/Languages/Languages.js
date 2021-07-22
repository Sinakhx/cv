import React from "react";
import PropTypes from "prop-types";

import "./Languages.scss";

export const Languages = ({ info }) => {
  return (
    <section className="languages">
      <div className="section-title">Languages</div>
      {info.map((language) => (
        <React.Fragment key={language.lang}>
          <div className="subtitle">{language.lang}</div>
          <div className="lang-desc">{language.fluency}</div>
        </React.Fragment>
      ))}
    </section>
  );
};

Languages.propTypes = {
  info: PropTypes.array,
};
