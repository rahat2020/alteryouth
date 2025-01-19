"use client";
import Header from "../Header";
import ScholarshipFeatures from "./ScholarshipFeatures";
import ScholarshipCommunity from "./ScholarshipCommunity";
import CommunityImpact from "./CommunityImpact";
import ScholarshipPage from "./Scholarship";
import ScholarshipVideoSection from "./ScholarshipVideoSection";
import Partners from "./Partners";
import Footer from "./Footer";

const Home = () => {
  return (
    <div>
      <Header />
      <ScholarshipFeatures />
      <ScholarshipCommunity />
      <CommunityImpact />
      <ScholarshipPage />
      <ScholarshipVideoSection />
      <Partners />
      <Footer />
    </div>
  );
};

export default Home;
