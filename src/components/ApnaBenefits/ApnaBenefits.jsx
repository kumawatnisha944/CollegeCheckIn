import React from "react";
import "./ApnaBenefits.css";
import LogoSlider from "../Banner/LogoSlider";
import img1 from "./emi1.jpeg";
import img2 from "./emi2.jpeg";
import img3 from "./emi3.jpeg";
const logos = Array.from({ length: 12 }, (_, i) =>
  new URL(`../Banner/lg${i + 1}.png`, import.meta.url).href
);

const ApnaBenefits = ({ setShowForm }) => {
  return (
    <div className="benefits-section container text-center">
      
      {/* HEADING */}
      <h2 className="benefits-heading">
        Get your degree & <span>College Check In</span> benefits
      </h2>

      {/* CARDS */}
      <div className="row justify-content-center mt-5 g-4">
        
        {/* CARD 1 */}
        <div className="col-md-4">
          <div className="benefit-card">
            <img src={img1} alt="emi" />
            <div className="overlay"></div>
            <div className="content">
              <h4>Affordable EMI Plans</h4>
              <p>
                Get flexible EMI payment options and access to more benefits
              </p>
            </div>
          </div>
        </div>

        {/* CARD 2 */}
        <div className="col-md-4">
          <div className="benefit-card">
            <img src={img2} alt="mnc" />
            <div className="overlay"></div>
            <div className="content">
              <h4>1000+ Direct MNCs </h4>
              <p>
                Get instant access to top hiring professionals across industries
                from India
              </p>
            </div>
          </div>
        </div>

        {/* CARD 3 */}
        <div className="col-md-4">
          <div className="benefit-card">
            <img src={img3} alt="interview" />
            <div className="overlay"></div>
            <div className="content">
              <h4>Interview Preparation</h4>
              <p>
                Personalised guidance from expert career coaches to help you
                make the right move
              </p>
            </div>
          </div>
        </div>

      </div>

      {/* NEW STATS SECTION */}
<div className="stats-section ">

  <div className="row g-4">

    {/* CARD 1 */}
    <div className="col-md-6">
      <a onClick={() => setShowForm(true)} className="stats-card">
        <div>
          <h2>7 Lakh+</h2>
          <p>HIRING PARTNERS</p>
        </div>

        <div className="arrow-circle">
          <div className="outer-circle">
            <div className="inner-circle">
              <span>↗</span>
            </div>
          </div>
        </div>
      </a>
    </div>

    {/* CARD 2 */}
    <div className="col-md-6">
      <a onClick={() => setShowForm(true)} className="stats-card">
        <div>
          <h2>100%</h2>
          <p>JOB ASSISTANCE</p>
        </div>

        <div className="arrow-circle">
          <div className="outer-circle">
            <div className="inner-circle">
              <span>↗</span>
            </div>
          </div>
        </div>
      </a>
    </div>

    {/* CARD 3 */}
    <div className="col-md-6">
      <a onClick={() => setShowForm(true)} className="stats-card">
        <div>
          <h2>3.5 Cr+</h2>
          <p>INTERVIEWS COMPLETED</p>
        </div>

        <div className="arrow-circle">
          <div className="outer-circle">
            <div className="inner-circle">
              <span>↗</span>
            </div>
          </div>
        </div>
      </a>
    </div>

    {/* CARD 4 */}
    <div className="col-md-6">
      <a onClick={() => setShowForm(true)} className="stats-card">
        <div>
          <h2>1 Lakh+</h2>
          <p>JOB OPPORTUNITIES</p>
        </div>

        <div className="arrow-circle">
          <div className="outer-circle">
            <div className="inner-circle">
              <span>↗</span>
            </div>
          </div>
        </div>
      </a>
    </div>

  </div>
  {/* 🔥 NEW HEADING */}
<div className="text-center mt-4">
  <h4 className="stats-bottom-heading">
    More than <span>7 lakh companies</span> hiring
  </h4>
  <LogoSlider logos={logos} />

          {/* ✅ BUTTON */}
         <div className="testimonial-btn-wrapper">
              <button className="enroll-btn" onClick={() => setShowForm(true)}>
                Know more
              </button>
         </div>
</div>
</div>
    </div>
  );
};

export default ApnaBenefits;