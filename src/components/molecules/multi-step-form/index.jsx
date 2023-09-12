import "./styles.css";

import * as React from "react";

import MultiStep from "react-multistep";

import Step from "./step";
import { buttonStyles } from "./buttonStyles";

function MultiStepForm({ children }) {
  return (
    <MultiStep
      nextButton={{ title: "Next", style: buttonStyles.next }}
      prevButton={{ title: "Back", style: buttonStyles.prev }}
    >
      {children}
    </MultiStep>
  );
}

MultiStepForm.Step = Step;
export default MultiStepForm;
