import * as React from "react";

function Select({ children, className }) {
  return (
    <select
      className={`text-base px-[20px] w-full pb-[13px] pt-[17px] leading-7 border border-grey rounded-[4px] ${className}`}
    >
      {children}
    </select>
  );
}

export default Select;
