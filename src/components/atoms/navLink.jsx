import * as React from "react";

import { Link } from "react-router-dom";

function NavLink({ href, label }) {
  return (
    <Link className="text-sm text-light-grey" to={href}>
      {label}
    </Link>
  );
}

export default NavLink;
