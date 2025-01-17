import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { route_constants } from "../constants/Routes";
import "./_slider.scss";

const Slider = () => {
  const [nameClass, setNameClass] = useState('animated')
  useEffect(() => {
    setTimeout(() => {
      setNameClass('slide-title')
    }, 100)
  }, [])
  return (
    <div className="hero">
      <div className="slider">
        <ul className="slides">
          <li className="lazy-bg">
            <div className="container">
              <h2 className={nameClass}>Hamza Aslam</h2>
              <h3 className="slide-subtitle">Software Engineer/Game Developer</h3>
              <p className="slide-desc">
                An individual who has a passion for making <br></br> great
                looking and optimized Web apps and Games Applicaions.
              </p>
              <NavLink to={route_constants.ABOUT} className="button cut-corner">
                About Me
              </NavLink>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Slider;
