

import { useState } from "react";

// react-router-dom components
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
// @mui material components
import Card from "@mui/material/Card";
import Checkbox from "@mui/material/Checkbox";

import axios from "axios";
import logstatus from "logstatus";
// Soft UI Dashboard React components
import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";
import SoftInput from "components/SoftInput";
import SoftButton from "components/SoftButton";

// Authentication layout components
import BasicLayout from "layouts/authentication/components/BasicLayout";
import Socials from "layouts/authentication/components/Socials";
import Separator from "layouts/authentication/components/Separator";

// Images
import curved6 from "assets/images/curved-images/curved14.jpg";

function SignUp() {
  const [agreement, setAgremment] = useState(true);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const handleSetAgremment = () => setAgremment(!agreement);
//const URI_users="https://backendjc.onrender.com/api/usersDash"
const URI_users="http://localhost:9000/api/usersDash"
  async function createUser(name,email, password) {
    
    const res = await axios.post(URI_users, {name:name, email: email,role:"admin", password: password } );

    //console.log("res:::: ", res.data);
    console.log(res.data);
    if (res.data != null) {
      alert("Usuario creado correctamente ");
      navigate("/");
      logstatus=false;
    } else {
      alert("El usuario o contraseña estan incorrectos");
      logstatus=false;
    }
  }




  return (
    <BasicLayout
      title="Bienvenido"
      description="Crear una nueva cuenta"
      image={curved6}
    >
      <Card>
      
       
        <SoftBox pt={2} pb={3} px={3}>
          <SoftBox component="form" role="form">
            <SoftBox mb={2}>
              <SoftInput 
              placeholder="Nombre" 
              onChange={(event) => setName(event.target.value)}
              />
            </SoftBox>
            <SoftBox mb={2}>
              <SoftInput 
              type="email" 
              placeholder="Email" 
              onChange={(event) => setEmail(event.target.value)}
              />
            </SoftBox>
            <SoftBox mb={2}>
              <SoftInput 
              type="password" 
              placeholder="Password"
              onChange={(event) => setPassword(event.target.value)}
              />
            </SoftBox>
            <SoftBox display="flex" alignItems="center">
              <Checkbox checked={agreement} onChange={handleSetAgremment} />
              <SoftTypography
                variant="button"
                fontWeight="regular"
                onClick={handleSetAgremment}
                sx={{ cursor: "poiner", userSelect: "none" }}
              >
                &nbsp;&nbsp;Acepto los&nbsp;
              </SoftTypography>
              <SoftTypography
                component="a"
                href="#"
                variant="button"
                fontWeight="bold"
                textGradient
              >
                Terminos y Condiciones
              </SoftTypography>
            </SoftBox>
            <SoftBox mt={4} mb={1}>
              <SoftButton 
              variant="gradient" 
              color="dark" 
              fullWidth
              onClick={() => createUser(name,email, password)}
              >
                Registrarme
              </SoftButton>
            </SoftBox>
            <SoftBox mt={3} textAlign="center">
              <SoftTypography variant="button" color="text" fontWeight="regular">
                Ya tienes una cuenta?&nbsp;
                <SoftTypography
                  component={Link}
                  to="/authentication/sign-in"
                  variant="button"
                  color="dark"
                  fontWeight="bold"
                  textGradient
                >
                  Sign in
                </SoftTypography>
              </SoftTypography>
            </SoftBox>
          </SoftBox>
        </SoftBox>
      </Card>
    </BasicLayout>
  );
}

export default SignUp;
