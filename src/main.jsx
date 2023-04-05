import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Orders from "./components/Orders/Orders";
import Review from "./components/Review/Review";
import cartProductsLoader from "./Loader/cartPrioductsLoader";
import Checkout from "./components/Checkout/Checkout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Orders></Orders>,
      },
      {
        path: "/review",
        element: <Review></Review>,
        loader: cartProductsLoader,
      },
      {
        path: "checkout",
        element: <Checkout></Checkout>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
