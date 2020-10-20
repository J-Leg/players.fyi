import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button'
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';

import Link from 'next/link'

const useStyles = makeStyles((theme) => ({
  paper: {
    background: 'transparent',
  },
}));

function Splash() {
	const classes = useStyles();
  return (
    <Grid 
      container 
      spacing={2} 
      justify="center" 
      alignItems="center" 
      direction="column"
      style={{ minHeight: '75vh' }}>
      <Grid item xs={12}>
        <Paper elevation={0} className={classes.paper}>
          <Typography variant="h1">
            players.fyi
          </Typography>
        </Paper>
      </Grid>
      <Grid item xs={6}>
        <Link href="/stats/lastDays">
          <Button variant="outlined">Last 30 Days</Button>
        </Link>
      </Grid>
      <Grid item xs={6}>
        <Link href="/stats/lastDays">
          <Button variant="outlined">Last 12 Months</Button>
        </Link>
      </Grid>
    </Grid>
  );
}

export default Splash
