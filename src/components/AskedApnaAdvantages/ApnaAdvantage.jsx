import React from "react";
import "./ApnaAdvantage.css";
import FAQ from "./FAQ";

const ApnaAdvantage = ({ setShowForm }) => {
  const cards = [
    {
      id: 1,
      title: "FIND YOUR DREAM COLLEGE",
      desc: "Our experts handpick the best universities based on your profile",
    },
    {
      id: 2,
      title: "ENROLL FOR ADMISSION",
      desc: "Easy application, EMI options, and zero hassle with end-to-end guidance.",
    },
    {
      id: 3,
      title: "UNLOCK APNA ADVANTAGE BENEFITS",
      desc: "Get easy EMI payment options, direct HR connections, and interview preparation",
    },
  ];

  return (
    <div className="advantage-section container text-center">

      {/* HEADING */}
      <h2 className="advantage-heading">
        How College Check In Works
      </h2>

      {/* SUBTEXT */}
      <p className="advantage-subtext">
        Enroll in your dream college. Unlock free College Check In Benefits!
      </p>

      {/* CARDS */}
      <div className="advantage-cards-wrapper">
        <div className="advantage-cards">
          {cards.map((card) => (
            <div className="adv-card" key={card.id}>
              
              {/* GRID DESIGN */}
              <div className="grid-overlay"></div>

              {/* NUMBER */}
              <span className="card-number">{card.id}</span>

              {/* CONTENT */}
              <h3>{card.title}</h3>
              <p>{card.desc}</p>

              {/* BUTTON */}
              <button
                className="card-btn"
                onClick={() => setShowForm(true)}
              >
                START NOW →
              </button>

            </div>
          ))}
        </div>
      </div>
      <FAQ />
    </div>
  );
};

export default ApnaAdvantage;