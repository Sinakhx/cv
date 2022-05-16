import React from "react";
import PropTypes from "prop-types";

import info from "../../profile-info/education.json";
import "./Education.scss";

export const Education = () => (
    <div className="education">
        <div className="section-title">Education</div>
        <div className="edu-period">{info.period}</div>
        <div className="edu-field">{info.degree}</div>
    </div>
);

Education.propTypes = {
    props: PropTypes.object,
};
