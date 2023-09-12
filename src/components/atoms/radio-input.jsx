import * as React from "react";

function RadioInput({ label, id, value, name, ...rest }) {
  return (
    <div className="flex items-center">
      <input
        className="scale-150"
        id={id || name}
        name={name}
        value={value}
        type="radio"
        {...rest}
      />
      <label className="text-base ml-[14px]" htmlFor={id || name}>
        {label}
      </label>
    </div>
  );
}

export default RadioInput;
