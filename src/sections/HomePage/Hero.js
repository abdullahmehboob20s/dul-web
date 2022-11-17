import React from "react";

function Hero() {
  return (
    <section className="bg-wodden-purple relative z-10">
      <img
        src="images/hero-bg.jpg"
        className="absolute top-0 left-0 w-full h-full -z-20 object-cover"
        alt=""
      />

      <div className="absolute top-0 left-0 w-full h-full bg-black -z-10 opacity-60"></div>

      <div className="section-container relative h-screen flex flex-col justify-end items-center py-8 lg:py-4vw">
        <h1 className="fs-24px text-center w-full px-6 text-white absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2">
          Wealth within reach.
        </h1>
        <h1 className="text-white fs-16px text-center">Scroll to begin.</h1>
      </div>
    </section>
  );
}

export default Hero;
