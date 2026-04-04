import React from "react";
import "./Banner.css";


const LogoSlider = ({ logos }) => {
  return (
    <div className="logo-slider">
      <div className="logo-track">

        {logos.map((logo, index) => (
          <a href="#" key={index}>
            <img src={logo} alt={`logo-${index}`} />
          </a>
        ))}

        {/* duplicate for infinite scroll */}
        {logos.map((logo, index) => (
          <a href={`#dup-${index}`} key={`dup-${index}`}>
            <img src={logo} alt={`logo-${index}`} />
          </a>
        ))}

      </div>
    </div>
  );
};

export default LogoSlider;