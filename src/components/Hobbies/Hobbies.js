import React from "react";
import PropTypes from "prop-types";

import info from "../../profile-info/hobbies.json";
import Icons from "../ReactIcons";
import "./Hobbies.scss";

export const Hobbies = () => (
    <section className="hobbies">
        <div className="section-title">Hobbies</div>
        <div className="hobbies-container">
          {info.map(item => {
            const Icon = Icons[item["react-icon"]];
            return (
              <div key={item.name} className="hobby">
                  <Icon />
                  <div>{item.name}</div>
              </div>
            )
          })}
        </div>
    </section>
);

Hobbies.propTypes = {
    info: PropTypes.array,
};
