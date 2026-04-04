import React from "react";
import "./ApnaAdvantage.css";
import "bootstrap/dist/css/bootstrap.min.css";

const ApnaAdvantage = () => {
  return (
    <div className="apnaadvantage-section container">
      <h2 className="adv-heading text-center">
        Online degree + College Check In
      </h2>

     <div className="adv-boxx">
  <div className="adv-table">

    {/* HEADER */}
    <div className="adv-row adv-header">
      <div className="adv-cell feature"></div>
      <div className="adv-cell">Other Platforms</div>
      <div className="adv-cell">Direct Colleges</div>
      <div className="adv-cell highlight">College Check In</div>
    </div>

    {/* ROWS */}
    {[
      "Direct HR connections",
      "1:1 Career Coaching",
      "AI Resume Builder",
      "AI Job Prep",
      "Community Support",
      "Placement Assistance",
      "Upskilling Events",
      "Soft Skills Training"
    ].map((item, index) => (
     <div className="adv-row" key={index}>
  <div className="adv-cell feature">{item}</div>

  {/* 1st line (yaha change kiya) */}
  <div className="adv-cell">
    {index === 6 ? (
      <span className="tick">✔</span>
    ) : (
      <span className="cross">✕</span>
    )}
  </div>

  {/* 2nd line (same as before) */}
  <div className="adv-cell">
    {index === 4 || index === 5 || index === 7 ? (
      <span className="tick">✔</span>
    ) : (
      <span className="cross">✕</span>
    )}
  </div>

  {/* 3rd line (same as before) */}
  <div className="adv-cell highlight">
    <span className="tick">✔</span>
  </div>
</div>
    ))}
  </div>
</div>
    </div>
  );
};

export default ApnaAdvantage;