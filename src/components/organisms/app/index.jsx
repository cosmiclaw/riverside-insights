import * as React from "react";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { HomePage, LoginPage, NewAdministrationPage } from "@pages";

const router = createBrowserRouter([
  {
    path: "/login",
    Component: LoginPage,
  },
  {
    path: "/",
    Component: HomePage,
  },
  {
    path: "/new-administration",
    Component: NewAdministrationPage,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
