import React from 'react'
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button'
import Grid from '@material-ui/core/Grid';
import { makeStyles, Theme } from '@material-ui/core/styles';
import Image from 'next/image'

const useStyles = makeStyles((theme: Theme) => ({
  button: {
    color: theme.palette.secondary.dark,
  },
}));

function Splash() {
  const classes = useStyles()
  return (
    <Grid container direction="column" alignItems="center" justify="center" spacing={2} style={{ minHeight: '100vh' }}>
      <Grid item xs={12}>
        <Image src="/images/jugg.png" width={280} height={390}/>
      </Grid>
      <Grid item xs={12}>
        <Typography color='textPrimary' variant="h1" component="h2" gutterBottom>
          players.fyi
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <Grid container spacing={1}>
          <Grid item xs>
            <Button variant="outlined" href="/stats/lastDays" className={classes.button}> 
              <Typography noWrap>Last 30 Days</Typography>
            </Button>
          </Grid>
          <Grid item xs>
            <Button variant="outlined" href="/stats/lastDays" className={classes.button}>
              <Typography noWrap>Last 12 Months</Typography>
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default Splash
