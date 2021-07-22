import React from "react";
import PropTypes from "prop-types";

import "./TechSkills.scss";

export const TechSkills = ({ info }) => {
  return (
    <section className="tech-skills">
      <div className="section-title">Tech Skills & Qualifications</div>
      <div className="subtitle">Programming Languages</div>
      <div className="langs">{info.ProgrammingLanguages.split(", ").map(lang => <span key={lang}>{lang}</span>)}</div>
      <div className="subtitle">Tools</div>
      <div className="techs">
        <div>OS: {info.OS}</div>
        <div>VCS: {info.VCS}</div>
        <div>UI: {info.UI}</div>
        <div>SSR: {info.SSR}</div>
        <div>Data Fetching: {info.DataFetching}</div>
        <div>State Management: {info.StateManagement}</div>
        <div>Testing: Jest, {info.Testing}</div>
        <div>Type-Checking: {info.TypeChecking}</div>
        <div>Linting: {info.Linting}</div>
        <div>Build Systems: {info.BuildSystems}</div>
        <div>Package Management: {info.PackageManagement}</div>
        <div>Documentation: {info.Documentation}</div>
      </div>
      <div className="subtitle">Concepts</div>
      <div className="techs concepts">{info.Concepts.split(", ").map(item => <div key={item}>{item}</div>)}</div>
    </section>
  );
};

TechSkills.propTypes = {
  info: PropTypes.object,
};
