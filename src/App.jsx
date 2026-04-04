import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Banner from "./components/Banner/Banner";
import Footer from "./components/Footer/Footer";
import Advantages from "./components/Advantages/Advantages";
import CollegeSection from "./components/CollegeSection/CollegeSection";
import ApnaAdvantage from "./components/ApnaAdvantage/ApnaAdvantage";
import Testimonials from "./components/testimonials/testimonials";
import ApnaBenefits from "./components/ApnaBenefits/ApnaBenefits";
import AskedApnaAdvantages from "./components/AskedApnaAdvantages/ApnaAdvantage";
import FloatingButton from "./components/Float/FloatingButton";
import FloatingBottomBar from "./components/Float/FloatingBottomBar";
import PrivacyPolicy from "./components/Footer/PrivacyPolicy";
import TermsConditions from "./components/Footer/TermsConditions";
import RewardsTerms from "./components/Footer/RewardsTerms";
function App() {
  const [showForm, setShowForm] = useState(false);

  return (
    <Router>
      <Routes>

        {/* HOME PAGE */}
        <Route path="/" element={
          <>
            <Banner />
            <Advantages showForm={showForm} setShowForm={setShowForm} />
            <CollegeSection setShowForm={setShowForm}/>
            <ApnaAdvantage />
            <Testimonials setShowForm={setShowForm} />
            <ApnaBenefits setShowForm={setShowForm} />
            <AskedApnaAdvantages setShowForm={setShowForm} />
            <Footer />
            <FloatingButton />
            <FloatingBottomBar setShowForm={setShowForm} />
          </>
        } />

        {/* PAGES */}
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms" element={<TermsConditions />} />
        <Route path="/rewards" element={<RewardsTerms />} />

      </Routes>
    </Router>
  );
}

export default App;
