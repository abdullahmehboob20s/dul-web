import useMediaQuery from "hooks/useMediaQuery";
import React from "react";

function SideBySideImgSection({ children, img, reverse = false }) {
  const isAbove1024px = useMediaQuery("(min-width: 1024px)");

  return (
    <section
      className={`grid gap-10 sm:gap-12 lg:gap-6vw ${
        reverse
          ? `${
              isAbove1024px ? "pr-[10.980966325036603vw]" : "section-container"
            } lg:grid-cols-[1fr_.7fr]`
          : `${
              isAbove1024px ? "pl-[10.980966325036603vw]" : "section-container"
            } lg:grid-cols-[.7fr_1fr]`
      }`}
    >
      {!reverse && (
        <div className="flex flex-col justify-center">{children}</div>
      )}

      <div className="min-h-[40.995607613469986vw]">
        <img src={img} className="w-full h-full object-cover" alt="" />
      </div>

      {reverse && (
        <div className="flex flex-col justify-center">{children}</div>
      )}
    </section>
  );
}

export default SideBySideImgSection;
