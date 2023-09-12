import * as React from "react";

import { Link } from "react-router-dom";

function SimulataionCard({
  iconPath,
  label,
  link = "#",
  className: { container = "" },
}) {
  return (
    <Link to={link}>
      <div
        className={`cursor-pointer flex flex-col justify-center items-center rounded-[20px] border-2 border-blue min-w-[380px] ${container}`}
      >
        <img
          className="h-[55.6px] w-[55.6px] mt-[85px]"
          src={iconPath}
          alt="new Administration"
        />
        <h4 className="text-blue leading-9 font-bold text-[24px] max-w-[160px] text-center mt-[43px] mb-[69px]">
          {label}
        </h4>
      </div>
    </Link>
  );
}

export default SimulataionCard;
