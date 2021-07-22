import React from "react";
import PropTypes from "prop-types";

import "./WorkExperiences.scss";
import { ExperienceCard } from "./ExperienceCard";

export const WorkExperiences = ({ info }) => {
  return (
    <section className="work-experiences">
      <div className="section-title">Work Experiences</div>
      {info.map(description => <ExperienceCard key={description.company} data={description} />)}
    </section>
  );
};

WorkExperiences.propTypes = {
  info: PropTypes.arrayOf(PropTypes.object),
};
