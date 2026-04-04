import React from "react";
import "./FloatingBottomBar.css";
import { FaWhatsapp, FaPhoneAlt, FaUniversity, FaFileAlt } from "react-icons/fa";


const scrollToCollege = () => {
  const section = document.getElementById("college-section");
  if (section) {
    section.scrollIntoView({ behavior: "smooth" });
  }
};

function FloatingBottomBar({ setShowForm }) {
  return (
    <div className="floating-bottom-bar d-md-none">
      
      {/* WhatsApp */}
      <a
        href="https://wa.me/919950000686"
        target="_blank"
        rel="noopener noreferrer"
        className="float-item whatsapp"
      >
        <FaWhatsapp />
        <span>WhatsApp</span>
      </a>

      {/* Call */}
      <a href="tel:9950000686" className="float-item call">
        <FaPhoneAlt />
        <span>Call</span>
      </a>

      {/* Apply Now */}
      <button className="float-item apply" onClick={() => setShowForm(true)}>
        <FaFileAlt />
        <span>Apply</span>
      </button>

      {/* Find College */}
      <button className="float-item college" onClick={scrollToCollege}>
        <FaUniversity />
        <span>College</span>
      </button>

    </div>
  );
}

export default FloatingBottomBar;