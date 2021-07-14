import React from "react";
import PropTypes from "prop-types";
import { FaHeadphones } from 'react-icons/fa';
import { GiChessPawn, GiYinYang } from 'react-icons/gi';

import "./Hobbies.scss";

export const Hobbies = (props) => {
  return (
    <section className="hobbies">
      <div className="section-title">Hobbies</div>
      <div className="hobbies-container">
        <div className="hobby"><GiChessPawn /><div>Chess</div></div>
        <div className="hobby"><GiYinYang /><div>Aikido</div></div>
        <div className="hobby"><FaHeadphones /><div>Music</div></div>
      </div>
    </section>
  );
};

Hobbies.propTypes = {
  props: PropTypes.object,
};
