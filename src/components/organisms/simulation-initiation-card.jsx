import * as React from "react";

import { SimulationCard } from "@molecules";

function SimulationInitiationCard() {
  return (
    <div className="my-[66px] max-w-[1171px] mx-auto bg-white shadow-md rounded-[8px]">
      <h3 className="text-blue text-2xl font-medium text-center pt-[167px] leading-7">
        Start New Simulataion
      </h3>
      <div className="flex justify-center items-center mt-[75px] pb-[235px]">
        <SimulationCard
          link="/new-administration"
          iconPath="/assets/new-admin-icon.svg"
          label="New Administration"
          className={{ container: "mr-[20px] bg-cream" }}
        />
        <SimulationCard
          iconPath="/assets/second-admin-icon.svg"
          label="Second Administration"
          className={{ container: "ml-[20px] bg-light-cream" }}
        />
      </div>
    </div>
  );
}

export default SimulationInitiationCard;
