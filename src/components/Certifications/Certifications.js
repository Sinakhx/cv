import React from "react";
import PropTypes from "prop-types";

import info from "../../profile-info/certifications.json";
import "./Certifications.scss";

export const Certifications = () => (
    <div className="certifications">
        <div className="section-title">Certifications</div>
        {info.map((cert) => (
            <React.Fragment key={cert.title}>
                <div className="cert-title">{cert.title}</div>
                <div className="cert-details">
                    <span>{cert.issueDate}</span>
                    <span>
                        <a href={cert.url}>Credential ID: {cert.credentialID}</a>
                    </span>
                </div>
            </React.Fragment>
        ))}
    </div>
);

Certifications.propTypes = {
    props: PropTypes.object,
};
