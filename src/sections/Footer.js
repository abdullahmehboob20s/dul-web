import React from "react";

function Footer() {
  return (
    <section className="bg-wodden-purple py-16 lg:py-5vw">
      <div className="section-container grid grid-cols-[1fr_auto] gap-8 lg:gap-0 lg:grid-cols-[repeat(3,.6fr)_1fr]">
        <div>
          <p className="fs-14px uppercase mb-5 lg:mb-1_4vw text-white font-helvetica">
            COMPANY NAME
          </p>

          <div className="space-y-2 lg:space-y-0_7vw">
            <p className="fs-14px text-white font-helvetica">
              ABN 39 393 393 393
            </p>
            <p className="fs-14px text-white font-helvetica">
              info@tensq.com.au
            </p>
            <p className="fs-14px text-white font-helvetica">1300 111 111</p>
          </div>
        </div>

        <div>
          <p className="fs-14px mb-5 lg:mb-1_4vw text-white font-helvetica">
            Follow Us
          </p>

          <div className="space-y-2 lg:space-y-0_7vw">
            <p className="fs-14px text-white font-helvetica">LinkedIn</p>
            <p className="fs-14px text-white font-helvetica">Facebook </p>
            <p className="fs-14px text-white font-helvetica">Instagram</p>
            <p className="fs-14px text-white font-helvetica">Youtube </p>
          </div>
        </div>

        <div>
          <p className="fs-14px mb-5 lg:mb-1_4vw text-white font-helvetica">
            Sitemap
          </p>

          <div className="space-y-2 lg:space-y-0_7vw">
            <p className="fs-14px text-white font-helvetica">About Us</p>
            <p className="fs-14px text-white font-helvetica">Strategy </p>
            <p className="fs-14px text-white font-helvetica">Eligibility</p>
            <p className="fs-14px text-white font-helvetica">Community</p>
            <p className="fs-14px text-white font-helvetica">Contact Us</p>
          </div>
        </div>

        <div className="col-span-2 lg:col-span-1 pt-6 lg:pt-0">
          <p className="fs-14px mb-6 lg:mb-4vw text-white font-helvetica">
            Wealth within reach, for everyone.
          </p>

          <p className="fs-14px text-white mb-3 lg:mb-1vw font-helvetica">
            Subscribe for the latest updates
          </p>

          <form>
            <input
              type="email"
              placeholder="Enter email address here & press enter"
              className="font-helvetica py-2 lg:py-0_8vw border-b-2 text-white border-gray-1 fs-16px bg-transparent block outline-none w-full"
            />
          </form>
        </div>
      </div>
    </section>
  );
}

export default Footer;
