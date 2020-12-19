import React from 'react';
import { Table, TableBody, TableCell, TableRow } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';

/**
 * Component to display supplementary information
 *
 * @Component
 */
export default function Details({ appData }) {
  return (
    <React.Fragment>
      <Typography component="h2" variant="h6" color="textPrimary" gutterBottom>Games</Typography>
      <Table size="small">
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
