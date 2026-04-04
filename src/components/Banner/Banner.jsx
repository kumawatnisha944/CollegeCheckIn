import React, { useEffect, useState } from "react";
import "./Banner.css";
import logo from "./logo.png";  // path adjust karo
import LogoSlider from "./LogoSlider";
const logos = Array.from({ length: 12 }, (_, i) =>
  new URL(`./lg${i + 1}.png`, import.meta.url).href
);

const Banner = () => {

  // TIMER
  const [time, setTime] = useState({
    hrs: 11,
    mins: 47,
    secs: 46,
  });
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
  useEffect(() => {
    const interval = setInterval(() => {
      setTime((prev) => {
        let { hrs, mins, secs } = prev;

        if (secs > 0) secs--;
        else {
          if (mins > 0) {
            mins--;
            secs = 59;
          } else {
            if (hrs > 0) {
              hrs--;
              mins = 59;
              secs = 59;
            }
          }
        }

        return { hrs, mins, secs };
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="banner">
      <div className="container">
        <div className="row align-items-center gy-4">

          {/* LEFT SIDE */}
          <div className="col-lg-6 banner-left">

            <h3 className="logo-text">
            <img src={logo} alt="College Check In" className="logo-img" />
            </h3>

            <h1>
              Get <span className="italic">online degree</span> from
              <br />
              a top university
            </h1>

            <p className="naac">ONLY NAAC A+ UNIVERSITIES</p>

            <div className="timer">
                          <div className="time-box">
                <div>
                  <span>{String(time.hrs).padStart(2, "0")}</span>
                  <p>HRS</p>
                </div>
                <div>
                  <span>{String(time.mins).padStart(2, "0")}</span>
                  <p>MINS</p>
                </div>
                <div>
                  <span>{String(time.secs).padStart(2, "0")}</span>
                  <p>SECS</p>
                </div>
              </div>
              <p className="timer-title">Application closes in</p>
            </div>

            <button className="register-btn">
              Register Now →
            </button>
          </div>

{/* RIGHT SIDE FORM */}
<div className="col-lg-6">
  <div className="form-box">

    <h4>Admission Open for 2026</h4>

    <input type="text" placeholder="Your Name" />
    <input type="text" placeholder="Enter your mobile number" />

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

        </div>
      </div>
    <LogoSlider logos={logos} />

    </section>
  );
};

export default Banner;