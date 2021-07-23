import React from "react";
import PropTypes from "prop-types";

import "./WorkExperiences.scss";

export const ExperienceCard = ({ data }) => {
  return (
    <div className="experience-card-container">
      <div className="job-title">
          <span className="bullet"></span>
          <span className="position">{data.title}</span>
          <span className="company">@{data.company}</span>
      </div>
      <div className="subtitle">{data.timeline}</div>
      <div className="description">{data.description}</div>
      <div className="description"><strong>Challenges & Accomplishments</strong>: {data.challenges}</div>
      {!!data.techstack && <div className="description"><strong>Tech Stack</strong>: <span>{data.techstack}</span></div>}
      {!!data.typechecking && !!data.versioncontrol  && !!data.collaboration && <div className="description"><strong>Type-Checking</strong>: {data.typechecking} &nbsp;<strong>Version Control</strong>: {data.versioncontrol} &nbsp;<strong>Team Collaboration</strong>: {data.collaboration}</div>}
    </div>
  );
};

ExperienceCard.propTypes = {
  data: PropTypes.object,
};
