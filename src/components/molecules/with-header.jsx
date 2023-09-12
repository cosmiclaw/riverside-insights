import * as React from "react";

import Header from "../organisms/header";

function WithHeader({ children }) {
  return (
    <React.Fragment>
      <Header />
      {children}
    </React.Fragment>
  );
}

export default WithHeader;
