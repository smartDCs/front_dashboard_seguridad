import { useState } from "react";

// react-router-dom components
import { Link } from "react-router-dom";

// @mui material components
import Switch from "@mui/material/Switch";

// Soft UI Dashboard React components
import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";
import SoftInput from "components/SoftInput";
import SoftButton from "components/SoftButton";

// Authentication layout components
import CoverLayout from "layouts/authentication/components/CoverLayout";
import { authenticationService } from "../_services";
import axios from "axios";
// Images
import curved9 from "assets/images/curved-images/curved-6.jpg";
const URI_users = "https://backendjc.herokuapp.com/api/loginUser";
function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [rememberMe, setRememberMe] = useState(true);

  const handleSetRememberMe = () => setRememberMe(!rememberMe);
  if (authenticationService.currentUserValue) {
    this.props.history.push("/dashboard");
  }
  //leer la base de datos usuario
  async function getUser(email, password) {
    // const res = await axios.get(URI_alarms);
    //setFilas(res.data);
    console.log("User: ", email);
    console.log("Password: ", password);
    //  setFilas(filas1);
const params={
  email: email, 
  password: password 
}
    const res = await axios.get(URI_users);

    console.log("res:::: ", res.data);
  }

  function login() {
    // setStatus();
    authenticationService.login("admin", "admin").then(
      (user) => {
        const { from } = this.props.location.state || { from: { pathname: "/dashboard" } };
        this.props.history.push(from);
      },
      (error) => {
        setSubmitting(false);
        setStatus(error);
      }
    );
  }
  return (
    <CoverLayout
      title="Bienvenido"
      description="Ingrese su correo y contraseña para iniciar sesión"
      image={curved9}
    >
      <SoftBox component="form" role="form">
        <SoftBox mb={2}>
          <SoftBox mb={1} ml={0.5}>
            <SoftTypography component="label" variant="caption" fontWeight="bold">
              Email
            </SoftTypography>
          </SoftBox>
          <SoftInput
            type="email"
            placeholder="Email"
            onChange={(event) => setEmail(event.target.value)}
          />
        </SoftBox>
        <SoftBox mb={2}>
          <SoftBox mb={1} ml={0.5}>
            <SoftTypography component="label" variant="caption" fontWeight="bold">
              Password
            </SoftTypography>
          </SoftBox>
          <SoftInput
            type="password"
            placeholder="Password"
            onChange={(event) => setPassword(event.target.value)}
          />
        </SoftBox>
        <SoftBox display="flex" alignItems="center">
          <Switch checked={rememberMe} onChange={handleSetRememberMe} />
          <SoftTypography
            variant="button"
            fontWeight="regular"
            onClick={handleSetRememberMe}
            sx={{ cursor: "pointer", userSelect: "none" }}
          >
            &nbsp;&nbsp;Remember me
          </SoftTypography>
        </SoftBox>
        <SoftBox mt={4} mb={1}>
          <SoftButton
            variant="gradient"
            color="info"
            fullWidth
            onClick={() => getUser(email, password)}
          >
            Iniciar sesión
          </SoftButton>
        </SoftBox>
        <SoftBox mt={3} textAlign="center">
          <SoftTypography variant="button" color="text" fontWeight="regular">
            No estás registrado?{" "}
            <SoftTypography
              component={Link}
              to="/authentication/sign-up"
              variant="button"
              color="info"
              fontWeight="medium"
              textGradient
            >
              Sign up
            </SoftTypography>
          </SoftTypography>
        </SoftBox>
      </SoftBox>
    </CoverLayout>
  );
}

export default SignIn;
