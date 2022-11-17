import Button from "components/Button";
import SideBySideImgSection from "layouts/SideBySideImgSection";
import React from "react";

function Strategy() {
  return (
    <SideBySideImgSection img="images/strategy.png">
      <p className="fs-24px text-wodden-purple mb-6 lg:mb-2vw font-helvetica">
        Our Strategy.
      </p>

      <p className="fs-18px text-wodden-purple mb-4 lg:mb-2vw">
        We will design a property investment strategy that incorporates all your
        individual needs in one clear approach. We will be there every step of
        the way and help you make informed and strategic decisions leading you
        to a higher financial altitude.
      </p>

      <p className="fs-18px text-wodden-purple mb-10 lg:mb-4vw">
        Our established framework has been proven to work across diverse
        markets. We offer 3 stages of service delivery broken down into a 9-step
        client process. Whether you're looking for isolated services or a
        complete turnkey system, our property investment team will create a
        unique solution tailored to your needs.
      </p>

      <Button label="Read More" />
    </SideBySideImgSection>
  );
}

export default Strategy;
