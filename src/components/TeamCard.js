import useMediaQuery from "hooks/useMediaQuery";
import React from "react";

function TeamCard({ img, title, subtitle, desc }) {
  const isAbove768px = useMediaQuery("(min-width : 768px)");

  return (
    <div>
      <img
        src={img}
        className="h-[610px] lg:h-[min(677.78px,30vw)] object-cover w-full mb-8 lg:mb-2vw"
        alt=""
      />

      <div className={`${isAbove768px ? "" : "section-container"}`}>
        <div className="lg:space-y-0_1vw mb-4 lg:mb-1_4vw">
          <p className="font-helvetica text-wodden-purple fs-24px lh-1">
            {title}
          </p>
          <p className="font-helvetica text-gray-1 fs-24px">{subtitle}</p>
        </div>

        <p className="fs-16px text-wodden-purple mb-5 lg:mb-1_4vw">{desc}</p>

        <p className="fs-16px text-wodden-purple cursor-pointer w-fit">
          Read more
        </p>
      </div>
    </div>
  );
}

export default TeamCard;
