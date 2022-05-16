import React from "react";
import PropTypes from "prop-types";

import "./TechSkills.scss";
import info from "../../profile-info/tech-skills.json";

import { Education } from "../Education/Education";
import { Certifications } from "../Certifications/Certifications";
import { SoftSkills } from "../SoftSkills/SoftSkills";

export const TechSkills = () => (
    <section className="tech-skills">
        <div className="section-title">Tech Skills & Qualifications</div>
        <div className="subtitle">Programming Languages</div>
        <div className="langs">
            {info.programmingLanguages.map((lang) => (
                <span key={lang}>{lang}</span>
            ))}
        </div>
        <div className="subtitle">Tools</div>
        <div className="techs">
            {info.details.map((item) => (
                <div key={item.title}>
                    {item.title}: {item.desc}
                </div>
            ))}
        </div>
        <div className="subtitle">Concepts</div>
        <div className="techs concepts">
            {info.concepts.split(", ").map((item) => (
                <div key={item}>{item}</div>
            ))}
        </div>
        <Education />
        <Certifications />
        <SoftSkills />
    </section>
);

TechSkills.propTypes = {
    info: PropTypes.object,
};
