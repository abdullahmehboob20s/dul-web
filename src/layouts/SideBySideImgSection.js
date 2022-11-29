import useMediaQuery from "hooks/useMediaQuery";
import React from "react";

function SideBySideImgSection({
  children,
  img,
  reverse = false,
  SideComponent,
}) {
  const isAbove1024px = useMediaQuery("(min-width: 1024px)");

  return (
    <section
      className={`lg:space-x-[min(77px,5.636896046852123vw)] ${
        reverse
          ? `${isAbove1024px ? "pr-[10.980966325036603vw]" : ""} two-columns`
          : `${isAbove1024px ? "pl-[10.980966325036603vw]" : ""} two-columns`
      }`}
    >
      {!reverse && (
        <div
          className={`${
            isAbove1024px ? "" : "section-container"
          } flex flex-col justify-center`}
        >
          {children}
        </div>
      )}

      {SideComponent ? (
        <SideComponent />
      ) : (
        <img
          src={img}
          className="w-full h-[626px] lg:h-[min(695.59px,40.995607613469986vw)] object-cover"
          alt=""
        />
      )}

      {reverse && (
        <div
          className={`${
            isAbove1024px ? "" : "section-container"
          } flex flex-col justify-center`}
        >
          {children}
        </div>
      )}
    </section>
  );
}

export default SideBySideImgSection;
