import React from "react";
import PropTypes from "prop-types";

import "./WorkExperiences.scss";
import data from "./staticData.json";
import { ExperienceCard } from "./ExperienceCard";

export const WorkExperiences = (props) => {
  return (
    <section className="work-experiences">
      <div className="section-title">Work Experiences</div>
      {data.map(desc => <ExperienceCard key={desc.company} data={desc} />)}
    </section>
  );
};

WorkExperiences.propTypes = {
  props: PropTypes.object,
};
