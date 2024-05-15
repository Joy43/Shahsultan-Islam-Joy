import { createBrowserRouter } from "react-router-dom";

import Mainlayout from "../Layout/Mainlayout";
import Home from "../Pages/Home/Home/Home";
import Aboutus from "../Pages/Home/Aboutus/AboutUs";

import Motionportfolli from "../Pages/Home/Portfolliosite/Site1/Motionportfollio";
import Contact from "../Pages/Contact/Contact";
import ContactInfo from "../Pages/Dashboad/Contactinfo/ContactInfo";
import UserInfo from "../Pages/Dashboad/Dashboad/UserInfo/UserInfo";
import DashBoadSidebar from "../Pages/Dashboad/Dashboad/Dashboad/DashBoadSidebar";
import Certificate from "../Pages/Home/Certificate/certificate";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Mainlayout></Mainlayout>,

    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/aboutus",
        element: <Aboutus></Aboutus>,
      },
      {
        path: "/portfollio",
        element: <Motionportfolli></Motionportfolli>,
      },
      {
        path: "certificate",
        element: <Certificate></Certificate>,
      },
      {
        path: "/contact",
        element: <Contact></Contact>,
      },
      // ---------dashboad router-------
      {
        path: "/dashboad",
        element: <DashBoadSidebar></DashBoadSidebar>,
      },
      {
        path: "/contactinfo",
        element: <ContactInfo></ContactInfo>,
      },
      {
        path: "userInfo",
        element: <UserInfo></UserInfo>,
      },
    ],
  },
]);
