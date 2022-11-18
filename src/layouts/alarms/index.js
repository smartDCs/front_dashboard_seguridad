// @mui material components
import Card from "@mui/material/Card";

import * as React from "react";
// Soft UI Dashboard React components
import SoftBox from "components/SoftBox";

import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";
import Grid from "@mui/material/Grid";
import Icon from "@mui/material/Icon";
import MiniStatisticsCard from "examples/Cards/StatisticsCards/MiniStatisticsCard";
import MUIDataTable from "mui-datatables";
import Switch from "@material-ui/core/Switch";

import axios from "axios";

// Data
import { ThemeProvider } from "@mui/material/styles";
import { createTheme } from "@mui/material/styles";

import { CacheProvider } from "@emotion/react";
import createCache from "@emotion/cache";

import { useState, useEffect } from "react";
import IconButton from "@mui/material/IconButton";

import io from "socket.io-client";

const socket = io("https://backendjc.herokuapp.com");
//const socket = io("localhost:9000");
const muiCache = createCache({
  key: "mui-datatables",
  prepend: true,
});
//debug
//const URI_alarms = "http://localhost:9000/api/alarmsData";
//deploy
const URI_alarms = "https://backendjc.herokuapp.com/api/alarmsData";

// encabezado de las columnas
const columns = [
  {
    name: "type",
    label: "Detalle",
    options: {
      filter: true,
      sort: true,
      filterOptions: { fullWidth: true },
    },
  },
  {
    name: "zone",
    label: "Zona",
    options: {
      filter: true,
      sort: false,
      filterOptions: { fullWidth: true },
    },
  },
  {
    name: "createdAt",
    label: "Fecha del evento",
    options: {
      filter: true,
      sort: false,
      filterOptions: { fullWidth: true },
    },
  },
  {
    name: "status",
    label: "Estado de la alarma",
    options: {
      filter: true,
      sort: true,
      filterOptions: { fullWidth: true },
      customBodyRender: (value) => {
        if (value) {
          return (
            <div style={{ color: "white", backgroundColor: "#ED4713" }}>
              <Switch checked={value} color="default" />
              No ACK
            </div>
          );
        } else {
          return (
            <div style={{ color: "white", backgroundColor: "green" }}>
              <Switch checked={value} />
              ACK
            </div>
          );
        }
      },
    },
  },
];

function Alarmas() {
  var statusSirena = "Desactivada";
  const [responsive, setResponsive] = useState("simple");
  const [tableBodyHeight, setTableBodyHeight] = useState("400px");
  const [tableBodyMaxHeight, setTableBodyMaxHeight] = useState("100%");
  const [searchBtn, setSearchBtn] = useState(true);
  const [downloadBtn, setDownloadBtn] = useState(true);
  const [printBtn, setPrintBtn] = useState(true);
  const [viewColumnBtn, setViewColumnBtn] = useState(true);
  const [filterBtn, setFilterBtn] = useState(true);
  var [sirena, setSirena] = useState(0);
  var [puerta, setPuerta] = useState(0);

  function panico() {
    
    var status = 0;
    // var fecha = new Date().toLocaleString();

    var fecha = new Date();

    var options = {
      weekday: "short",
      year: "numeric",
      month: "2-digit",
      day: "numeric",
      hour: "numeric",
      minute: "numeric",
      second: "numeric",
    };

  /*  console.log(
      fecha.toLocaleDateString("es", options) //en is language option, you may specify..
    );
*/
    if (sirena == 1) {
      status = 0;
    } else {
      status = 1;
    }
    console.log(fecha);
    socket.emit("togglePanico", 1, fecha.toLocaleDateString("es", options), status);
  }

  if (sirena == 1) {
    statusSirena = "Activada";
  }
  const options = {
    search: searchBtn,
    download: downloadBtn,
    print: printBtn,
    viewColumns: viewColumnBtn,
    filter: filterBtn,
    filterType: "dropdown",
    responsive,
    tableBodyHeight,
    tableBodyMaxHeight,
    onTableChange: (action, state) => {
      //console.log(action);
      console.dir(state);
    },

    textLabels: {
      body: {
        noMatch: "No se encontraron coincidencias",
        toolTip: "Ordenar",
        columnHeaderTooltip: (column) => `Ordenar por ${column.label}`,
      },
      pagination: {
        next: "Siguiente",
        previous: "Atras",
        rowsPerPage: "Filas:",
        displayRows: "de",
      },
      toolbar: {
        search: "Buscar",
        downloadCsv: "Descargar CSV",
        print: "Imprimir",
        viewColumns: "Ver Columnas",
        filterTable: "Filtrar tabla",
      },
      filter: {
        all: "Todo",
        title: "Filtros",
        reset: "Limpiar filtros",
      },
      viewColumns: {
        title: "Mostrar columnas",
        titleAria: "Mostrar/Ocultar columnas",
      },
      selectedRows: {
        text: "Fila(s) seleccionadas",
        delete: "Delete",
        deleteAria: "Delete Selected Rows",
      },
    },
  };

  const [filas, setFilas] = useState([]);

  async function getAlarms() {
    
    const res = await axios.get(URI_alarms);
    setFilas(res.data);

    //  setFilas(filas1);
  }
  socket.on("dualData", (statusSirena, statusPuerta) => {
    setSirena(statusSirena);
    setPuerta(statusPuerta);
    console.log("sirena ", sirena);
    console.log("puerta ", puerta);
  });
  useEffect(() => {
    getAlarms();

    // console.log('array filas ', filas);
  });

  return (
    <DashboardLayout>
      <DashboardNavbar />

      <SoftBox py={3}>
        <SoftBox mb={3}>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6} xl={3}>
              <MiniStatisticsCard
                title={{ text: "Alarma de pánico" }}
                count={statusSirena}
                // percentage={{ color: "error", text: "-2%" }}

                componente={
                  <IconButton fontSize="small" color="error" onClick={() => panico()}>
                    {" "}
                    <Icon>campaign</Icon>
                  </IconButton>
                }
              />
            </Grid>
            <Grid item xs={12} sm={12} xl={12}>
              <Card>
                <CacheProvider value={muiCache}>
                  <ThemeProvider theme={createTheme()}>
                    <MUIDataTable
                      title={"Eventos de alarmas sucitadas"}
                      data={filas}
                      columns={columns}
                      options={options}
                    />
                  </ThemeProvider>
                </CacheProvider>
              </Card>
            </Grid>
          </Grid>
        </SoftBox>
      </SoftBox>
      <Footer />
    </DashboardLayout>
  );
}

export default Alarmas;
