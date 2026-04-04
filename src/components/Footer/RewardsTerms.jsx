import React from "react";
import "./RewardsTerms.css";
import { useNavigate } from "react-router-dom";
function RewardsTerms() {
    const navigate = useNavigate();
  return (
   <div className="rewards-container container mt-5 mb-5">

  <h1 className="text-center main-heading">
    REWARDS TERMS & CONDITIONS
  </h1>

  {/* ❌ CLOSE BUTTON */}
  <div className="close-btnn" onClick={() => navigate(-1)}>
    ❌
  </div>

  <p className="text-center update-text">
    Last Updated: 4th March, 2026
  </p>

  <div className="terms-content">

    <h3>1. Introduction</h3>
    <p>
      These Reward Terms and Conditions define the rules, guidelines, and policies governing the cashback 
      and reward programs offered by College Check In. By participating in any reward-based activity on the platform, 
      users agree to comply with these terms in addition to the general terms of use and privacy policy. The reward 
      program is designed to encourage user engagement, promote platform usage, and provide benefits to users who 
      actively participate in tasks, milestones, and activities defined by the platform. These rewards may vary from 
      time to time based on campaigns, offers, or updates introduced by the platform.
      <br /><br />
      It is important for users to understand that rewards are promotional in nature and may be modified, suspended, 
      or withdrawn at any time without prior notice. College Check In reserves full authority to interpret and enforce 
      these terms in a fair and reasonable manner. Participation in the rewards program is voluntary, and users are 
      encouraged to carefully read all conditions before engaging in any activity that leads to reward accumulation. 
      Any misuse, fraudulent behavior, or violation of these terms may result in disqualification from the program 
      and possible account suspension.
    </p>

    <h3>2. Scope</h3>
    <p>
      The scope of this rewards program covers all eligible users who interact with the College Check In platform 
      and complete predefined milestones, actions, or engagement-based activities. These activities may include 
      registration, profile completion, consistent usage, referrals, or other promotional tasks introduced by the platform. 
      The rewards program is applicable only within the boundaries defined by the platform and may vary based on user 
      category, location, and ongoing campaigns.
      <br /><br />
      This program does not apply to users who fail to meet eligibility criteria or who are restricted due to violations 
      of platform policies. Additionally, certain features or rewards may be limited to specific regions, time periods, 
      or promotional campaigns. The platform retains the right to modify the scope of the rewards program, including 
      adding or removing features, changing reward structures, or introducing new conditions.
      <br /><br />
      Users should note that participation in the rewards program does not guarantee earnings unless all specified 
      conditions are met. The platform aims to maintain transparency, but final decisions regarding reward eligibility 
      and distribution remain with College Check In.
    </p>

    <h3>3. Eligibility</h3>
    <ul>
      <li>
        Users must be at least 18 years of age and a legal resident of India. Proof of identity and age may be required 
        during verification processes.
      </li>
      <li>
        Users must successfully complete onboarding procedures, including KYC verification, to become eligible for 
        reward programs. Incomplete or incorrect information may lead to disqualification.
      </li>
      <li>
        The rewards program is not available to employees, partners, or individuals associated with College Check In 
        who may have direct or indirect involvement in managing the platform.
      </li>
      <li>
        Users must maintain a valid and active account. Any suspicious activity, including multiple account creation, 
        misuse, or fraudulent behavior, will lead to immediate disqualification.
      </li>
      <li>
        Eligibility may also depend on specific campaign conditions, and users are required to meet all criteria defined 
        under those campaigns to qualify for rewards.
      </li>
    </ul>

    <h3>4. Accrual of Rewards</h3>
    <p>
      Rewards are accumulated based on the successful completion of predefined milestones and activities on the platform. 
      The total maximum reward that a user can earn under this program is ₹25,000, subject to meeting all conditions and 
      verification processes.
      <br /><br />
      The reward structure is divided into different phases based on user engagement duration:
    </p>
    <ul>
      <li>
        ₹5,000 is credited after completing the first 90 days of consistent and valid activity on the platform.
      </li>
      <li>
        ₹8,000 is credited for continued engagement between 91 to 180 days, provided all conditions are met.
      </li>
      <li>
        ₹12,000 is credited for long-term engagement between 181 to 360 days, subject to eligibility and verification.
      </li>
    </ul>
    <p>
      Rewards are calculated based on performance metrics, user activity, and compliance with platform guidelines. 
      Any inactivity, violation, or incomplete milestone may affect reward accumulation. The platform reserves the 
      right to review and adjust reward calculations in case of discrepancies.
    </p>

    <h3>5. Expiry & Termination</h3>
    <p>
      All rewards earned by users are subject to a validity period, which will be defined by the platform at the time 
      of reward allocation. Users must claim or utilize their rewards within this specified period, failing which the 
      rewards may expire automatically without prior notice.
      <br /><br />
      Accounts that remain inactive for an extended period may also lose accumulated rewards. Additionally, College 
      Check In reserves the right to terminate or suspend accounts that violate terms, engage in fraudulent activities, 
      or misuse the rewards system. In such cases, all pending or accumulated rewards may be forfeited.
      <br /><br />
      The platform may also discontinue the rewards program entirely or partially at its discretion. Users are encouraged 
      to stay updated with policy changes to avoid loss of benefits.
    </p>

    <h3>6. Disbursement</h3>
    <p>
      Rewards will be disbursed only after successful verification of user eligibility and completion of all required 
      milestones. The disbursement may be made directly to the user’s registered bank account, digital wallet, or any 
      other approved payment method.
      <br /><br />
      The processing time for reward disbursement may vary depending on verification timelines, banking procedures, 
      and internal approvals. Users are responsible for providing accurate payment details. Any errors in submitted 
      information may lead to delays or failure in receiving rewards.
      <br /><br />
      Rewards are non-transferable and cannot be exchanged for other benefits unless explicitly stated. Once processed, 
      all reward transactions are considered final and cannot be reversed.
    </p>

    <h3>7. Disclaimer</h3>
    <p>
      College Check In provides rewards on a best-effort basis and does not guarantee earnings to any user. The reward 
      program is promotional and may be subject to changes, suspension, or cancellation at any time without prior notice.
      <br /><br />
      The platform is not responsible for any financial loss, delay, or inconvenience caused due to technical issues, 
      user errors, or external factors beyond its control. Users participate in the rewards program at their own risk 
      and discretion.
      <br /><br />
      Any misuse, manipulation, or fraudulent attempt to gain rewards will result in strict action, including permanent 
      account suspension and legal consequences if applicable.
    </p>

    <h3>8. Governing Law</h3>
    <p>
      These Reward Terms and Conditions are governed by and interpreted in accordance with the laws of India. Any disputes 
      arising out of or related to this program shall be subject to the exclusive jurisdiction of courts located in Bengaluru, 
      Karnataka.
      <br /><br />
      By participating in the rewards program, users agree to comply with all applicable laws and regulations. In case of 
      any conflict between these terms and local laws, the applicable legal provisions shall prevail.
      <br /><br />
      College Check In reserves the right to modify these terms at any time to ensure compliance with legal requirements 
      and business needs. Continued use of the platform after updates implies acceptance of the revised terms.
    </p>

  </div>
</div>
  );
}

export default RewardsTerms;