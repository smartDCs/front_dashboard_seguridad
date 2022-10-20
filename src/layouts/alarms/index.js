
// @mui material components
import Card from "@mui/material/Card";

import * as React from 'react';
// Soft UI Dashboard React components
import SoftBox from "components/SoftBox";

import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";


import MUIDataTable from "mui-datatables";


import axios from "axios";

// Data
import { ThemeProvider } from "@mui/material/styles";
import { createTheme } from "@mui/material/styles";

import { CacheProvider } from "@emotion/react";
import createCache from "@emotion/cache";
import movimiento from "assets/images/movimiento.png";
import incendio from "assets/images/fire.png";
import { useState, useEffect } from 'react';



const muiCache = createCache({
  key: "mui-datatables",
  prepend: true
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
    filterOptions: { fullWidth: true }
   }
  },
  {
   name: "zone",
   label: "Zona",
   options: {
    filter: true,
    sort: false,
    filterOptions: { fullWidth: true }
   }
  },
  {
   name: "createdAt",
   label: "Fecha del evento",
   options: {
    filter: true,
    sort: false,
    filterOptions: { fullWidth: true }
   }
  },
  {
   name: "status",
   label: "Estado de la alarma",
   options: {
    filter: true,
    sort: false,
    filterOptions: { fullWidth: true }
   }
  },
 ];





function Alarmas() {

  const [responsive, setResponsive] = useState("simple");
  const [tableBodyHeight, setTableBodyHeight] = useState("400px");
  const [tableBodyMaxHeight, setTableBodyMaxHeight] = useState("100%");
  const [searchBtn, setSearchBtn] = useState(true);
  const [downloadBtn, setDownloadBtn] = useState(true);
  const [printBtn, setPrintBtn] = useState(true);
  const [viewColumnBtn, setViewColumnBtn] = useState(true);
  const [filterBtn, setFilterBtn] = useState(true);

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
      console.log(action);
      console.dir(state);
    },

    textLabels: {
      body: {
        noMatch: "No se encontraron coincidencias",
        toolTip: "Ordenar",
        columnHeaderTooltip: column => `Ordenar por ${column.label}`
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
    }



  };

  const [filas, setFilas] = useState([]);



  async function getAlarms() {

    const res = await axios.get(URI_alarms);
    setFilas(res.data);


    //  setFilas(filas1);
  }

  useEffect(() => {
    getAlarms();

    // console.log('array filas ', filas);

  }, []);


  

  return (


    <DashboardLayout>
      <DashboardNavbar />




      <SoftBox py={3}>
        <SoftBox mb={3}>
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
        </SoftBox>

      </SoftBox>
      <Footer />
    </DashboardLayout>
  );
}

export default Alarmas;
