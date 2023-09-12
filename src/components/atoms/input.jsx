import * as React from "react";

function Input({ className, ...rest }) {
  return (
    <input
      className={`border block w-full border-grey rounded-[5px] text-base ${className}`}
      {...rest}
    />
  );
}

export default Input;
