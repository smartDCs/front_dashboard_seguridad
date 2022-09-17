/* eslint-disable react/prop-types */
// Soft UI Dashboard React components
import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";
import SoftAvatar from "components/SoftAvatar";
import SoftBadge from "components/SoftBadge";

// Images
import movimiento from "assets/images/movimiento.png";
import incendio from "assets/images/fire.png";


function DetalleAlarma({ image, tipo }) {
  return (
    <SoftBox display="flex" alignItems="center" px={1} py={0.5}>
     
      <SoftBox mr={2}>
        <SoftAvatar src={image} alt={name} size="sm" variant="rounded" />
      </SoftBox>
      
      <SoftBox display="flex" flexDirection="column">
        <SoftTypography variant="button" fontWeight="medium">
          {tipo}
        </SoftTypography>
        {/**
        <SoftTypography variant="caption" color="secondary">
          {email}
        </SoftTypography>
         */}
      </SoftBox>
    </SoftBox>
  );
}

function Function({ job, org }) {
  return (
    <SoftBox display="flex" flexDirection="column">
      <SoftTypography variant="caption" fontWeight="medium" color="text">
        {job}
      </SoftTypography>
      <SoftTypography variant="caption" color="secondary">
        {org}
      </SoftTypography>
    </SoftBox>
  );
}

const Alarmas = {
  columns: [
    { name: "detalle", align: "left" },
    { name: "zona", align: "left" },
    { name: "status", align: "center" },
    { name: "fecha", align: "center" },
    { name: "accion", align: "center" },
  ],

  rows: [
    {
      detalle: <DetalleAlarma image={movimiento} tipo="Alarma de movimiento" />,
      zona: <SoftTypography variant="caption" fontWeight="medium" color="text">
      zona 1
    </SoftTypography>,
      status: (
        <SoftBadge variant="gradient" badgeContent="No aceptada" color="warning" size="xs" container />
      ),
      fecha: (
        <SoftTypography variant="caption" color="secondary" fontWeight="medium">
          23/04/18 - 11:30:45
        </SoftTypography>
      ),
      accion: (
        <SoftTypography
          component="a"
          href="#"
          variant="caption"
          color="secondary"
          fontWeight="medium"
        >
          Aceptar
        </SoftTypography>
      ),
    },
    {
      detalle: <DetalleAlarma image={incendio} tipo="Alarma de incendio" />,
      zona: <SoftTypography variant="caption" fontWeight="medium" color="text">
      zona 1
    </SoftTypography>,
      status: (
        <SoftBadge variant="gradient" badgeContent="Aceptada" color="secondary" size="xs" container />
      ),
      fecha: (
        <SoftTypography variant="caption" color="secondary" fontWeight="medium">
          11/01/19 - 15:34:12
        </SoftTypography>
      ),
      accion: (
        <SoftTypography
          component="a"
          href="#"
          variant="caption"
          color="secondary"
          fontWeight="medium"
        >
          Aceptar
        </SoftTypography>
      ),
    },
    {
      detalle: <DetalleAlarma image={movimiento} tipo="Alarma de movimiento" />,
      zona: <SoftTypography variant="caption" fontWeight="medium" color="text">
      zona 3
    </SoftTypography>,
      status: (
        <SoftBadge variant="gradient" badgeContent="No aceptada" color="warning" size="xs" container />
      ),
      fecha: (
        <SoftTypography variant="caption" color="secondary" fontWeight="medium">
          19/09/17 - 23:00:12
        </SoftTypography>
      ),
      accion: (
        <SoftTypography
          component="a"
          href="#"
          variant="caption"
          color="secondary"
          fontWeight="medium"
        >
          Aceptar
        </SoftTypography>
      ),
    },
    {
      detalle: <DetalleAlarma image={movimiento} tipo="Alarma de movimiento" />,
      zona: <SoftTypography variant="caption" fontWeight="medium" color="text">
      zona 1
    </SoftTypography>,
      status: (
        <SoftBadge variant="gradient" badgeContent="No aceptada" color="warning" size="xs" container />
      ),
      fecha: (
        <SoftTypography variant="caption" color="secondary" fontWeight="medium">
          24/12/08 - 00:01:23
        </SoftTypography>
      ),
      accion: (
        <SoftTypography
          component="a"
          href="#"
          variant="caption"
          color="secondary"
          fontWeight="medium"
        >
          Aceptar
        </SoftTypography>
      ),
    },
    {
      detalle: <DetalleAlarma image={movimiento} tipo="Alarma de movimiento" />,
      zona: <SoftTypography variant="caption" fontWeight="medium" color="text">
      zona 1
    </SoftTypography>,
      status: (
        <SoftBadge variant="gradient" badgeContent="Aceptada" color="secondary" size="xs" container />
      ),
      fecha: (
        <SoftTypography variant="caption" color="secondary" fontWeight="medium">
          04/10/21 - 18:34:12
        </SoftTypography>
      ),
      accion: (
        <SoftTypography
          component="a"
          href="#"
          variant="caption"
          color="secondary"
          fontWeight="medium"
        >
          Aceptar
        </SoftTypography>
      ),
    },
    {
      detalle: <DetalleAlarma image={movimiento} tipo="Alarma de movimiento" />,
      zona: <SoftTypography variant="caption" fontWeight="medium" color="text">
      zona 1
    </SoftTypography>,
      status: (
        <SoftBadge variant="gradient" badgeContent="Aceptada" color="secondary" size="xs" container />
      ),
      fecha: (
        <SoftTypography variant="caption" color="secondary" fontWeight="medium">
          14/09/20 - 09:12:45
        </SoftTypography>
      ),
      accion: (
        <SoftTypography
          component="a"
          href="#"
          variant="caption"
          color="secondary"
          fontWeight="medium"
        >
          Aceptar
        </SoftTypography>
      ),
    },
  ],
};

export default Alarmas;