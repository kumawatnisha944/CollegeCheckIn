import React, { useState } from "react";
import "./Advantages.css";

const Advantages = ({ showForm, setShowForm }) => {

  // 👉 FIX: Hooks ko component ke andar shift kiya
  const [collegeOpen, setCollegeOpen] = useState(false);
  const [courseOpen, setCourseOpen] = useState(false);

  const [selectedCollege, setSelectedCollege] = useState("");
  const [selectedCourse, setSelectedCourse] = useState("");

  const colleges = [
    "Manipal Academy of Higher Education",
    "Amity University",
    "DY Patil University",
    "Manipal University",
    "Lovely Professional University",
    "UPES",
    "Jain University",
    "Sharda University",
    "Parul University",
    "Chandigarh University",
    "MIT Pune",
    "Sikkim Manipal University"
  ];

  const courses = [
    "MBA",
    "BBA",
    "BCA",
    "M.Sc",
    "M.Com",
    "M.A",
    "BA",
    "B.Com",
    "MCA",
    "Other"
  ];

  return (
    <>
      <div className="advantages-section container">
        
        {/* HEADING */}
        <h2 className="adv-heading text-center">
          Real Advantages. Zero Extra Cost.
        </h2>

        {/* TOP BOX */}
        <div
          className="adv-box large-box"
          onClick={() => setShowForm(true)}
        >
          <div className="adv-content">
            <h3>EASY EMI</h3>
            <p>Options for Admission</p>
          </div>

          <div className="arrow-box">
            <span>↗</span>
          </div>
        </div>

        {/* BOTTOM BOXES */}
        <div className="row mt-4">
          
          {/* LEFT */}
          <div className="col-md-6">
            <div
              className="adv-box"
              onClick={() => setShowForm(true)}
            >
              <div className="adv-content">
                <h3>DIRECT MNC ACCESS</h3>
                <p>
                  Access to top HRs and hiring managers for a job opportunity
                </p>
              </div>

              <div className="arrow-box">
                <span>↗</span>
              </div>
            </div>
          </div>

          {/* RIGHT */}
          <div className="col-md-6">
            <div
              className="adv-box"
              onClick={() => setShowForm(true)}
            >
              <div className="adv-content">
                <h3>1 ON 1 CAREER COACHING</h3>
                <p>
                  Increase your chances of being hired with the help of expert
                  coaches
                </p>
              </div>

              <div className="arrow-box">
                <span>↗</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* MODAL FORM */}
      {showForm && (
        <div className="custom-modal">
          <div className="modal-box">

            <button
              className="close-btn"
              onClick={() => setShowForm(false)}
            >
              ✕
            </button>

            <h4>Admission Open for 2026</h4>

            <input type="text" placeholder="Full Name*" />
            <input type="text" placeholder="Mobile Number*" />

            {/* COLLEGE DROPDOWN */}
            <div className="custom-dropdown">
              <div
                className="dropdown-selected"
                onClick={() => setCollegeOpen(!collegeOpen)}
              >
                {selectedCollege || "Select a college"}
              </div>

              {collegeOpen && (
                <ul className="dropdown-list">
                  {colleges.map((college, index) => (
                    <li
                      key={index}
                      onClick={() => {
                        setSelectedCollege(college);
                        setCollegeOpen(false);
                      }}
                    >
                      {college}
                    </li>
                  ))}
                </ul>
              )}
            </div>

            {/* COURSE DROPDOWN */}
            <div className="custom-dropdown">
              <div
                className="dropdown-selected"
                onClick={() => setCourseOpen(!courseOpen)}
              >
                {selectedCourse || "Select a course"}
              </div>

              {courseOpen && (
                <ul className="dropdown-list">
                  {courses.map((course, index) => (
                    <li
                      key={index}
                      onClick={() => {
                        setSelectedCourse(course);
                        setCourseOpen(false);
                      }}
                    >
                      {course}
                    </li>
                  ))}
                </ul>
              )}
            </div>

            <button className="submit-btn">Submit</button>

            {/* DISCLAIMER TEXT */}
            <p className="form-disclaimer">
              I authorise a representative to contact me via Email/SMS/WhatsApp/Call. 
              This will override on DND/NDNC
            </p>

            <p className="form-terms">
              By filling this form, you agree to the <span>Apna Advantage T&C</span> and <span>Privacy Policy</span>
            </p>
          </div>
        </div>
      )}
    </>
  );
};

export default Advantages;