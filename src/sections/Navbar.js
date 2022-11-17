import React, { useEffect, useRef, useState } from "react";
import { IoClose } from "react-icons/io5";

function Navbar() {
  const [isMenuVisibile, setMenuVisibility] = useState(false);
  const [isNavbarScrolled, setNavbarScrolled] = useState(false);
  const accordionMenuRef = useRef(null);

  useEffect(() => {
    if (isMenuVisibile) {
      accordionMenuRef.current.style.height =
        accordionMenuRef.current.scrollHeight + "px";
    } else {
      accordionMenuRef.current.style.height = 0;
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
      className={`fixed top-0 left-0 z-[100] w-full overflow-y-auto transition-all delay-100 duration-300 ${
        isMenuVisibile
          ? "bg-wodden-purple rounded-b-[30px]"
          : isNavbarScrolled
          ? "bg-wodden-purple"
          : "bg-transparent"
      }`}
    >
      <div className="section-container h-[100px] 2xl:h-[141px] flex items-center justify-between">
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

        <p className="fs-20px 2xl:fs-24px text-white uppercase">
          LOGO GOES HERE
        </p>
      </div>
      <div
        ref={accordionMenuRef}
        className="h-0 overflow-hidden transition-all duration-300"
      >
        <div className="mt-1 section-container">
          <div className="py-12 border-t-2 border-white grid grid-cols-[1fr_1fr_auto]">
            <div className="space-y-4">
              <a
                href="/"
                className="fs-16px 2xl:fs-20px text-white block w-fit font-helvetica"
              >
                Home
              </a>
              <a
                href="/"
                className="fs-16px 2xl:fs-20px text-white block w-fit font-helvetica"
              >
                About Us
              </a>
              <a
                href="/"
                className="fs-16px 2xl:fs-20px text-white block w-fit font-helvetica"
              >
                Investment Strategy
              </a>
              <a
                href="/"
                className="fs-16px 2xl:fs-20px text-white block w-fit font-helvetica"
              >
                Property Investment Strategy
              </a>
              <a
                href="/"
                className="fs-16px 2xl:fs-20px text-white block w-fit font-helvetica"
              >
                Property Finance
              </a>
              <a
                href="/"
                className="fs-16px 2xl:fs-20px text-white block w-fit font-helvetica"
              >
                Property Market Research
              </a>
              <a
                href="/"
                className="fs-16px 2xl:fs-20px text-white block w-fit font-helvetica"
              >
                Property Management
              </a>
            </div>
            <div className="space-y-4">
              <a
                href="/"
                className="fs-16px 2xl:fs-20px text-white block w-fit font-helvetica"
              >
                SMSF
              </a>
              <a
                href="/"
                className="fs-16px 2xl:fs-20px text-white block w-fit font-helvetica"
              >
                What is SMSF?
              </a>
              <a
                href="/"
                className="fs-16px 2xl:fs-20px text-white block w-fit font-helvetica"
              >
                SMSF Set-up
              </a>
              <a
                href="/"
                className="fs-16px 2xl:fs-20px text-white block w-fit font-helvetica"
              >
                SMSF Loan
              </a>
              <a
                href="/"
                className="fs-16px 2xl:fs-20px text-white block w-fit font-helvetica"
              >
                SMSF Property
              </a>
              <a
                href="/"
                className="fs-16px 2xl:fs-20px text-white block w-fit font-helvetica"
              >
                Eligibility
              </a>
              <a
                href="/"
                className="fs-16px 2xl:fs-20px text-white block w-fit font-helvetica"
              >
                Benefits
              </a>
            </div>
            <div className="flex flex-col justify-between">
              <div className="space-y-4">
                <a
                  href="/"
                  className="fs-16px 2xl:fs-20px text-white block w-fit font-helvetica"
                >
                  Retirement Calculator{" "}
                </a>
                <a
                  href="/"
                  className="fs-16px 2xl:fs-20px text-white block w-fit font-helvetica"
                >
                  Case Studies
                </a>
              </div>

              <div className="space-y-4">
                <a
                  href="/"
                  className="fs-16px 2xl:fs-20px text-white block w-fit font-helvetica"
                >
                  info@tensq.com.au
                </a>
                <a
                  href="/"
                  className="fs-16px 2xl:fs-20px text-white block w-fit font-helvetica"
                >
                  0404 040 404
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
