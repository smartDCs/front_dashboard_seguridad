

// Soft UI Dashboard React layouts
import Dashboard from "layouts/dashboard";
import Alarmas from "layouts/alarms";
import AccessControl from "layouts/access";
import RTL from "layouts/rtl";
import Profile from "layouts/profile";
import SignIn from "layouts/authentication/sign-in";
import SignUp from "layouts/authentication/sign-up";
import CCTV from "layouts/cctv";
// Soft UI Dashboard React icons

import NotificationImportantIcon from '@mui/icons-material/NotificationImportant';
import VideocamIcon from '@mui/icons-material/Videocam';
import NoMeetingRoomIcon from '@mui/icons-material/NoMeetingRoom';
import Shop from "examples/Icons/Shop";
import Settings from "examples/Icons/Settings";
import Document from "examples/Icons/Document";
import SpaceShip from "examples/Icons/SpaceShip";
import CustomerSupport from "examples/Icons/CustomerSupport";
import Cube from "examples/Icons/Cube";

const routes = [
  {
    type: "collapse",
    name: "Dashboard",
    key: "dashboard",
    route: "/dashboard",
    icon: <Shop size="12px" />,
    component: <Dashboard />,
    noCollapse: true,
  },
  {
    type: "collapse",
    name: "Alarmas",
    key: "alarms",
    route: "/alarms",
    icon: <NotificationImportantIcon size="12px" />,
    component: <Alarmas />,
    noCollapse: true,
  },
  {
    type: "collapse",
    name: "Video",
    key: "cctv",
    route: "/cctv",
    icon: <VideocamIcon size="12px" />,
    component: <CCTV />,
    noCollapse: true,
  },
  {
    type: "collapse",
    name: "Control de acceso",
    key: "access-control",
    route: "/access-control",
    icon: <NoMeetingRoomIcon size="12px" />,
    component: <AccessControl />,
    noCollapse: true,
  },
  { type: "title", title: "Account Pages", key: "account-pages" },
  {
    type: "collapse",
    name: "Profile",
    key: "profile",
    route: "/profile",
    icon: <CustomerSupport size="12px" />,
    component: <Profile />,
    noCollapse: true,
  },
  {
    type: "collapse",
    name: "Sign In",
    key: "sign-in",
    route: "/authentication/sign-in",
    icon: <Document size="12px" />,
    component: <SignIn />,
    noCollapse: true,
  },
  {
    type: "collapse",
    name: "Sign Up",
    key: "sign-up",
    route: "/authentication/sign-up",
    icon: <SpaceShip size="12px" />,
    component: <SignUp />,
    noCollapse: true,
  },
];

export default routes;
