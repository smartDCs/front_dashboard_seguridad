// @mui material components
import Grid from "@mui/material/Grid";
import Icon from "@mui/material/Icon";

// Soft UI Dashboard React components
import SoftBox from "components/SoftBox";
import { BrowserRouter as Router, Link } from "react-router-dom";

// Soft UI Dashboard React examples
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";
import MiniStatisticsCard from "examples/Cards/StatisticsCards/MiniStatisticsCard";

import typography from "assets/theme/base/typography";

// Dashboard layout components
import BuildByDevelopers from "layouts/dashboard/components/BuildByDevelopers";
import WorkWithTheRockets from "layouts/dashboard/components/WorkWithTheRockets";

// Data
import reportsBarChartData from "layouts/dashboard/data/reportsBarChartData";

import IconButton from "@mui/material/IconButton";
import axios from "axios";
import React from "react";
import { useRef, useState, useEffect } from "react";

import io from "socket.io-client";
//deploy

const socket = io("https://backendjc.onrender.com");
//const URI_sonoff = "https://backendjc.herokuapp.com/api/sonoffData";

//debug
//const socket = io('http://localhost:9000');
//import socket from "../../components/Socket";

function Dashboard() {
  var statuspuerta = "Puerta cerrada";
  var [current, setCurrent] = useState("");
  var [voltaje, setVoltaje] = useState(120);
  var [statusPow, setStatusPow] = useState(0);
  var [sirena, setSirena] = useState(0);
  var [puerta, setPuerta] = useState(0);
  var [count_alarms, setCount_alarms] = useState(0);
  socket.emit("conectado", "hola desde cliente");

  const { size } = typography;
  const { chart, items } = reportsBarChartData;
  //debug
  //const URI_alarms="http://localhost:9000/api/alarmsData?format=json";
  //deploy
  const URI_alarms = "https://backendjc.onrender.com/api/alarmsData?format=json";

  // leer base de datos sonoff

  async function getAlarms() {
    const data = await axios.get(URI_alarms);

    // console.log("cantidad de alarmas ", data.data.length);
    setCount_alarms(data.data.length);
  }

  /*
  async function getPow() {
    const pow = await axios.get(URI_sonoff);
    // console.log(pow);
    const index = pow.data.length - 1;
    //console.log("voltaje = ",pow.data[index].voltaje);
    setVoltaje(pow.data[index].voltaje);
  }
*/
  function changeState(channel) {
    console.log("change state");
    socket.emit("toggleChannel", channel);
  }

  if (puerta == 1) {
    statuspuerta = "Puerta Abierta";
  }
  socket.on("dualData", (statusSirena, statusPuerta) => {
    setSirena(statusSirena);
    setPuerta(statusPuerta);
    // console.log("sirena ", sirena);
    // console.log("puerta ", puerta);
  });
  socket.on("powData", (voltaje, current, statusPow) => {
    console.log("voltaje = ", voltaje);
    setVoltaje(voltaje);
    setCurrent(current);
    setStatusPow(statusPow);
  });
  socket.emit("getPow");
  useEffect(() => {
    getAlarms();
    // getPow();
  });

  /*
  const [current, setCurrent] = React.useState(null);
  
  React.useEffect(() => {
    axios.get(URI_sonoff).then((response) => {
      console.log(response.data);
    });
  }, []);
  
  */

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <SoftBox py={3}>
        <SoftBox mb={3}>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6} xl={3}>
              <MiniStatisticsCard
                title={{ text: "Eventos de alarmas" }}
                count={count_alarms}
                // percentage={{ color: "success", text: "+55%" }}

                componente={
                  <Link to="/alarms">
                    <IconButton fontSize="small" color="warning">
                      <Icon>notification_important</Icon>
                    </IconButton>
                  </Link>
                }
              />
            </Grid>
            <Grid item xs={12} sm={6} xl={3}>
              <MiniStatisticsCard
                title={{ text: "Parametros de la red" }}
                count={voltaje + " V"}
                percentage={{ color: "success", text: current + " A" }}
                componente={
                  <Link to="/power">
                    <IconButton fontSize="small" color="success" onClick={() => changeState(2)}>
                      {" "}
                      <Icon>bolt</Icon>
                    </IconButton>
                  </Link>
                }
              />
            </Grid>
            <Grid item xs={12} sm={6} xl={3}>
              <MiniStatisticsCard
                title={{ text: "" }}
                count={statuspuerta}
                // percentage={{ color: "error", text: "-2%" }}

                componente={
                  <IconButton fontSize="small" color="info" onClick={() => changeState(2)}>
                    {" "}
                    <Icon>meeting_room</Icon>
                  </IconButton>
                }
              />
            </Grid>
            <Grid item xs={12} sm={6} xl={3}>
              <MiniStatisticsCard
                title={{ text: "Cámaras" }}
                count="En línea"
                componente={
                  <Link to="/cctv">
                    <IconButton fontSize="small" color="error">
                      <Icon>videocam</Icon>
                    </IconButton>
                  </Link>
                }
              />
            </Grid>
          </Grid>
        </SoftBox>
        <SoftBox mb={3}>
          <Grid container spacing={3}>
            <Grid item xs={12} lg={7}>
              <BuildByDevelopers />
            </Grid>
            <Grid item xs={12} lg={5}>
              <WorkWithTheRockets />
            </Grid>
          </Grid>
        </SoftBox>
        <SoftBox mb={3}>
          <Grid container spacing={3}>
            <Grid item xs={12} lg={5}>
              {/*   <ReportsBarChart
                title="Todos los eventos de alarmas"
                description={
                  <>
                    (<strong>23</strong>) En la última semana
                  </>
                }
                chart={chart}
                items={items}
              />
              */}
            </Grid>
          </Grid>
        </SoftBox>
      </SoftBox>
      <Footer />
    </DashboardLayout>
  );
}

export default Dashboard;
