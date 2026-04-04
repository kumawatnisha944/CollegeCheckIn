import React from "react";
import "./TermsConditions.css";
import { useNavigate } from "react-router-dom";
function TermsConditions() {
    const navigate = useNavigate();
  return (
  <div className="terms-container container mt-5 mb-5">

  <h1 className="text-center main-heading">
    College Check In Terms & Conditions
  </h1>

  {/* ❌ CLOSE BUTTON */}
  <div className="close-btnn" onClick={() => navigate(-1)}>
    ❌
  </div>

  <p className="text-center update-text">
    Last Updated: 4th March 2026
  </p>

  <div className="terms-content">

    <h3>1. Introduction</h3>
    <p>
      These Terms and Conditions govern your access to and use of the services provided by College Check In. 
      By accessing or using this platform, you agree to be legally bound by these terms, along with our privacy 
      policy and any additional guidelines that may be provided from time to time. College Check In offers a range 
      of services including career development programs, counseling support, educational resources, and digital tools 
      aimed at enhancing student engagement and growth.
      <br /><br />
      These terms are designed to ensure a safe, transparent, and efficient environment for all users. By continuing 
      to use the platform, you confirm that you have read, understood, and agreed to comply with all applicable terms. 
      If you do not agree with any part of these terms, you should discontinue the use of the platform immediately. 
      College Check In reserves the right to update or modify these terms at any time without prior notice, and users 
      are encouraged to review them periodically.
    </p>

    <h3>2. Eligibility</h3>
    <p>
      To access and use the services provided by College Check In, users must meet specific eligibility criteria. 
      You must be at least 18 years of age or have legal parental or guardian consent to use the platform. Additionally, 
      you must be a registered user with valid and accurate information.
      <br /><br />
      Users are responsible for ensuring that the information provided during registration is true, complete, and 
      up to date. Any false, misleading, or incomplete information may result in suspension or termination of the account. 
      The platform reserves the right to verify user information and restrict access if eligibility requirements are not met.
      <br /><br />
      Misuse of the platform, including fraudulent activities, impersonation, or violation of policies, will lead to 
      strict action, including permanent account suspension.
    </p>

    <h3>3. College Check In Services</h3>
    <p>
      College Check In provides a variety of services designed to support students in their academic and professional 
      journeys. These services may include career counseling, mentorship programs, access to educational resources, 
      skill-building tools, and collaboration features.
      <br /><br />
      Some services may involve third-party platforms, tools, or content providers. While we strive to partner with 
      reliable and trusted entities, College Check In does not guarantee the accuracy, reliability, or quality of 
      third-party services. Users acknowledge that the use of such services is at their own risk.
      <br /><br />
      We reserve the right to modify, suspend, or discontinue any service at any time without prior notice. Continued 
      use of the platform indicates acceptance of any changes made.
    </p>

    <h3>4. Profile Creation</h3>
    <p>
      Users are required to create a profile to access various features of the platform. During profile creation, 
      you must provide accurate details such as your name, email address, phone number, and other relevant information.
      <br /><br />
      You are solely responsible for maintaining the confidentiality of your account credentials, including your 
      username and password. Any activity conducted through your account will be considered your responsibility. 
      It is recommended to use strong passwords and avoid sharing account details with others.
      <br /><br />
      If you suspect any unauthorized access to your account, you must notify us immediately. Failure to maintain 
      account security may result in loss of data or unauthorized usage.
    </p>

    <h3>5. Verification</h3>
    <p>
      College Check In may require users to undergo verification processes to ensure authenticity and maintain 
      platform integrity. This may include uploading identity documents, educational certificates, or other relevant 
      information.
      <br /><br />
      Users must ensure that all submitted documents are genuine and accurate. Providing false or manipulated 
      information may result in rejection of verification, suspension of services, or permanent account termination.
      <br /><br />
      Verification processes may take time, and users are required to cooperate during the process. The platform 
      reserves the right to request additional documents if necessary.
    </p>

    <h3>6. Intellectual Property</h3>
    <p>
      All content available on the College Check In platform, including text, graphics, logos, images, and software, 
      is the intellectual property of College Check In or its licensors and is protected by applicable copyright 
      and intellectual property laws.
      <br /><br />
      Users are not permitted to copy, reproduce, distribute, or modify any content without prior written permission. 
      Any unauthorized use of platform content may result in legal action.
      <br /><br />
      By submitting feedback, suggestions, or content to the platform, users grant College Check In the right to use, 
      modify, and distribute such content without any compensation or restriction.
    </p>

    <h3>7. Disclaimer</h3>
    <p>
      All services provided by College Check In are offered on an "as is" and "as available" basis. We do not guarantee 
      that the platform will be error-free, uninterrupted, or completely secure at all times.
      <br /><br />
      While we strive to provide accurate and reliable information, we do not warrant the completeness or accuracy of 
      any content. Users are advised to use their own judgment when relying on platform services.
      <br /><br />
      College Check In shall not be held liable for any direct, indirect, or consequential damages arising from the 
      use or inability to use the platform.
    </p>

    <h3>8. Refund & Cancellation</h3>
    <p>
      Refund and cancellation policies may vary depending on the specific service or third-party provider involved. 
      College Check In does not guarantee refunds unless explicitly stated.
      <br /><br />
      Users are advised to carefully review the terms of each service before making any payments. In cases where 
      third-party services are involved, their policies will apply.
      <br /><br />
      The platform is not responsible for delays, failures, or disputes related to refunds handled by external partners.
    </p>

    <h3>9. Liability</h3>
    <p>
      To the maximum extent permitted by law, College Check In’s total liability for any claims arising out of or 
      related to the use of the platform shall not exceed INR 1000.
      <br /><br />
      This limitation applies to all types of damages, including direct, indirect, incidental, or consequential losses. 
      Users agree to use the platform at their own risk and acknowledge that the platform is not liable for any 
      unforeseen issues.
    </p>

    <h3>10. Termination</h3>
    <p>
      College Check In reserves the right to suspend or terminate user access to the platform at any time, without 
      prior notice, if there is a violation of these terms or any applicable laws.
      <br /><br />
      Upon termination, users may lose access to their account, data, and any associated benefits. The platform is 
      not obligated to restore access once it has been terminated.
      <br /><br />
      Users may also choose to terminate their accounts voluntarily by contacting support.
    </p>

    <h3>11. Miscellaneous</h3>
    <p>
      These Terms and Conditions constitute the entire agreement between the user and College Check In. If any 
      provision is found to be invalid or unenforceable, the remaining provisions will continue to be in effect.
      <br /><br />
      The platform is not responsible for failure to perform obligations due to events beyond its control, including 
      natural disasters, technical failures, or government actions (force majeure).
      <br /><br />
      We reserve the right to update or modify these terms at any time. Continued use of the platform after such 
      changes constitutes acceptance of the revised terms.
    </p>

  </div>
</div>
  );
}

export default TermsConditions;