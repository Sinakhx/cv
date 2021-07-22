import React from "react";
import PropTypes from "prop-types";

import "./OtherSkills.scss";

export const OtherSkills = ({ info }) => {
  return (
    <section className="other-skills">
      <div className="education">
        <div className="section-title">Education</div>
        <div className="edu-period">{info.education.period}</div>
        <div className="edu-field">{info.education.degree}</div>
      </div>
      <div className="soft-skills">
        <div className="section-title">Soft Skills</div>
        {info.softSkills.split(", ").map(skill => <div key={skill} className="skill">{skill}</div>)}
      </div>
      <div className="certifications">
        <div className="section-title">Certifications</div>
        {info.certifications.map(cert => 
          <React.Fragment key={cert.title}>
            <div className="cert-title">{cert.title}</div>
            <div className="cert-details">
              <span>{cert.issueDate}</span>
              <span><a href={cert.url}>Credential ID: {cert.credentialID}</a></span>
            </div>
          </React.Fragment>
        )}
      </div>
      <div className="projects">
        <div className="section-title">Open-Source Js & React Projects</div>
        {info.projects.map(proj => 
          <React.Fragment key={proj.name}>
            <div className="proj-name"><a href={proj.url}>{proj.name}</a><span>{proj.shortLink}</span></div>
            <div className="proj-desc">{proj.description}</div>
          </React.Fragment>
        )}
      </div>
    </section>
  );
};

OtherSkills.propTypes = {
  info: PropTypes.object,
};
