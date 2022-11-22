import Button from "components/Button";
import React from "react";

function PropertyInvestment() {
  return (
    <section className="section-container two-columns">
      <div>
        <h5 className="font-helvetica fs-24px">
          Property Investment through SMSF
        </h5>
        <p className="font-helvetica fs-24px opacity-50">
          Create a strategy you can bank on.{" "}
        </p>
      </div>
      <div>
        <p className="fs-18px text-wodden-purple mb-6 lg:mb-2vw">
          We are a team of elite property investment professionals. Utilising
          decades of combined expertise, we have created strategies that take
          the uncertainty out of property investment for the average Australian
          investor.
        </p>
        <p className="fs-18px text-wodden-purple mb-8 lg:mb-3vw">
          We recognise that what actually hinders people financial success is
          the knowledge that underpins the highly confusing moving parts of Ga
          property portfolio. We simplify the process by handling these
          difficult tasks while giving our clients the education they need to
          repeat the simplified steps forever. ​
        </p>

        <Button label="Download Brochure " />
      </div>
    </section>
  );
}

export default PropertyInvestment;
