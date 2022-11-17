import React from "react";

const VARIANT_DEFAULT =
  "border-2 border-wodden-purple rounded-full px-8 lg:px-1vw py-0_8vw fs-18px text-wodden-purple w-fit lg:w-full lg:max-w-[18.546852122986824vw] font-medium";
const VARIANT_2 =
  "border-2 border-white rounded-full px-8 lg:px-1vw py-0_8vw fs-18px text-white w-fit lg:w-full lg:max-w-[18.546852122986824vw] font-medium";

const variants = [VARIANT_DEFAULT, VARIANT_2];

function Button({ label, variant = 0 }) {
  return <button className={variants[variant]}>{label}</button>;
}

export default Button;
