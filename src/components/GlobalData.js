import React from "react";
import { experimentalStyled as styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import "../App.css";

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: "center",
  marginTop: "20px",
  color: theme.palette.text.secondary,
}));

const GlobalData = ({ globalData }) => {
  return (
    <div className="app">
      <Grid container spacing={0.5}>
        {Object.keys(globalData).map((key) => {
          return (
            <Grid item xs={12} sm={4}>
              <Item style={{ backgroundColor: "#EAEEF3" }}>
                <h4 style={{ color: "maroon" }}>{key}</h4>
                <h3>{globalData[key]}</h3>
              </Item>
            </Grid>
          );
        })}
       
      </Grid>
    </div>
  );
};

export default GlobalData;
