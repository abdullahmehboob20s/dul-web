import React, { useEffect, useRef, useState } from "react";
import { IoIosArrowDown, IoMdArrowDropdown } from "react-icons/io";

function Accordion({ title, children }) {
  const [isAccordionOpen, setIsAccordion] = useState(false);
  const accordionMenuRef = useRef(null);

  useEffect(() => {
    if (isAccordionOpen) {
      accordionMenuRef.current.style.height =
        accordionMenuRef.current.scrollHeight + "px";
    } else {
      accordionMenuRef.current.style.height = 0;
    }
  }, [isAccordionOpen]);

  return (
    <div className="border-b-1px">
      <button
        className="flex items-center justify-between w-full space-x-6 py-3 lg:py-1_4vw"
        onClick={() => setIsAccordion((val) => !val)}
      >
        <span className="text-left fs-24px text-gray-1">{title}</span>
        <span className="flex min-w-[16px] lg:min-w-[28px] 2xl:min-w-[35px] h-[16px] lg:h-[28px] 2xl:h-[35px] relative">
          <span
            className={`absolute top-1/2 left-0 -translate-y-1/2 w-full h-[2px] bg-gray-1`}
          ></span>

          <span
            className={`absolute top-0 left-1/2 -translate-x-1/2 w-[2px] h-full bg-gray-1  transition-all duration-200 ${
              isAccordionOpen ? "opacity-0" : "opacity-100"
            }`}
          ></span>
        </span>
      </button>

      <div
        className="h-0 overflow-hidden transition-all duration-[.3s]"
        ref={accordionMenuRef}
      >
        <div className="pt-2 lg:pt-1vw pb-6 lg:pb-3vw">{children}</div>
      </div>
    </div>
  );
}

export default Accordion;
