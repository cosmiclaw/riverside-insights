import * as React from "react";

import RadioInput from "../../../atoms/radio-input";
import LabeledInput from "../../../molecules/labeled-input";
import LabeledSelect from "../../../molecules/labeled-select";

function LeftSideInputs() {
  return (
    <div>
      <div>
        <p className="text-base font-medium leading-7">Subject</p>
        <div className="flex">
          <div className="mt-[12px]">
            <RadioInput
              id="reading"
              label="Reading"
              value="reading"
              name="subject"
            />
          </div>
          <div className="mt-[12px] ml-[149px]">
            <RadioInput
              id="math"
              checked
              label="Math"
              value="math"
              name="subject"
            />
          </div>
        </div>
      </div>
      <div className="mt-[58px]">
        <LabeledSelect label="Grade">
          <option selected value="G5">
            G5
          </option>
          <option value="f17">JF 17</option>
        </LabeledSelect>
      </div>
      <div>
        <p className="text-base font-medium leading-7 mt-[35px]">
          Theta Distribution
        </p>
        <div className="mt-[12px]">
          <RadioInput checked label="Normal" value="normal" name="normal" />
        </div>
      </div>
      <div className="flex justify-between items-center mt-[25px]">
        <div className="mr-[20px]">
          <LabeledInput label="Mean" value={1} />
        </div>
        <div className="ml-[20px]">
          <LabeledInput label="SD" value={2} />
        </div>
      </div>
      <div>
        <p className="text-base font-medium leading-7 mt-[35px]">
          Theta Ranges
        </p>
        <div className="flex justify-between items-center mt-[8px]">
          <div className="mr-[20px]">
            <LabeledInput label="Min" value={1} />
          </div>
          <div className="ml-[20px]">
            <LabeledInput label="Max" value={3} />
          </div>
        </div>
      </div>
      <div>
        <p className="text-base font-medium leading-7 mt-[35px]">
          Generate Replication Data Sets
        </p>
        <div className="mt-[8px]">
          <LabeledInput
            label="Number Of Replications"
            center={false}
            value={1}
          />
        </div>
      </div>
      <div>
        <p className="text-base font-medium leading-7 mt-[35px]">IRT Model</p>
        <div className="flex justify-between items-center">
          <div className="mt-[12px]">
            <RadioInput label="Rasch/1 PL" value="rasch/1-PL" name="irt" />
          </div>
          <div className="mt-[12px]">
            <RadioInput checked label="2PL" value="2pl" name="irt" />
          </div>
          <div className="mt-[12px]">
            <RadioInput label="3PL" value="3pl" name="irt" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default LeftSideInputs;
