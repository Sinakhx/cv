import React from "react";
import PropTypes from "prop-types";
import { HiMail } from 'react-icons/hi';
import { FaPhone, FaStackOverflow, FaGithub, FaTwitter, FaLinkedinIn } from 'react-icons/fa';

import "./PersonalInfo.scss";

export const PersonalInfo = ({ info }) => {
  const { github, twitter, stackoverflow, linkedin } = info.social;

  return <section className="personal-info">
    <img className="cv-photo" src={info.photoPath} alt="profile pic" />
    <div className="name --bold">{info.name}</div>
    <div className="last-name --bold">{info.lastName}</div>
    <div className="top-title --bold">{info.career}</div>
    <div className="phone --detail"><FaPhone /><a href={`tel:${info.phoneNumber.split(" ").join("")}`}>{info.phoneNumber}</a></div>
    <div className="email --detail"><HiMail size={20} /> <a href={`mailto:${info.email}`}>{info.email}</a></div>
    <div className="social">
      <div className="github"><FaGithub /><a href={github.url}>github/{github.handle}</a></div>
      <div className="stackoverflow"><FaStackOverflow /><a href={stackoverflow.url}>stackOverflow/{stackoverflow.handle}</a></div>
      <div className="twitter"><FaTwitter /><a href={twitter.url}>twitter/{twitter.handle}</a></div>
      <div className="linkedin"><FaLinkedinIn /><a href={linkedin.url}>linkedIn/{linkedin.handle}</a></div>
    </div>
    <a className="qrcode" href={info.qrcodeImg.url}><img src={info.qrcodeImg.path} alt="QR Code" /></a>
  </section>;
};

PersonalInfo.propTypes = {
  info: PropTypes.object,
};
