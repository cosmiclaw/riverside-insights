import * as React from "react";

import { WithLabel } from "@molecules";

function LabeledInput({ label, value, center = true, inactive, ...rest }) {
  const centeredText = center ? "text-center" : "text-left px-[21px]";
  const isDisabled = inactive ? "text-grey font-normal" : "";

  return (
    <WithLabel name={label} label={label} inactive={inactive}>
      <input
        id={label}
        className={`text-base border-grey w-[32%] pb-[13px] pt-[17px] leading-7 border-l ${centeredText} ${isDisabled}`}
        value={value}
        {...rest}
        disabled={inactive}
      />
    </WithLabel>
  );
}

export default LabeledInput;
