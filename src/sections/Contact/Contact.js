import Button from "components/Button";
import React from "react";

function Contact() {
  return (
    <section>
      <div className="section-container two-columns">
        <div></div>

        <form className="space-y-3 lg:space-y-1vw">
          <input
            type="text"
            placeholder="Name"
            className="font-helvetica py-2 lg:py-0_8vw border-b-2 text-wodden-purple border-gray-1 fs-16px bg-transparent block outline-none w-full"
          />
          <input
            type="number"
            placeholder="Phone Number"
            className="font-helvetica py-2 lg:py-0_8vw border-b-2 text-wodden-purple border-gray-1 fs-16px bg-transparent block outline-none w-full"
          />
          <input
            type="email"
            placeholder="Email address"
            className="font-helvetica py-2 lg:py-0_8vw border-b-2 text-wodden-purple border-gray-1 fs-16px bg-transparent block outline-none w-full"
          />
          <input
            type="number"
            placeholder="Postcode"
            className="font-helvetica py-2 lg:py-0_8vw border-b-2 text-wodden-purple border-gray-1 fs-16px bg-transparent block outline-none w-full"
          />
          <input
            type="number"
            placeholder="Household Income "
            className="font-helvetica py-2 lg:py-0_8vw border-b-2 text-wodden-purple border-gray-1 fs-16px bg-transparent block outline-none w-full"
          />
          <input
            type="text"
            placeholder="Super-Annuation Balance"
            className="font-helvetica py-2 lg:py-0_8vw border-b-2 text-wodden-purple border-gray-1 fs-16px bg-transparent block outline-none w-full"
          />
          <input
            type="text"
            placeholder="Investable Funds/ Equity Balance "
            className="font-helvetica py-2 lg:py-0_8vw border-b-2 text-wodden-purple border-gray-1 fs-16px bg-transparent block outline-none w-full"
          />
          <textarea
            placeholder="Comment"
            className="resize-none h-[100px] lg:h-10vw font-helvetica py-2 lg:py-0_8vw border-b-2 text-wodden-purple border-gray-1 fs-16px bg-transparent block outline-none w-full"
          ></textarea>

          <div className="pt-5 lg:pt-4vw">
            <Button label="Send" />
          </div>
        </form>
      </div>
    </section>
  );
}

export default Contact;
