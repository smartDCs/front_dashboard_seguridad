

// @mui material components
import Card from "@mui/material/Card";

// Soft UI Dashboard React components
import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";

// Billing page components
import Bill from "layouts/cctv/components/Bill";

function BillingInformation() {
  return (
    <Card id="delete-account">
      <SoftBox pt={3} px={2}>
        <SoftTypography variant="h6" fontWeight="medium">
          Vistas en directo
        </SoftTypography>
      </SoftBox>
      <SoftBox pt={0} pb={2} px={2}>
        <SoftBox component="ul" display="flex" flexDirection="column" p={0} m={0}>
        <iframe width="770" height="433" src="https://www.youtube.com/embed/rIWGcxnVIA8" title="Cómo documentar API con Swagger & Node js & Express" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
       
         
          <Bill
            name="Camara salon 2"
            company="Instituto"
            url="https://www.youtube.com/embed/LMG-Gvz5WZk"
          />
         
        </SoftBox>
      </SoftBox>
    </Card>
  );
}

export default BillingInformation;
