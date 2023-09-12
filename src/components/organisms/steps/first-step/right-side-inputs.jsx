import * as React from "react";

import Input from "../../../atoms/input";
import Select from "../../../atoms/select";
import RadioInput from "../../../atoms/radio-input";
import LabeledInput from "../../../molecules/labeled-input";

function RightSideInputs() {
  return (
    <div>
      <div>
        <p className="text-base font-medium leading-7">Item Pool</p>
        <div className="mt-[11px]">
          <div>
            <Select>
              <option selected>itempool_math_01_2019</option>
            </Select>
          </div>
          <div className="mt-[30px]">
            <LabeledInput
              center={false}
              label="Number of examinees"
              value="1"
              type="number"
            />
          </div>
        </div>
      </div>
      <div className="mt-[67px]">
        <RadioInput label="Uniform" name="uniform" value="uniform" />
      </div>
      <div className="flex items-center justify-between mt-[25px]">
        <div className="mr-[20px]">
          <LabeledInput inactive label="Min" value="0" />
        </div>
        <div className="ml-[20px]">
          <LabeledInput inactive label="Max" value="0" />
        </div>
      </div>
      <div>
        <div className="mt-[35px] flex justify-between">
          <div className="flex-1 mr-[20px]">
            <p className="text-base font-medium leading-7">Theta Increment</p>
            <div className="mt-[8px]">
              <Input value="0.03" className="pb-[13px] pt-[17px] px-[19px]" />
            </div>
          </div>
          <div className="flex-1 ml-[20px]">
            <p className="text-base font-medium leading-7">Scaling</p>
            <div className="flex justify-between items-center mt-[23px]">
              <div>
                <RadioInput label="1.0" value={1.0} name="scaling" />
              </div>
              <div>
                <RadioInput checked label="1.7" value={1.7} name="scaling" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-[35px]">
        <p className="text-base font-medium leading-7">
          Item/Pool Characteristics
        </p>
        <div className="mt-[8px]">
          <LabeledInput
            label="Number Of Items In Pool"
            value={100}
            center={false}
          />
        </div>
      </div>
    </div>
  );
}

export default RightSideInputs;
