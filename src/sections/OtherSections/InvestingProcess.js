import React from "react";

function InvestingProcess() {
  return (
    <section>
      <div className="section-container grid gap-6 lg:gap-0 lg:grid-cols-2">
        <div>
          <p className="fs-24px text-wodden-purple font-helvetica">
            The property investing process.
          </p>
        </div>

        <div className="space-y-6 lg:space-y-2vw">
          <p className="fs-16px text-wodden-purple">
            From new residential property investors to experienced commercial
            developers, real estate is a complex and high-stakes business. To
            achieve success, it's important to connect with industry experts.
            Our process has been tested over time across diverse markets,
            timelines, and real estate assets.
          </p>

          <div>
            <p className="fs-16px text-wodden-purple mb-4 lg:mb-0_8vw">
              We follow a 9-point plan to help you achieve success:
            </p>
            <ul className="list-disc list-outside pl-8 lg:pl-3vw space-y-2 lg:space-y-0_5vw">
              <li className="fs-16px text-wodden-purple">Client onboarding</li>
              <li className="fs-16px text-wodden-purple">
                Research and fact-finding
              </li>
              <li className="fs-16px text-wodden-purple">Finance approval</li>
              <li className="fs-16px text-wodden-purple">
                Strategy brief and property review
              </li>
              <li className="fs-16px text-wodden-purple">EOI/Offer</li>
              <li className="fs-16px text-wodden-purple">Contract signing</li>
              <li className="fs-16px text-wodden-purple">
                Formal finance approval
              </li>
              <li className="fs-16px text-wodden-purple">Settlement</li>
              <li className="fs-16px text-wodden-purple">
                Property management
              </li>
            </ul>
          </div>
          <p className="fs-16px text-wodden-purple">
            Please review our website for our full range of financial services.
            You can examine your eligibility, use our retirement calculator, or
            analyse our case studies for clarity and confidence. If you need
            expert guidance or friendly support, please contact WT Capital
            today.{" "}
          </p>
        </div>
      </div>
    </section>
  );
}

export default InvestingProcess;
