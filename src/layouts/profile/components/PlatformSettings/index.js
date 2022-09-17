
import { useState } from "react";

// @mui material components
import Card from "@mui/material/Card";
import Switch from "@mui/material/Switch";

// Soft UI Dashboard React components
import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";

function PlatformSettings() {
  const [viewAlarms, setAlarms] = useState(true);
  const [armAlarms, setArmAlarms] = useState(true);
  const [confAlarms, setconfAlarms] = useState(true);
  const [viewCCTV, setViewCCTV] = useState(true);
  const [viewAccess, setviewAccess] = useState(true);
  const [openAccess, setopenAccess] = useState(true);

  return (
    <Card>
      <SoftBox pt={2} px={2}>
        <SoftTypography variant="h6" fontWeight="medium" textTransform="capitalize">
          Permisos 
        </SoftTypography>
      </SoftBox>
      <SoftBox pt={1.5} pb={2} px={2} lineHeight={1.25}>
        <SoftTypography variant="caption" fontWeight="bold" color="text" textTransform="uppercase">
          Alarmas
        </SoftTypography>
        <SoftBox display="flex" py={1} mb={0.25}>
          <SoftBox mt={0.25}>
            <Switch checked={viewAlarms} onChange={() => setAlarms(!viewAlarms)} />
          </SoftBox>
          <SoftBox width="80%" ml={2}>
            <SoftTypography variant="button" fontWeight="regular" color="text">
              Visualización
            </SoftTypography>
          </SoftBox>
        </SoftBox>
        <SoftBox display="flex" py={1} mb={0.25}>
          <SoftBox mt={0.25}>
            <Switch checked={armAlarms} onChange={() => setArmAlarms(!armAlarms)} />
          </SoftBox>
        
          <SoftBox width="80%" ml={2}>
            <SoftTypography variant="button" fontWeight="regular" color="text">
              Armado / Desarmado de alarmas
            </SoftTypography>
          </SoftBox>
        </SoftBox>
        <SoftBox display="flex" py={1} mb={0.25}>
          <SoftBox mt={0.25}>
            <Switch checked={confAlarms} onChange={() => setconfAlarms(!confAlarms)} />
          </SoftBox>
          <SoftBox width="80%" ml={2}>
            <SoftTypography variant="button" fontWeight="regular" color="text">
              Configuración
            </SoftTypography>
          </SoftBox>
        </SoftBox>


        <SoftBox mt={3}>
          <SoftTypography
            variant="caption"
            fontWeight="bold"
            color="text"
            textTransform="uppercase"
          >
            CCTV
          </SoftTypography>
        </SoftBox>
        <SoftBox display="flex" py={1} mb={0.25}>
          <SoftBox mt={0.25}>
            <Switch checked={viewCCTV} onChange={() => setViewCCTV(!viewCCTV)} />
          </SoftBox>
          <SoftBox width="80%" ml={2}>
            <SoftTypography variant="button" fontWeight="regular" color="text">
              Vista en tiempo real
            </SoftTypography>
          </SoftBox>
        </SoftBox>
     

        <SoftBox mt={3}>
          <SoftTypography
            variant="caption"
            fontWeight="bold"
            color="text"
            textTransform="uppercase"
          >
            Control de acceso
          </SoftTypography>
        </SoftBox>
        <SoftBox display="flex" py={1} mb={0.25}>
          <SoftBox mt={0.25}>
            <Switch checked={viewAccess} onChange={() => setviewAccess(!viewAccess)} />
          </SoftBox>
          <SoftBox width="80%" ml={2}>
            <SoftTypography variant="button" fontWeight="regular" color="text">
              Monitorear estado
            </SoftTypography>
          </SoftBox>
        </SoftBox>
        <SoftBox display="flex" py={1} mb={0.25}>
          <SoftBox mt={0.25}>
            <Switch checked={openAccess} onChange={() => setopenAccess(!openAccess)} />
          </SoftBox>
          <SoftBox width="80%" ml={2}>
            <SoftTypography variant="button" fontWeight="regular" color="text">
              Abrir puerta
            </SoftTypography>
          </SoftBox>
        </SoftBox>
       
      </SoftBox>
    </Card>
  );
}

export default PlatformSettings;
