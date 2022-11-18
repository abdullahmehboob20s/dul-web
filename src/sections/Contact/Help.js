import React from "react";

function Help() {
  return (
    <section>
      <div className="section-container grid gap-6 lg:gap-0 lg:grid-cols-2">
        <div>
          <p className="fs-24px text-wodden-purple font-helvetica">
            We’re here to help.
          </p>
        </div>

        <div className="space-y-6 lg:space-y-2vw">
          <p className="fs-18px text-gray-1">
            If you would like more information about how we can help you,
            complete this form or call us on{" "}
            <span className="text-wodden-purple">0402 900 992</span> and we will
            answer any questions you have
          </p>
        </div>
      </div>
    </section>
  );
}

export default Help;
