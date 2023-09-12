import * as React from "react";

import { LoginForm } from "@molecules";

function LoginCard() {
  const loginHandler = (values) => {
    console.Console(values);
  };

  return (
    <section className="bg-white max-w-[1171px] mx-auto my-[66px] rounded-lg shadow-md flex">
      <div className="flex-1 bg-login bg-cover" />
      <LoginForm onSubmit={loginHandler} />
    </section>
  );
}

export default LoginCard;
