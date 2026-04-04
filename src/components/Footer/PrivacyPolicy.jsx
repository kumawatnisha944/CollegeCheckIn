import React from "react";
import "./PrivacyPolicy.css";
import { useNavigate } from "react-router-dom";
function PrivacyPolicy() {
    const navigate = useNavigate();
  return (
<div className="privacy-container container my-5">

  <h1 className="text-center main-title">Privacy Policy</h1>

  {/* ❌ CLOSE BUTTON */}
  <div className="close-btnn" onClick={() => navigate(-1)}>
    ❌
  </div>

  <p className="intro-text">
    This Privacy Policy applies to your use of the platform and services provided by College Check In. 
    We value your privacy and are committed to protecting your personal information. This policy explains 
    in detail how we collect, use, store, and safeguard your data when you interact with our platform. 
    By using our services, you agree to the collection and use of information in accordance with this policy. 
    We encourage users to read this policy carefully to understand our practices regarding personal data 
    and how we will treat it responsibly and securely.
  </p>

  {/* Section 1 */}
  <div className="policy-section">
    <h3>1. Objective & Scope</h3>
    <p>
      The primary objective of this Privacy Policy is to provide transparency regarding how College Check In 
      handles user data. We aim to ensure that users feel secure and confident while using our platform. 
      This policy applies to all users, including students, staff, and visitors who interact with our services.
      The scope of this policy includes all types of data collected through our website, mobile applications, 
      and related services. It outlines the methods used for data collection, the purpose behind collecting such data, 
      and how it is stored and protected. Additionally, it defines the rights of users and the responsibilities 
      of the platform in maintaining data privacy. We continuously update our practices to comply with evolving 
      legal standards and technological advancements, ensuring that user data is always handled with the highest level of care.
    </p>
  </div>

  {/* Section 2 */}
  <div className="policy-section">
    <h3>2. Data Collected</h3>
    <ul>
      <li>
        Name, email, and phone number are collected to create and manage user accounts, 
        facilitate communication, and provide personalized services.
      </li>
      <li>
        Location and address information help us deliver location-based features and improve 
        the accuracy of our services.
      </li>
      <li>
        Device and browser information, including IP address, operating system, and browser type, 
        are collected to enhance platform performance and ensure compatibility.
      </li>
      <li>
        Usage data and logs such as pages visited, time spent, and user interactions are collected 
        to analyze behavior and improve user experience.
      </li>
      <li>
        Additional information may be collected when users voluntarily provide feedback, fill out forms, 
        or contact support.
      </li>
    </ul>
  </div>

  {/* Section 3 */}
  <div className="policy-section">
    <h3>3. Use of Data</h3>
    <p>
      The data collected from users is utilized for multiple purposes to ensure smooth functioning of the platform. 
      Firstly, it enables us to provide and maintain our services efficiently. Secondly, it helps us personalize 
      user experience by tailoring content and features based on user preferences. We also use this data to 
      communicate important updates, notifications, and service-related announcements. Furthermore, data analysis 
      allows us to identify trends and improve platform performance. Security is another key area where user data 
      plays a crucial role, as it helps detect and prevent fraudulent activities. We ensure that all data usage 
      is aligned with legal requirements and ethical standards.
    </p>
  </div>

  {/* Section 4 */}
  <div className="policy-section">
    <h3>4. Data Sharing</h3>
    <p>
      We do not sell or trade user data to third parties. However, data may be shared with trusted service providers 
      who assist us in operating our platform, such as hosting services, analytics providers, and communication tools. 
      These third parties are obligated to maintain the confidentiality of user data. In certain situations, we may 
      also share data to comply with legal obligations, enforce our policies, or protect the rights and safety of users. 
      Any data sharing is done with strict adherence to privacy standards and only when necessary.
    </p>
  </div>

  {/* Section 5 */}
  <div className="policy-section">
    <h3>5. Data Security</h3>
    <p>
      We implement advanced security measures to protect user data from unauthorized access, alteration, or disclosure. 
      These measures include encryption, secure servers, and regular system monitoring. Our team continuously works 
      to identify and address potential vulnerabilities. While we strive to use commercially acceptable means to 
      protect your data, no method of transmission over the internet is completely secure. Therefore, we encourage 
      users to take necessary precautions such as safeguarding their login credentials.
    </p>
  </div>

  {/* Section 6 */}
  <div className="policy-section">
    <h3>6. User Rights</h3>
    <p>
      Users have full control over their personal data. You have the right to access, update, or delete your 
      information at any time. Additionally, users can request a copy of their data or restrict its processing 
      under certain conditions. We respect user privacy and ensure that all requests are handled promptly and 
      transparently. If you wish to exercise any of your rights, you can contact us through the provided channels.
    </p>
  </div>

  {/* Section 7 */}
  <div className="policy-section">
    <h3>7. Contact Us</h3>
    <p>
      If you have any questions, concerns, or requests regarding this Privacy Policy, feel free to contact us. 
      Our support team is always ready to assist you with any issues related to data privacy or platform usage.
      Email: support@collegecheckin.com
    </p>
  </div>

  <p className="update-text">Last Updated: 19 Feb 2026</p>

</div>
  );
}

export default PrivacyPolicy;