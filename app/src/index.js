import React from "react";
import ReactDOM from "react-dom/client";

import { createBrowserRouter, RouterProvider } from "react-router-dom";


import Home from "./Home";
import Bar from "./Bar";
import bares from "./bares";

const rotas = bares.map((bar) => {
  return {
    path: "/" + bar,
    exact: true,
    element: <Bar />,
  };
});

rotas.push({
  path: "/",
  element: <Home />,
});
rotas.push({
  path: "*",
  element: <Home />,
});

const router = createBrowserRouter(rotas);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
