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
function Details(props: { appData: object[], toggle: Function, active: object }) {

  return (
    <React.Fragment>
      <Typography component="h2" variant="h6" color="textPrimary" gutterBottom>Games</Typography>
      <Table size="small">
        <TableBody>
          {props.appData.map((row: any) => (
            <TableRow key={row.name}>
              <TableCell>{row.name}</TableCell>
              <TableCell>
                <IconButton onClick={ () => props.toggle(row) }>
                  <IconToggle isHidden={ props.active[row.name] }/>
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
  return isHidden ? <VisibilityOffIcon fontSize="small"/> : <VisibilityIcon fontSize="small"/>
}

export default Details
