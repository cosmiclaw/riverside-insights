import * as React from "react";

import { Input, Label, Button } from "@atoms";

function LoginForm({ onSubmit }) {
  const [values, setValues] = React.useState({
    userName: "",
    password: "",
  });

  const submitHandler = (e) => {
    e.preventDefault();

    onSubmit(values);
  };

  return (
    <form onSubmit={submitHandler} className="flex-1">
      <h3 className="text-blue text-2xl font-medium text-center mt-[97px] leading-7">
        Adaptive Simulator Login
      </h3>
      <div className="px-[73px] mt-[63px]">
        <div>
          <Label htmlFor="name" label="User Name" />
          <Input
            className="px-[17px] py-[13px] mt-[13px] mb-[47px]"
            placeholder="User Name"
            name="name"
            values={values.userName}
            onChange={(e) =>
              setValues((prev) => ({ ...prev, userName: e.target.value }))
            }
          />
        </div>
      </div>
      <div className="px-[73px] mt-[63px]">
        <div>
          <Label htmlFor="passwd" label="Password" />
          <Input
            className="px-[17px] py-[13px] mt-[13px] mb-[47px]"
            placeholder="Password"
            name="passwd"
            type="password"
            values={values.password}
            onChange={(e) =>
              setValues((prev) => ({ ...prev, password: e.target.value }))
            }
          />
        </div>
      </div>
      <div className="text-center">
        <Button type="submit">Login</Button>
      </div>
      <div className="text-center mt-[42px]  mb-[96px]">
        <p className="text-base font-light text-blue">Forget Password?</p>
      </div>
    </form>
  );
}

export default LoginForm;
