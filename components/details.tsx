import React from 'react';
import { Table, TableBody, TableCell, TableHead, TableRow } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';

export default function Details({ appData }) {
  return (
    <React.Fragment>
      <Typography component="h2" variant="h6" color="textPrimary" gutterBottom>Details</Typography>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {appData.map((row: any) => (
            <TableRow key={row.name}>
              <TableCell>{row.name}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </React.Fragment>
  );
}
