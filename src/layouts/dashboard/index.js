
// @mui material components
import Grid from "@mui/material/Grid";
import Icon from "@mui/material/Icon";
import SoftButton from "components/SoftButton";
// Soft UI Dashboard React components
import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";

// Soft UI Dashboard React examples
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";
import MiniStatisticsCard from "examples/Cards/StatisticsCards/MiniStatisticsCard";
//import ReportsBarChart from "examples/Charts/BarCharts/ReportsBarChart";
//import GradientLineChart from "examples/Charts/LineCharts/GradientLineChart";

// Soft UI Dashboard React base styles
import typography from "assets/theme/base/typography";

// Dashboard layout components
import BuildByDevelopers from "layouts/dashboard/components/BuildByDevelopers";
import WorkWithTheRockets from "layouts/dashboard/components/WorkWithTheRockets";
import Projects from "layouts/dashboard/components/Projects";
import OrderOverview from "layouts/dashboard/components/OrderOverview";

// Data
import reportsBarChartData from "layouts/dashboard/data/reportsBarChartData";
import gradientLineChartData from "layouts/dashboard/data/gradientLineChartData";
import IconButton from '@mui/material/IconButton';
import axios from "axios";
import React from "react";
import { useRef, useState, useEffect } from "react";
import cors from "cors";
import SoftInputRoot from "components/SoftInput/SoftInputRoot";
import { ConstructionRounded } from "@mui/icons-material";
import io from "socket.io-client";
//deploy
const socket=io('https://backendjc.herokuapp.com');
//debug
//const socket = io('http://localhost:9000');
//import socket from "../../components/Socket";


function Dashboard() {


  var statuspuerta = 'Puerta cerrada';
  var [current, setCurrent] = useState('');
  var [voltaje, setVoltaje] = useState(0);
  var [statusPow, setStatusPow] = useState(0);
  var [sirena, setSirena] = useState(0);
  var [puerta, setPuerta] = useState(0);

  socket.emit('conectado', "hola desde cliente");


  const { size } = typography;
  const { chart, items } = reportsBarChartData;

  // const URI_sonoff="https://backendjc.herokuapp.com/api/sonoffData";
  // leer base de datos sonoff
  //var voltaje=0;

  /*
    async function getAllData() {
  
      const data = await axios.get("https://backendjc.herokuapp.com/api/sonoffData/?format=json");
      const index = data.data.length - 1;
      voltaje = data.data[index].voltaje;
      console.log(data.data[index].voltaje);
      console.log(data.data[index].status);
      setVoltaje(data.data[index].voltaje);
    }
  */
  //  var myTimer = setInterval(() => {
  //    getAllData();
  // console.log("leyendo api sonoff");
  //  }, 500);

  function changeState(channel) {
    console.log('change state');
    socket.emit('toggleChannel', channel);
  }

  if (puerta == 1) {
    statuspuerta = 'Puerta Abierta';
  }
  useEffect(() => {


    socket.on("powData", (voltaje, current, statusPow) => {

      setVoltaje(voltaje);
      setCurrent(current);
      setStatusPow(statusPow);
    });
    socket.on("dualData", (statusSirena, statusPuerta) => {

      setSirena(statusSirena);
      setPuerta(statusPuerta);
      console.log('sirena ', sirena);
      console.log('puerta ', puerta);
    });


    // getAllData();
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
                count="6"
                // percentage={{ color: "success", text: "+55%" }}
              
                componente={ <IconButton fontSize="small" color="warning" onClick={()=>changeState(2)}>  <Icon>notification_important</Icon></IconButton>}
                    
              />
            </Grid>
            <Grid item xs={12} sm={6} xl={3}>
              <MiniStatisticsCard
                title={{ text: "Parametros de la red" }}
                count={voltaje + " V"}
                percentage={{ color: "success", text: current + " A" }}
               
                componente={ <IconButton fontSize="small" color="success" onClick={()=>changeState(2)}>  <Icon>bolt</Icon></IconButton>}
                    
              />
              
            </Grid>
            <Grid item xs={12} sm={6} xl={3}>
             
              
                  <MiniStatisticsCard
                    title={{ text: "" }}
                    count={statuspuerta}
                    // percentage={{ color: "error", text: "-2%" }}
                
                    componente={ <IconButton fontSize="small" color="info" onClick={()=>changeState(2)}>  <Icon>meeting_room</Icon></IconButton>}
                    
                  />
  
            
            </Grid>
            <Grid item xs={12} sm={6} xl={3}>
              <MiniStatisticsCard
                title={{ text: "Cámaras" }}
                count="En línea"
              
                componente={ <IconButton fontSize="small" color="error" onClick={()=>changeState(2)}>  <Icon>videocam</Icon></IconButton>}
             
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
