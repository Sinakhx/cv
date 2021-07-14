import React from "react";
import PropTypes from "prop-types";

import "./WorkExperiences.scss";
import { ExperienceCard } from "./ExperienceCard";

export const WorkExperiences = (props) => {
  return (
    <section className="work-experiences">
      <div className="section-title">Work Experiences</div>
      <ExperienceCard />
      <ExperienceCard />
      <ExperienceCard />
    </section>
  );
};

WorkExperiences.propTypes = {
  props: PropTypes.object,
};
