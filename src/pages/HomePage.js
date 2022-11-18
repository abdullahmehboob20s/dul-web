import React from "react";
import Footer from "sections/Footer";
import FAQ from "sections/HomePage/FAQ";
import GenuineContact from "sections/HomePage/GenuineContact";
import Hero from "sections/HomePage/Hero";
import PropertyInvestment from "sections/HomePage/PropertyInvestment";
import Purpos from "sections/HomePage/Purpos";
import RealPeopls from "sections/HomePage/RealPeopls";
import Strategy from "sections/HomePage/Strategy";
import TrustPilot from "sections/HomePage/TrustPilot";
import WT from "sections/HomePage/WT";
import Navbar from "sections/Navbar";

function HomePage() {
  return (
    <div>
      <Navbar />
      <div className="mb-16 lg:mb-7vw">
        <Hero />
      </div>
      <div className="mb-16 lg:mb-7vw">
        <PropertyInvestment />
      </div>
      <div className="mb-16 lg:mb-7vw">
        <TrustPilot />
      </div>
      <div className="mb-16 lg:mb-7vw">
        <RealPeopls />
      </div>
      <div className="mb-16 lg:mb-7vw">
        <GenuineContact />
      </div>
      <div className="mb-16 lg:mb-7vw">
        <Strategy />
      </div>
      <div className="mb-16 lg:mb-7vw">
        <Purpos />
      </div>
      <div className="mb-20 lg:mb-9vw">
        <WT />
      </div>
      <div className="mb-20 lg:mb-9vw">
        <FAQ />
      </div>
      <Footer />
    </div>
  );
}

export default HomePage;
