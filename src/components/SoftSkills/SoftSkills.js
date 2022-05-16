import React from "react";
import PropTypes from "prop-types";

import info from "../../profile-info/soft-skills.json";
import "./SoftSkills.scss";

export const SoftSkills = () => (
    <div className="soft-skills">
        <div className="section-title">Soft Skills</div>
        {info.map((skill) => (
            <div key={skill} className="skill">
                {skill}
            </div>
        ))}
    </div>
);

SoftSkills.propTypes = {
    props: PropTypes.object,
};
