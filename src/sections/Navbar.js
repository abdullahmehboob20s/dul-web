import Accordion from "components/Accordion";
import useMediaQuery from "hooks/useMediaQuery";
import React, { useEffect, useRef, useState } from "react";
import { IoClose } from "react-icons/io5";

function Navbar() {
  const [isMenuVisibile, setMenuVisibility] = useState(false);
  const [isNavbarScrolled, setNavbarScrolled] = useState(false);
  const accordionMenuRef = useRef(null);
  const MOBILE_NAV_HEIGHT = "60px";
  const isAbove1024px = useMediaQuery("(min-width: 1024px)");

  useEffect(() => {
    if (isMenuVisibile) {
      accordionMenuRef.current.style.height = `calc(${
        isAbove1024px
          ? accordionMenuRef.current.scrollHeight
          : window.innerHeight
      }px - ${isAbove1024px ? "0px" : MOBILE_NAV_HEIGHT})`;

      if (!isAbove1024px) {
        document.body.style.overflowY = "hidden";
      }
    } else {
      accordionMenuRef.current.style.height = 0;
      if (!isAbove1024px) {
        document.body.style.overflowY = "scroll";
      }
    }
  }, [isMenuVisibile]);

  useEffect(() => {
    const handler = () => {
      if (window.scrollY > 100) {
        setNavbarScrolled(true);
      } else {
        setNavbarScrolled(false);
      }
    };

    document.addEventListener("scroll", handler);

    return () => document.removeEventListener("scroll", handler);
  });

  return (
    <nav
      className={`fixed top-0 left-0 z-[100] w-full transition-all delay-100 duration-300 overflow-y-auto ${
        isMenuVisibile
          ? "bg-wodden-purple rounded-b-[30px]"
          : isNavbarScrolled
          ? "bg-wodden-purple"
          : "bg-transparent"
      }`}
    >
      <div className="section-container w-full h-[60px] lg:h-[7.320644216691069vw] flex items-center justify-between ">
        <div className="relative">
          <button
            className={`text-white text-3xl transition-all duration-300 absolute top-1/2 left-0 -translate-y-1/2 ${
              isMenuVisibile
                ? "opacity-100 pointer-events-auto"
                : "opacity-0 pointer-events-none"
            }`}
            onClick={() => setMenuVisibility(false)}
          >
            <IoClose />
          </button>

          <button
            className={`fs-20px text-white outline-none transition-all duration-300 ${
              !isMenuVisibile
                ? "opacity-100 pointer-events-auto"
                : "opacity-0 pointer-events-none"
            }`}
            onClick={() => setMenuVisibility(true)}
          >
            Menu
          </button>
        </div>

        <p className="fs-20px text-white uppercase">LOGO GOES HERE</p>
      </div>
      <div
        ref={accordionMenuRef}
        className={`h-0 ${
          isMenuVisibile ? "overflow-auto" : "overflow-hidden"
        } transition-all duration-300`}
      >
        <div className="mt-2 lg:mt-[min(1rem,0.8vw)] section-container">
          {isAbove1024px ? (
            <div className="py-8 lg:py-[min(6rem,3vw)] border-t-2 border-white grid gap-9 lg:gap-0 lg:grid-cols-[1fr_1fr_auto]">
              <div className="space-y-3 lg:space-y-1_4vw">
                <a
                  href="/"
                  className="fs-16px text-white block w-fit font-helvetica"
                >
                  Home
                </a>
                <a
                  href="/"
                  className="fs-16px text-white block w-fit font-helvetica"
                >
                  About Us
                </a>
                <a
                  href="/"
                  className="fs-16px text-white block w-fit font-helvetica"
                >
                  Investment Strategy
                </a>
                <a
                  href="/"
                  className="fs-16px text-white block w-fit font-helvetica"
                >
                  Property Investment Strategy
                </a>
                <a
                  href="/"
                  className="fs-16px text-white block w-fit font-helvetica"
                >
                  Property Finance
                </a>
                <a
                  href="/"
                  className="fs-16px text-white block w-fit font-helvetica"
                >
                  Property Market Research
                </a>
                <a
                  href="/"
                  className="fs-16px text-white block w-fit font-helvetica"
                >
                  Property Management
                </a>
              </div>

              <div className="space-y-3 lg:space-y-1_4vw">
                <a
                  href="/"
                  className="fs-16px text-white block w-fit font-helvetica"
                >
                  SMSF
                </a>
                <a
                  href="/"
                  className="fs-16px text-white block w-fit font-helvetica"
                >
                  What is SMSF?
                </a>
                <a
                  href="/"
                  className="fs-16px text-white block w-fit font-helvetica"
                >
                  SMSF Set-up
                </a>
                <a
                  href="/"
                  className="fs-16px text-white block w-fit font-helvetica"
                >
                  SMSF Loan
                </a>
                <a
                  href="/"
                  className="fs-16px text-white block w-fit font-helvetica"
                >
                  SMSF Property
                </a>
                <a
                  href="/"
                  className="fs-16px text-white block w-fit font-helvetica"
                >
                  Eligibility
                </a>
                <a
                  href="/"
                  className="fs-16px text-white block w-fit font-helvetica"
                >
                  Benefits
                </a>
              </div>

              <div className="flex flex-col justify-between">
                <div className="space-y-3 lg:space-y-1_4vw mb-6">
                  <a
                    href="/"
                    className="fs-16px text-white block w-fit font-helvetica"
                  >
                    Retirement Calculator{" "}
                  </a>
                  <a
                    href="/"
                    className="fs-16px text-white block w-fit font-helvetica"
                  >
                    Case Studies
                  </a>
                </div>

                <div className="space-y-3 lg:space-y-1_4vw">
                  <a
                    href="/"
                    className="fs-16px text-white block w-fit font-helvetica"
                  >
                    info@tensq.com.au
                  </a>
                  <a
                    href="/"
                    className="fs-16px text-white block w-fit font-helvetica"
                  >
                    0404 040 404
                  </a>
                </div>
              </div>
            </div>
          ) : (
            <div className="py-8 border-t-2 border-white grid gap-5">
              <a
                href="/"
                className="fs-16px text-white block w-fit font-helvetica"
              >
                Home
              </a>
              <a
                href="/"
                className="fs-16px text-white block w-fit font-helvetica"
              >
                About Us
              </a>

              <Accordion
                title="Investment Strategy"
                buttonClassName="flex items-center justify-between w-full space-x-6 text-left fs-16px text-white"
                className=""
              >
                <div className="space-y-3 lg:space-y-1_4vw pl-3 pt-2">
                  <a
                    href="/"
                    className="fs-16px text-white block w-fit font-helvetica"
                  >
                    Property Investment Strategy
                  </a>
                  <a
                    href="/"
                    className="fs-16px text-white block w-fit font-helvetica"
                  >
                    Property Finance
                  </a>
                  <a
                    href="/"
                    className="fs-16px text-white block w-fit font-helvetica"
                  >
                    Property Market Research
                  </a>
                  <a
                    href="/"
                    className="fs-16px text-white block w-fit font-helvetica"
                  >
                    Property Management
                  </a>
                </div>
              </Accordion>

              <Accordion
                title="SMSF"
                buttonClassName="flex items-center justify-between w-full space-x-6 text-left fs-16px text-white"
                className=""
              >
                <div className="space-y-3 lg:space-y-1_4vw pl-3 pt-2">
                  <a
                    href="/"
                    className="fs-16px text-white block w-fit font-helvetica"
                  >
                    What is SMSF?
                  </a>
                  <a
                    href="/"
                    className="fs-16px text-white block w-fit font-helvetica"
                  >
                    SMSF Set-up
                  </a>
                  <a
                    href="/"
                    className="fs-16px text-white block w-fit font-helvetica"
                  >
                    SMSF Loan
                  </a>
                  <a
                    href="/"
                    className="fs-16px text-white block w-fit font-helvetica"
                  >
                    SMSF Property
                  </a>
                  <a
                    href="/"
                    className="fs-16px text-white block w-fit font-helvetica"
                  >
                    Eligibility
                  </a>
                  <a
                    href="/"
                    className="fs-16px text-white block w-fit font-helvetica"
                  >
                    Benefits
                  </a>
                </div>
              </Accordion>

              <a
                href="/"
                className="fs-16px text-white block w-fit font-helvetica"
              >
                Eligibility
              </a>
              <a
                href="/"
                className="fs-16px text-white block w-fit font-helvetica"
              >
                Benefits
              </a>
              <a
                href="/"
                className="fs-16px text-white block w-fit font-helvetica"
              >
                Retirement Calculator
              </a>
              <a
                href="/"
                className="fs-16px text-white block w-fit font-helvetica"
              >
                Case Studies
              </a>

              <div className="space-y-2 pt-3">
                <a
                  href="/"
                  className="fs-16px text-gray-1 block w-fit font-helvetica"
                >
                  info@tensq.com.au
                </a>
                <a
                  href="/"
                  className="fs-16px text-gray-1 block w-fit font-helvetica"
                >
                  0404 040 040
                </a>
              </div>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
