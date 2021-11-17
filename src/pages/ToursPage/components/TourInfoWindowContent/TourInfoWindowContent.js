import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";

export const ToursInfoWindowContent = ({ tours }) => {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell>Tour name</TableCell>
            <TableCell align="right">Price&nbsp;($)</TableCell>
            <TableCell align="right">Country</TableCell>
            <TableCell align="right">Transport type</TableCell>
            <TableCell align="right">Available seats</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {tours.map((tour) => (
            <TableRow
              key={tour.name}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {tour.name}
              </TableCell>
              <TableCell align="right">{tour.price}</TableCell>
              <TableCell align="right">{tour.country}</TableCell>
              <TableCell align="right">{tour.transport}</TableCell>
              <TableCell align="right">{tour.availableSeats}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
