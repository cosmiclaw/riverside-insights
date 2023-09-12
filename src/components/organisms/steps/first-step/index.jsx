import * as React from "react";

import LeftSideInputs from "./left-side-inputs";
import RightSideInputs from "./right-side-inputs";

function FirstStep() {
  return (
    <div className="flex">
      <div className="flex-1 mr-[65px]">
        <LeftSideInputs />
      </div>
      <div className="flex-1  ml-[65px]">
        <RightSideInputs />
      </div>
    </div>
  );
}

export default FirstStep;
