import React from "react";

const VARIANT_DEFAULT = "btn-primary-default";
const VARIANT_2 = "btn-primary-2";

const variants = [VARIANT_DEFAULT, VARIANT_2];

function Button({ label, variant = 0 }) {
  return <button className={variants[variant]}>{label}</button>;
}

export default Button;
