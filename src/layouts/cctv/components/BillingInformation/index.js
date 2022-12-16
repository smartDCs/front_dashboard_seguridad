

// @mui material components
import Card from "@mui/material/Card";
import React from 'react';
// Soft UI Dashboard React components
import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";




function BillingInformation() {
 
 
  return (
    <Card id="delete-account">
      <SoftBox pt={3} px={2}>
        <SoftTypography variant="h6" fontWeight="medium">
          Vistas en directo
        </SoftTypography>
      </SoftBox>
      <SoftBox pt={0} pb={3} px={2}>
      <iframe src="https://a6ab5cf8379e9fdc.p21.rt3.io" width="100%" height="600" >

</iframe>
       
      </SoftBox>
    </Card>
  );
}

export default BillingInformation;
