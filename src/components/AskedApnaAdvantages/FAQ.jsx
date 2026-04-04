import React, { useState } from "react";
import "./FAQ.css";

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      question: "Are online degrees better ?",
      answer:
        "An online degree from a NAAC A+ accredited university holds the same value as a regular on-campus degree, with added benefits of flexibility, affordability and convenience. You can study from home, learn at your own pace and manage your job or other responsibilities. Online degrees are also more affordable and you get access to good programs, expert faculty and career opportunities. Whether you're a fresher, student or seasoned professional, an online degree is the smarter way to advance your career.",
    },
    {
      question: "What is College Check In?",
      answer:
        "College Check In is a premium offering designed to advance your career. It offers UGC-approved online degrees for freshers, students, and working professionals. You get flexible EMI payment options, access to 1000+ direct MNCs connections at top companies and Interview preparation.",
    },
    {
      question: "What is the cost of College Check In?",
      answer:
        "College Check In is included at no extra cost when you purchase an online degree through our platform. We offer flexible EMI options for all our online degrees to make education more affordable. Register now to explore various payment plans.",
    },
    {
      question: "How will College Check In help me?",
      answer:
        "College Check In helps you improve your career opportunities with UGC-approved degrees and direct connections to HRs at top companies. Additionally, you also get flexible EMI options for easy payment, access to 1000+ direct MNCs connections and Interview preparation.",
    },
    {
      question: "How to redeem College Check In?",
      answer:
        "Once you’ve registered for admission, our team will send you an email confirmation with a unique registration number and all the details of your College Check In offering. Please follow that to redeem your benefits.",
    },
  ];

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="faq-section container">
      <h2 className="faq-heading">Frequently Asked Questions</h2>

      <div className="faq-container">
        {faqs.map((faq, index) => (
          <div className="faq-item" key={index}>
            
            <div
              className="faq-question"
              onClick={() => toggleFAQ(index)}
            >
              <span>{faq.question}</span>
              <span className={`arrow ${activeIndex === index ? "open" : ""}`}>
                ▼
              </span>
            </div>

            {activeIndex === index && (
              <div className="faq-answer">
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;