import * as React from "react";

import { WithHeader, MultiStepForm } from "@molecules";
import { FirstStep } from "@organisms";

function NewAdministrationTemplate() {
  return (
    <WithHeader>
      <div className="max-w-[1171px] mx-auto bg-white shadow-md rounded-[8px] my-[66px]">
        <MultiStepForm>
          <MultiStepForm.Step title="Pool">
            <FirstStep />
          </MultiStepForm.Step>
          <MultiStepForm.Step title="Item">
            Item: <FirstStep />
          </MultiStepForm.Step>
          <MultiStepForm.Step title="Score">
            Score: <FirstStep />
          </MultiStepForm.Step>
          <MultiStepForm.Step title="Results">
            Result: <FirstStep />
          </MultiStepForm.Step>
        </MultiStepForm>
      </div>
    </WithHeader>
  );
}

export default NewAdministrationTemplate;
