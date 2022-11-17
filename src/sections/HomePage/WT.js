import Button from "components/Button";
import SideBySideImgSection from "layouts/SideBySideImgSection";
import React from "react";

function WT() {
  return (
    <SideBySideImgSection img="images/WT.png" reverse={true}>
      <p className="fs-24px text-wodden-purple mb-6 lg:mb-2vw">
        The WT Capital team has successfully completed more than 1000 property
        investment transactions.
      </p>

      <p className="fs-18px text-wodden-purple mb-10 lg:mb-4vw">
        Our team has achieved this through educating investors in the market and
        connecting them with our personal network of property developers;
        exclusive to WT Capital investors. Our team and our network of
        specialists want to provide a quality investment experience and
        market-leading investment options to every investor.
      </p>

      <Button label="Download Brochure " />
    </SideBySideImgSection>
  );
}

export default WT;
