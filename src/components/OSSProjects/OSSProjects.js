import React from "react";
import PropTypes from "prop-types";

import info from "../../profile-info/projects.json";
import "./OSSProjects.scss";

export const OSSProjects = () => (
    <section className="open-source-projects">
        <div className="projects">
            <div className="section-title">Open-Source Contributions</div>
            {info.map((project) => (
                <React.Fragment key={project.name}>
                    <div className="proj-name">
                        <a href={project.url}>{project.name}</a>
                        <span>{project.shortLink}</span>
                    </div>
                    <div className="proj-desc">{project.description}</div>
                </React.Fragment>
            ))}
        </div>
    </section>
);

OSSProjects.propTypes = {
    info: PropTypes.object,
};
