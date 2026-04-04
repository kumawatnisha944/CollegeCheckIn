import React from "react";
import "./FloatingButton.css";
import { FaWhatsapp } from "react-icons/fa";
import { FiPhone } from "react-icons/fi";

function FloatingButton() {
  return (
    <div className="floating-container">

      {/* Call Button */}
      <a href="tel:+919950000686" className="float-btn call-btn">
        <FiPhone />
      </a>

      {/* WhatsApp Button */}
      <a
        href="https://wa.me/919950000686"
        target="_blank"
        rel="noopener noreferrer"
        className="float-btn whatsapp-btn"
      >
        <FaWhatsapp />
      </a>

    </div>
  );
}

export default FloatingButton;