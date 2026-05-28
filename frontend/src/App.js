import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Toaster } from "./components/ui/toaster";
import Layout from "./components/Layout";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import OurFirmPage from "./pages/OurFirmPage";
import MeetTheAttorneyPage from "./pages/MeetTheAttorneyPage";
import PracticeAreasPage from "./pages/PracticeAreasPage";
import ReviewsPage from "./pages/ReviewsPage";
import FAQPage from "./pages/FAQPage";
import ContactPage from "./pages/ContactPage";
import SchedulePage from "./pages/SchedulePage";
import BlogPage from "./pages/BlogPage";
import WhyEstatePlanningPage from "./pages/WhyEstatePlanningPage";
import MediationServicesPage from "./pages/MediationServicesPage";
import LegalDisclaimerPage from "./pages/LegalDisclaimerPage";
import PrivacyPolicyPage from "./pages/PrivacyPolicyPage";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/about/our-firm" element={<OurFirmPage />} />
            <Route path="/about/meet-the-attorney" element={<MeetTheAttorneyPage />} />
            <Route path="/practice-areas" element={<PracticeAreasPage />} />
            <Route path="/reviews" element={<ReviewsPage />} />
            <Route path="/faq" element={<FAQPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/schedule" element={<SchedulePage />} />
            <Route path="/blog" element={<BlogPage />} />
            <Route path="/why-estate-planning" element={<WhyEstatePlanningPage />} />
            <Route path="/mediation-services" element={<MediationServicesPage />} />
            <Route path="/legal-disclaimer" element={<LegalDisclaimerPage />} />
            <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
            <Route path="/privacy" element={<PrivacyPolicyPage />} />
            <Route path="*" element={<HomePage />} />
          </Routes>
        </Layout>
        <Toaster />
      </BrowserRouter>
    </div>
  );
}

export default App;
