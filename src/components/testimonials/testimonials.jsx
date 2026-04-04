import React from "react";
import "./testimonial.css";

const testimonials = [
  {
    text: "I wanted to build a strong career foundation but was concerned about the time and cost of an on-campus MBA. Choosing an online MBA gave me the flexibility to study at my own pace while working part-time and pursuing hobbies.",
    name: "Aman",
    course: "Online MBA",
  },
  {
    text: "The online BCA allows me to manage studies, a part-time job, and hobbies. Its flexibility keeps me focused and well-prepared for future opportunities.",
    name: "Rohini",
    course: "Online BCA",
  },
  {
    text: "After taking a career break, I wanted to upskill without compromising family or other responsibilities. The online M.Com helped me regain confidence.",
    name: "Neha",
    course: "Online M.Com",
  },
  {
    text: "As a full-time software developer, pursuing an on-campus MCA wasn't feasible. The online MCA helped me sharpen coding skills.",
    name: "Priya",
    course: "Online MCA",
  },
];

const Testimonials = ({ setShowForm }) => {
  return (
    <section className="testimonial-section">
      <div className="container">
        <h2 className="testimonial-heading text-center">
          Hear from our students
        </h2>

        {/* SCROLL CONTAINER */}
        <div className="testimonial-scroll">
          {testimonials.map((item, index) => (
            <div className="testimonial-item" key={index}>
              <div className="testimonial-card">
                
                <div className="quote">
                  <span className="quote-css"></span>
                </div>

                <p className="testimonial-text">{item.text}</p>

                <p className="testimonial-user">
                  {item.name}, <span>{item.course}</span>
                </p>

              </div>
            </div>
          ))}
        </div>
        {/* ✅ BUTTON */}
         <div className="testimonial-btn-wrapper">
              <button className="enroll-btn" onClick={() => setShowForm(true)}>
                Enroll Now
              </button>
         </div>

      </div>
    </section>
  );
};

export default Testimonials;