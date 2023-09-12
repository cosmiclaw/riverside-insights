import * as React from "react";

import { WithHeader } from "@molecules";
import { LoginCard } from "@organisms";

function LoginTemplate() {
  return (
    <WithHeader>
      <LoginCard />
    </WithHeader>
  );
}

export default LoginTemplate;
