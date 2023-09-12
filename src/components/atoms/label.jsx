import * as React from "react";

function Label({ className, htmlFor, label }) {
  return (
    <label
      htmlFor={htmlFor}
      className={`text-black text-base font-semibold leading-7 ${className}`}
    >
      {label}
    </label>
  );
}

export default Label;
