import React from "react";
import Contact from "sections/Contact/Contact";
import Help from "sections/Contact/Help";
import Hero from "sections/Contact/Hero";
import Footer from "sections/Footer";
import Navbar from "sections/Navbar";

function ContactPage() {
  return (
    <div>
      <Navbar />
      <div className="mb-16 lg:mb-7vw">
        <Hero />
      </div>
      <div className="mb-10 lg:mb-7vw">
        <Help />
      </div>
      <div className="mb-16 lg:mb-7vw">
        <Contact />
      </div>
      <Footer />
    </div>
  );
}

export default ContactPage;
