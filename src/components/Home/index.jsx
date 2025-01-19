"use client";
import Header from "../Header";
import ScholarshipFeatures from "./ScholarshipFeatures";
import ScholarshipCommunity from "./ScholarshipCommunity";
import CommunityImpact from "./CommunityImpact";
import ScholarshipPage from "./Scholarship";
import ScholarshipVideoSection from "./ScholarshipVideoSection";
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
      <Footer />
    </div>
  );
};

export default Home;
