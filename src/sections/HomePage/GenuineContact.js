import Button from "components/Button";
import WoodenSection from "layouts/WoodenSection";
import React from "react";

function GenuineContact() {
  return (
    <WoodenSection>
      <p className="fs-24px text-center max-w-[18rem] lg:max-w-[28vw] text-white mb-6 lg:mb-3vw font-helvetica">
        We're genuine, ​seasoned experts. Get in touch with our team today.
      </p>
      <Button label="Contact" variant={1} />
    </WoodenSection>
  );
}

export default GenuineContact;
