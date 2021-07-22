import React from "react";
import PropTypes from "prop-types";
import { FaHeadphones } from 'react-icons/fa';
import { GiChessPawn, GiYinYang } from 'react-icons/gi';

import "./Hobbies.scss";

export const Hobbies = ({ info }) => {
  return (
    <section className="hobbies">
      <div className="section-title">Hobbies</div>
      <div className="hobbies-container">
        <div className="hobby"><GiChessPawn /><div>{info[0]}</div></div>
        <div className="hobby"><GiYinYang /><div>{info[1]}</div></div>
        <div className="hobby"><FaHeadphones /><div>{info[2]}</div></div>
      </div>
    </section>
  );
};

Hobbies.propTypes = {
  info: PropTypes.array,
};
