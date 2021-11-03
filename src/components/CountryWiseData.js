import React, { useEffect } from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

const CountryWiseData = ({ countryData }) => {
  return (
    <div className="contryData">
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 700 }} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell>Country Name</StyledTableCell>
              <StyledTableCell align="right">Total Cases</StyledTableCell>
              <StyledTableCell align="right">Total Deaths</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {countryData.map((country) => {
              return (
                <StyledTableRow>
                  <StyledTableCell component="th" scope="row">{country.Country}</StyledTableCell>
                  <StyledTableCell align="right">{country.TotalConfirmed}</StyledTableCell>
                  <StyledTableCell align="right">{country.TotalDeaths}</StyledTableCell>
                </StyledTableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default CountryWiseData;
