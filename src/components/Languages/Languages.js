import React from "react";
import PropTypes from "prop-types";

import info from "../../profile-info/languages.json";
import "./Languages.scss";

export const Languages = () => (
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

Languages.propTypes = {
    info: PropTypes.array,
};
