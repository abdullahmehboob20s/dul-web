import Button from "components/Button";
import React from "react";

function TailoredOpportunities() {
  return (
    <section>
      <div className="section-container grid gap-6 lg:gap-0 lg:grid-cols-2">
        <div>
          <p className="fs-24px text-wodden-purple font-helvetica">
            Welcome to tailored opportunities.
          </p>
        </div>

        <div className="space-y-6 lg:space-y-3vw">
          <p className="font-helvetica fs-24px text-gray-1">
            We are serious about delivering on our promises, that is why we
            check eligibility to make sure that our processes are right for you.
          </p>

          <Button label="Check Your Eligibility" />
        </div>
      </div>
    </section>
  );
}

export default TailoredOpportunities;
