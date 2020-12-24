import React from 'react';
import { Table, TableBody, TableCell, TableRow, IconButton } from '@material-ui/core';
import VisibilityIcon from '@material-ui/icons/Visibility';
import VisibilityOffIcon from '@material-ui/icons/VisibilityOff';

import Typography from '@material-ui/core/Typography';

/**
 * Component to display supplementary information
 *
 * @Component
 */
function Details({ appData, toggle}) {

  return (
    <React.Fragment>
      <Typography component="h2" variant="h6" color="textPrimary" gutterBottom>Games</Typography>
      <Table size="small">
        <TableBody>
          {appData.map((row: any) => (
            <TableRow key={row.name}>
              <TableCell>{row.name}</TableCell>
              <TableCell>
                <IconButton onClick={ () => toggle(row) }>
                  <IconToggle isHidden={row.hide}/>
                </IconButton>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </React.Fragment>
  );
}

function IconToggle({ isHidden }) {
  return isHidden ? <VisibilityIcon/> : <VisibilityOffIcon/>
}

export default Details
