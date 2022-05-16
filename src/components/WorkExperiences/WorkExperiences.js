import React from "react";
import PropTypes from "prop-types";

import "./WorkExperiences.scss";
import info from "../../profile-info/work-experiences.json";
import { ExperienceCard } from "./ExperienceCard";

export const WorkExperiences = () => (
    <section className="work-experiences">
        <div className="section-title">Work Experiences</div>
        {info.map((description) => (
            <ExperienceCard key={description.company} data={description} />
        ))}
    </section>
);

WorkExperiences.propTypes = {
    info: PropTypes.arrayOf(PropTypes.object),
};
