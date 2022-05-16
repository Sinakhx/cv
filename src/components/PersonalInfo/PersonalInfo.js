import React from "react";
import PropTypes from "prop-types";

import info from "../../profile-info/personal-info.json";
import Icons from "../ReactIcons";
import "./PersonalInfo.scss";

export const PersonalInfo = () => {
    const { github, twitter, stackoverflow, linkedin } = info.social;

    return (
        <section className="personal-info">
            <img className="cv-photo" src={info.photoPath} alt="profile pic" />
            <div className="name --bold">{info.name}</div>
            <div className="last-name --bold">{info.lastName}</div>
            <div className="top-title --bold">{info.career}</div>
            <div className="phone --detail">
                <Icons.FaPhone />
                <a href={`tel:${info.phoneNumber.split(" ").join("")}`}>{info.phoneNumber}</a>
            </div>
            <div className="email --detail">
                <Icons.HiMail size={20} /> <a href={`mailto:${info.email}`}>{info.email}</a>
            </div>
            <div className="social">
                <div className="github">
                    <Icons.FaGithub />
                    <a href={github.url}>github/{github.handle}</a>
                </div>
                <div className="stackoverflow">
                    <Icons.FaStackOverflow />
                    <a href={stackoverflow.url}>stackOverflow/{stackoverflow.handle}</a>
                </div>
                <div className="twitter">
                    <Icons.FaTwitter />
                    <a href={twitter.url}>twitter/{twitter.handle}</a>
                </div>
                <div className="linkedin">
                    <Icons.FaLinkedinIn />
                    <a href={linkedin.url}>linkedIn/{linkedin.handle}</a>
                </div>
            </div>
            <a className="qrcode" href={info.qrcodeImg.url}>
                <img src={info.qrcodeImg.path} alt="QR Code" />
            </a>
        </section>
    );
};

PersonalInfo.propTypes = {
    info: PropTypes.object,
};
