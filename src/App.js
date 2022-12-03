
import { useState, useEffect } from "react";

// react-router components
import { Routes, Route, useLocation, Navigate } from "react-router-dom";

// @mui material components
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";




// Soft UI Dashboard React examples
import Sidenav from "examples/Sidenav";


// Soft UI Dashboard React themes
import theme from "assets/theme";



// Soft UI Dashboard React routes
import routes from "routes";

// Soft UI Dashboard React contexts
import { useSoftUIController, setMiniSidenav } from "context";

// Images
//import brand from "assets/images/logo-ct.png";
import logo from "assets/images/logo.png";
import Alarmas from "layouts/alarms";
import Dashboard from "layouts/dashboard";

import Power from "layouts/power";

import Profile from "layouts/profile";
import SignIn from "layouts/authentication/sign-in";
import SignUp from "layouts/authentication/sign-up";
import CCTV from "layouts/cctv";

export default function App() {
  const [controller, dispatch] = useSoftUIController();
  const { miniSidenav, direction, layout, sidenavColor } = controller;
  const [onMouseEnter, setOnMouseEnter] = useState(false);
  const { pathname } = useLocation();

  // Open sidenav when mouse enter on mini sidenav
  const handleOnMouseEnter = () => {
    if (miniSidenav && !onMouseEnter) {
      setMiniSidenav(dispatch, false);
      setOnMouseEnter(true);
    }
  };

  // Close sidenav when mouse leave mini sidenav
  const handleOnMouseLeave = () => {
    if (onMouseEnter) {
      setMiniSidenav(dispatch, true);
      setOnMouseEnter(false);
    }
  };

 
  // Setting the dir attribute for the body element
  useEffect(() => {
    document.body.setAttribute("dir", direction);
  }, [direction]);

  // Setting page scroll to 0 when changing the route
  useEffect(() => {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
  }, [pathname]);


//comprobar la autenticacion


  const getRoutes = (allRoutes) =>
    allRoutes.map((route) => {
      if (route.collapse) {
        return getRoutes(route.collapse);
      }

      if (route.route) {
        return <Route exact path={route.route} element={route.component} key={route.key} />;
      }

      return null;
    });

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {layout === "dashboard" && (
        <>
          <Sidenav
            color={sidenavColor}
            brand={logo}
            brandName="Dashboard"
            routes={routes}
            onMouseEnter={handleOnMouseEnter}
            onMouseLeave={handleOnMouseLeave}
          />
          
        </>
      )}
    
      <Routes>
       
        <Route path="*" element={<SignIn/>} />
         <Route path="/alarms" element={
       
          <Alarmas />
        
     }/> 
         <Route path="/dashboard" element={<Dashboard/>}/> 
         <Route path="/cctv" element={<CCTV/>}/> 
         <Route path="/power" element={<Power/>}/> 
         <Route path="/profile" element={<Profile/>}/> 
         <Route path="/authentication/sign-up" element={<SignUp/>}/> 
      
      </Routes>
    </ThemeProvider>
  );
}
