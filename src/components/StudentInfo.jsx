import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

export default function StudentInfo({ rows }) {
  let count = 1;
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>SL No</TableCell>
            <TableCell align="center">Email</TableCell>
            <TableCell align="center">First name</TableCell>
            <TableCell align="center">Last Name</TableCell>
            <TableCell align="center">Country</TableCell>
            <TableCell align="center">State</TableCell>
            <TableCell align="center">City</TableCell>
            <TableCell align="center">Zip</TableCell>
            <TableCell align="center">Address</TableCell>
            <TableCell align="center">Phone</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row, id) => (
            <TableRow
              key={id}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {id + 1}
              </TableCell>
              <TableCell align="center">{row.email}</TableCell>
              <TableCell align="center">{row.firstName}</TableCell>
              <TableCell align="center">{row.lastName}</TableCell>
              <TableCell align="center">{row.country}</TableCell>
              <TableCell align="center">{row.state}</TableCell>
              <TableCell align="center">{row.city}</TableCell>
              <TableCell align="center">{row.zip}</TableCell>
              <TableCell align="center">{row.address}</TableCell>
              <TableCell align="center">{row.contact_number}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
