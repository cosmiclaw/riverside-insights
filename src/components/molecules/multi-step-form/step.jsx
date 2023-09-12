import * as React from "react";

function Step({ children, title }) {
  return (
    <div
      className="pt-[31px] pb-[64px] px-[81px] border-b border-settle"
      title={title}
    >
      {children}
    </div>
  );
}

export default Step;
