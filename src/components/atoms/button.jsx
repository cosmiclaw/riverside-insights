import * as React from "react";

function Button({ children, ...rest }) {
  return (
    <button
      className="text-base bg-blue text-white leading-7 py-[14px] px-[42px] rounded-md"
      {...rest}
    >
      {children}
    </button>
  );
}

export default Button;
