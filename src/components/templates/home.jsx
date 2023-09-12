import * as React from "react";

import { WithHeader } from "@molecules";
import { SimulationInitiationCard } from "@organisms";

function HomeTemplate() {
  return (
    <WithHeader>
      <SimulationInitiationCard />
    </WithHeader>
  );
}

export default HomeTemplate;
