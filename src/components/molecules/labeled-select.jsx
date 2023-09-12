import * as React from "react";

import { WithLabel } from "@molecules";

function LabeledSelect({ label, children, ...rest }) {
  return (
    <WithLabel label={label}>
      <select
        className="text-base px-[20px] w-[32%] pb-[13px] pt-[17px] leading-7 border-l border-grey"
        {...rest}
      >
        {children}
      </select>
    </WithLabel>
  );
}

export default LabeledSelect;
