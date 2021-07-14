import React from "react";
import PropTypes from "prop-types";
import { FaPhone, FaStackOverflow, FaGithub, FaTwitter, FaLinkedinIn } from 'react-icons/fa';
import { HiMail } from 'react-icons/hi';

import "./PersonalInfo.scss";

export const PersonalInfo = (props) => {
  return <section className="personal-info">
    <img className="cv-photo" src="/cv-photo.jpg" alt="profile pic" />
    <div className="name --bold">SINA</div>
    <div className="last-name --bold">KHODABANDEHLOO</div>
    <div className="title --bold">FRONTEND DEVELOPER</div>
    <div className="phone --detail"><FaPhone /> +98 912 397 38 05</div>
    <div className="email --detail"><HiMail size={20} />&nbsp;<span>khodabandehloo.sina@gmail.com</span></div>
    <div className="social">
      <div className="github"><FaGithub />&nbsp;<span>github/sinakhx</span></div>
      <div className="stackoverflow"><FaStackOverflow />&nbsp;<span>stackOverflow/8885324/sina</span></div>
      <div className="twitter"><FaTwitter />&nbsp;<span>twitter/sinakhx</span></div>
      <div className="linkedin"><FaLinkedinIn />&nbsp;<span>linkedIn/sina-khodabandehloo</span></div>
    </div>
  </section>;
};

PersonalInfo.propTypes = {
  props: PropTypes.object,
};
