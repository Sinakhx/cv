import React from "react";
import PropTypes from "prop-types";

import "./TechSkills.scss";

export const TechSkills = (props) => {
  return (
    <section className="tech-skills">
      <div className="section-title">Tech Skills & Qualifications</div>
      <div className="subtitle">Programming Languages</div>
      <div className="langs"><span>TypeScript</span><span>JavaScript</span></div>
      <div className="subtitle">Tools</div>
      <div className="techs">
        <div>OS: Linux (Ubuntu)  &nbsp;  Windows</div>
        <div>VCS: Git, TFVC</div>
        <div>UI: HTML5, CSS3, Scss, Ant-Design, Material-UI, styled-components</div>
        <div>SSR: Nextjs</div>
        <div>Data Fetching: Ajax, Fetch, Axios, react-query, graphql, Postman</div>
        <div>State Management: Context, MobX, Redux, Recoil</div>
        <div>Testing: Jest, Enzyme</div>
        <div>Type-Checking: TypeScript, PropTypes</div>
        <div>Linting: EsLint</div>
        <div>Build Systems: webpack, gulp, esbuild</div>
        <div>Package Management: npm, yarn</div>
        <div>Documentation: JsDoc, MarkDown</div>
      </div>
      <div className="subtitle">Concepts</div>
      <div className="techs">ES6/ES7/ESNEXT,    OOP,    Regex,    Restful-API,    Cross-browser Compatibility,    Agile (Scrum),    GitFlow,   service-workers,  Clean-Coding</div>
    </section>
  );
};

TechSkills.propTypes = {
  props: PropTypes.object,
};
