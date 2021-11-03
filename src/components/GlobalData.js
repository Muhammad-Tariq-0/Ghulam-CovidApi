import React, { useEffect, useState } from "react";
import { experimentalStyled as styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import "../App.css";
import newcases from '../images/newcases.png'
import hospital from '../images/hospital.png'
import rip from '../images/rip.png'

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
         <Grid item xs={12} sm={4}>
              <Item style={{ backgroundColor: "#EAEEF3" }}>
                <img src={newcases} height={200} width={200}/>
              </Item>   
            </Grid>
            <Grid item xs={12} sm={4}>
              <Item style={{ backgroundColor: "#EAEEF3" }}>
                <img src={hospital} height={200} width={200}/>
              </Item>   
            </Grid>
            <Grid item xs={12} sm={4}>
              <Item style={{ backgroundColor: "#EAEEF3" }}>
                <img src={rip} height={200} width={200}/>
              </Item>   
            </Grid>
      </Grid>
    </div>
  );
};

export default GlobalData;
