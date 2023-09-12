import * as React from "react";

import {NavLink} from "@atoms";

function Header(props) {
  const { isAuthenticated, user } = props;

  const userNameNavLinkUI = isAuthenticated && (
    <React.Fragment>
      <NavLink href={"#"} label={`Hello ${user.name}`} />
      <span className="text-sm text-light-grey ml-4">|</span>
    </React.Fragment>
  );

  const LoginLogoutNavLinkUI = isAuthenticated ? (
    <NavLink href={"#"} label="Logout" />
  ) : (
    <NavLink href={"/login"} label="Login" />
  );

  return (
    <div className="h-[93px] bg-white shadow-md">
      <div className="h-full flex justify-between items-center mx-[57px]">
        <img className="h-[37px] w-[276px]" src="/assets/logo.png" alt="logo" />
        <ul className="flex justify-center items-center">
          <li className="mr-4">{userNameNavLinkUI}</li>
          <li className="mr-4">
            <NavLink href={"/"} label="Home" />
          </li>
          <span className="text-sm text-light-grey mr-4">|</span>
          <li>{LoginLogoutNavLinkUI}</li>
        </ul>
      </div>
    </div>
  );
}

export default Header;
