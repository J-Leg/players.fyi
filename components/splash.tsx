import React from 'react'
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button'
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { makeStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) => ({
  paper: {
  },
  title: {
    text: theme.palette.primary
  },
  button: {
    color: theme.palette.text.secondary,
  },
}));

function Splash() {
	const classes = useStyles()
  return (
    <Grid container direction="column" alignItems="center" justify="center" spacing={2} style={{ minHeight: '100vh' }}>
      <Grid item xs={12}>
        <Paper elevation={0} className={classes.paper}>
          <Typography variant="h1" component="h2" gutterBottom>
            players.fyi
          </Typography>
        </Paper>
      </Grid>
      <Grid item xs={12}>
        <Grid container spacing={1}>
          <Grid item xs>
              <Button variant="outlined" href="/stats/lastDays" className={classes.button}>Last 30 Days</Button>
          </Grid>
          <Grid item xs>
            <Button variant="outlined" href="/stats/lastDays" className={classes.button}>Last 12 Months</Button>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default Splash
