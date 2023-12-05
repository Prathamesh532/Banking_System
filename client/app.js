import React from "react";
import ReactDOM from "react-dom/client";
import "./style.css";
import Regsiter from "./src/pages/Regsiter";
import UserLogin from "./src/pages/UserLogin";
import {
  RouterProvider,
  createBrowserRouter,
  Outlet,
  Router,
  Route,
  Routes,
} from "react-router-dom";
import Footer from "./src/components/Footer";
import Header from "./src/components/Header";
import BankerLogin from "./src/pages/BankerLogin";

const App = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <UserLogin />,
      },
      {
        path: "register",
        element: <Regsiter />,
      },
      {
        path: "bankerlogin",
        element: <BankerLogin />,
      }
    ],
  },
]);

// const router = createBrowserRouter([
//   {
//     path: "/",
//     component: <App />,
//     children: [
//       {
//         path: "/",
//         component: <UserLogin />,
//       },
//       {
//         path: "/register",
//         component: <Regsiter />,
//       },
//     ],
//   },
// ]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={router} />);
