

// prop-types is a library for typechecking of props
import PropTypes from "prop-types";
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';

// @mui material components
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";
import Icon from "@mui/material/Icon";
import SoftButton from "components/SoftButton";
// Soft UI Dashboard React components
import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";

function MiniStatisticsCard({ bgColor, title, count, percentage, direction,componente }) {
  return (
    <Card>
      <SoftBox bgColor={bgColor} variant="gradient">
        <SoftBox p={2}>
          <Grid container alignItems="center">
            {direction === "left" ? (
              <Grid item>
                <SoftBox
                  variant="gradient"
                //  bgColor={bgColor === "white" }
                  color={bgColor === "dark" ? "white" : "dark"}
                  width="3rem"
                  height="3rem"
                  borderRadius="md"
                  display="flex"
                  justifyContent="center"
                  alignItems="center"
                  shadow="md"
                >
                {componente}
                </SoftBox>
              </Grid>
            ) : null}
            <Grid item xs={8}>
              <SoftBox ml={direction === "left" ? 2 : 0} lineHeight={1}>
                <SoftTypography
                  variant="button"
                  color={bgColor === "white" ? "text" : "white"}
                  opacity={bgColor === "white" ? 1 : 0.7}
                  textTransform="capitalize"
                  fontWeight={title.fontWeight}
                >
                  {title.text}
                </SoftTypography>
                <SoftTypography
                  variant="h5"
                  fontWeight="bold"
                  color={bgColor === "white" ? "dark" : "white"}
                >
                  {count}{" "}
                  <SoftTypography variant="button" color={percentage.color} fontWeight="bold">
                    {percentage.text}
                  </SoftTypography>
                </SoftTypography>
              </SoftBox>
            </Grid>
            {direction === "right" ? (
              <Grid item xs={4}>
                <SoftBox
                  variant="gradient"
                //  bgColor={bgColor === "white" }
                  color={bgColor === "dark" ? "white" : "dark"}
                  width="3rem"
                  height="3rem"
                  marginLeft="auto"
                  borderRadius="md"
                  display="flex"
                  justifyContent="center"
                  alignItems="center"
                  shadow="md"
                >
                  {componente}
                 
                 
                </SoftBox>
              </Grid>
            ) : null}
          </Grid>
        </SoftBox>
      </SoftBox>
    </Card>
  );
}

// Setting default values for the props of MiniStatisticsCard
MiniStatisticsCard.defaultProps = {
  bgColor: "white",
  title: {
    fontWeight: "medium",
    text: "",
  },
  percentage: {
    color: "success",
    text: "",
  },
  direction: "right",
};

// Typechecking props for the MiniStatisticsCard
MiniStatisticsCard.propTypes = {
  bgColor: PropTypes.oneOf([
    "white",
    "primary",
    "secondary",
    "info",
    "success",
    "warning",
    "error",
    "dark",
  ]),
  title: PropTypes.PropTypes.shape({
    fontWeight: PropTypes.oneOf(["light", "regular", "medium", "bold"]),
    text: PropTypes.string,
  }),
  count: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  percentage: PropTypes.shape({
    color: PropTypes.oneOf([
      "primary",
      "secondary",
      "info",
      "success",
      "warning",
      "error",
      "dark",
      "white",
    ]),
    text: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  }),
  
  direction: PropTypes.oneOf(["right", "left"]),

 componente:PropTypes.node,


};

export default MiniStatisticsCard;
