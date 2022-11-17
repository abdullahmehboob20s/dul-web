import React from "react";

function WoodenSection({ children }) {
  return (
    <section className="bg-wodden-purple py-10 lg:py-4vw">
      <div className="section-container flex flex-col items-center">
        {children}
      </div>
    </section>
  );
}

export default WoodenSection;
