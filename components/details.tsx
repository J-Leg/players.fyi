import React from 'react';
import { Typography, Grid, Table, TableBody, TableCell, TableRow, IconButton } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import VisibilityIcon from '@material-ui/icons/Visibility'
import VisibilityOffIcon from '@material-ui/icons/VisibilityOff'

const useStyles = makeStyles(() => ({
  table: {
    width: '80%'
  },
}))

/**
 * Component to display supplementary information
 *
 * @Component
 */
function Details(props: { appData: object[], toggle: Function, active: object }) {
  const classes = useStyles()
  return (
    <React.Fragment>
      <Typography component="h2" variant="h6" color="textPrimary" gutterBottom>Games</Typography>
      <Grid container justify="center">
        <Table className={classes.table} size="small">
          <TableBody>
            {props.appData.map((row: any) => (
              <TableRow key={row.name}>
                <TableCell>{row.name}</TableCell>
                <TableCell align="center" padding="none">
                  <IconButton onClick={ () => props.toggle(row) }>
                    <IconToggle isHidden={ props.active[row.name] }/>
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Grid>
    </React.Fragment>
  );
}

function IconToggle({ isHidden }) {
  return isHidden ? <VisibilityOffIcon fontSize="small"/> : <VisibilityIcon fontSize="small"/>
}

export default Details
