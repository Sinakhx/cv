import React from "react";
import PropTypes from "prop-types";

import "./OtherSkills.scss";

export const OtherSkills = (props) => {
  return (
    <section className="other-skills">
      <div className="education">
        <div className="section-title">Education</div>
        <div className="edu-period">2010 SEP - 2014 AUG</div>
        <div className="edu-field">Bachelor's Degree in Civil Engineering</div>
      </div>
      <div className="soft-skills">
        <div className="section-title">Soft Skills</div>
        <div className="skill">Problem Solving</div>
        <div className="skill">Critical Thinking</div>
        <div className="skill">Creativity</div>
        <div className="skill">Teamwork</div>
        <div className="skill">Active Listening</div>
        <div className="skill">Self-Consciousness</div>
        <div className="skill">Perseverance</div>
        <div className="skill">Approachability</div>
      </div>
      <div className="certifications">
        <div className="section-title">Certifications</div>
        <div className="cert-title">Task-Oriented Course in Fundamentals of Python Programming and Algorithmic Thinking,  (with Perfect Score)  Quera</div>
        <div className="cert-details"><span>Issued Jan 2019</span><span><a href="https://quera.ir/certificate/vyDto2ev/">Credential ID: vyDto2ev</a></span></div>
      </div>
      <div className="projects">
        <div className="section-title">Open-Source Js & React Projects</div>
        <div className="proj-name"><a href="https://github.com/Sinakhx/array-slayer">array-slayer</a><span>bit.ly/array-slayer</span></div>
        <div className="proj-desc">array utility library for js which extends the native js array methods for functional programming tackling daily problems
built using esbuild & exported as ESM.</div>
        <div className="proj-name"><a href="https://github.com/Sinakhx/react-big-calendar-only-farsi">react-big-calendar-only-farsi</a><span>bit.ly/rbc-farsi</span></div>
        <div className="proj-desc">manipulated the source-code of the most popular react's events calendar (react-big-calendar) to support persian jalali/khorshidi system & published it & its new dependencies to npm to be used in Chargoon's didgah applications.</div>
      </div>
    </section>
  );
};

OtherSkills.propTypes = {
  props: PropTypes.object,
};
