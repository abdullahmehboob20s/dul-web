import SideBySideImgSection from "layouts/SideBySideImgSection";
import React from "react";

const Component = () => {
  return (
    <div>
      <img
        src="images/video-1.png"
        className="h-full w-full object-cover"
        alt=""
      />
    </div>
  );
};

function History() {
  return (
    <SideBySideImgSection SideComponent={Component}>
      <p className="fs-24px text-wodden-purple mb-6 lg:mb-1_8vw">
        Corin Smith.
      </p>

      <div className="space-y-1 lg:space-y-0_2vw">
        <div>
          <span className="fs-24px font-helvetica text-gray-1">
            Purchase price:
          </span>{" "}
          <span className="fs-24px font-helvetica text-wodden-purple">
            $590,000
          </span>
        </div>
        <div>
          <span className="fs-24px font-helvetica text-gray-1">
            Rent achieved per week:
          </span>{" "}
          <span className="fs-24px font-helvetica text-wodden-purple">
            $700
          </span>
        </div>
        <div>
          <span className="fs-24px font-helvetica text-gray-1">
            Tax rebate year 1:
          </span>{" "}
          <span className="fs-24px font-helvetica text-wodden-purple">
            $12,000
          </span>
        </div>
        <div>
          <span className="fs-24px font-helvetica text-gray-1">
            Rental yield after tax:
          </span>{" "}
          <span className="fs-24px font-helvetica text-wodden-purple">
            8.2%
          </span>
        </div>
      </div>
    </SideBySideImgSection>
  );
}

export default History;
