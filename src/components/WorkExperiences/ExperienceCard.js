import React from "react";
import PropTypes from "prop-types";

import "./WorkExperiences.scss";

export const ExperienceCard = (props) => {
  return (
    <div className="experience-card-container">
      <div className="job-title">
          <span className="bullet"></span>
          <span className="position">Front-End Developer & JS Consultant</span>
          <span className="company">@Bedaan Inc</span>
      </div>
      <div className="subtitle">2020 JUN - Present (contract)</div>
      <div className="description">I'm currently in charge of developing an advanced trading platform & portfolio optimization dashboard while offering best utils & packages & mentoring junior developers.</div>
      <div className="description"><strong>Challenges</strong>: building a highly re-usable, customizable & scalable stockTables component for tens of different pages using the BLOC pattern & MVVM.</div>
      <div className="description"><strong>Tech Stack</strong>: <span>React, MobX, handlebars, web-components, react-router, axios, i18next, Scss, apexcharts, eslint, jest, enzyme, rollup, webpack, markdown, react-beautiful-dnd, dayjs, typedjs</span></div>
      <div className="description"><strong>Type-Checking</strong>: PropTypes &nbsp;<strong>Version Control</strong>: Git &nbsp;<strong>Team Collaboration</strong>: Taskulu</div>
    </div>
  );
};

ExperienceCard.propTypes = {
  props: PropTypes.object,
};
