import React from "react";
import "./Footer.css";
import { useNavigate } from "react-router-dom";
function Footer() {
  const navigate = useNavigate();
  return (
    <footer className="footer-section">
      <div className="container">

        {/* LINKS */}
        <div className="footer-links text-center text-md-start">
          <p>
            © 2026 Apna | All rights-reserved
           <span onClick={() => navigate("/privacy-policy")}>Privacy Policy</span>
            <span onClick={() => navigate("/terms")}> Terms & Conditions</span>
            <span onClick={() => navigate("/rewards")}> Rewards T&C</span>
          </p>
        </div>

        {/* DISCLAIMER */}
        <div className="footer-disclaimer text-center">
          <p>
            *Disclaimer: We act as a marketing service and authorised partner
            for this university. However, the university hold full rights to
            request change or removal of any non-relevant content. Images used
            are for illustrative purposes and do not directly represent the
            respective colleges or universities.
          </p>
        </div>

      </div>
    </footer>
  );
}

export default Footer;