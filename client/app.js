import React from "react";
import ReactDOM from "react-dom/client";
import "./style.css";
import Regsiter from "./src/pages/Regsiter";
import UserLogin from "./src/pages/UserLogin";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Outlet,
} from "react-router-dom";
import Footer from "./src/components/Footer";
import Header from "./src/components/Header";
import BankerLogin from "./src/pages/BankerLogin";
import Transaction from "./src/pages/Transaction";

// const App = () => {
//   return (
//     <>
//       <Header />
//       <Outlet />
//       <Footer />
//     </>
//   );
// };

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <App />,
//     children: [
//       {
//         path: "userlogin",
//         element: <UserLogin />,
//         children:[
//           {
//             path: "transcation",
//             element: <Transaction />,
//           }
//         ]
//       },
//       {
//         path: "/register",
//         element: <Regsiter />,
//       },
//       {
//         path: "bankerlogin",
//         element: <BankerLogin />,
//       }
//     ],
//   },
// ]);

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Outlet />}>
          <Route path="/" element={<UserLogin />} />
          <Route path="bankerlogin" element={<BankerLogin />} />
        </Route>
        <Route path="/register" element={<Regsiter />} />
        <Route path="/transaction" element={<Transaction />} />
      </Routes>
      <Footer />
    </>
  );
};

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
root.render(
  <Router>
    <App />
  </Router>
);