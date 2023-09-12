import * as React from "react";

function WithLabel({ label, name = "", inactive, children }) {
  const isDisabled = inactive ? "text-grey font-normal" : "";

  return (
    <div className="flex items-center justify-between overflow-hidden w-full bg-cream-grey border border-grey rounded-[4px]">
      <label
        htmlFor={name}
        className={`text-base leading-7 pb-[13px] pt-[17px] pl-[19px] font-medium ${isDisabled}`}
      >
        {label}
      </label>
      {children}
    </div>
  );
}

export default WithLabel;
