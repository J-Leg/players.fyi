import React from 'react'
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import Button from '@material-ui/core/Button'
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import { makeStyles, Theme } from '@material-ui/core/styles';
import Image from 'next/image'

const useStyles = makeStyles((theme: Theme) => ({
  button: {
    color: theme.palette.secondary.dark,
  },
  title: {
    color: theme.palette.text.primary,
  },
}));

/**
 * Component for the focal point of a landing page
 *
 * @Component
 */
function Splash() {
  const classes = useStyles()
  return (
    <React.Fragment>
      <Grid container direction="column" alignItems="center" justify="center" spacing={2} style={{ minHeight: '99vh' }}>
        <Grid item xs={12}>
          <Image src="/images/geometric_yurnero.png" width={280} height={390}/>
        </Grid>
        <Grid item xs={12}>
          <Typography color='textPrimary' variant="h1" gutterBottom>players.fyi</Typography>
        </Grid>
        <Grid item xs={12} spacing={6}>
          <Grid container spacing={1}>
            <Grid item xs>
              <Button variant="outlined" href="/stats/lastDays" className={classes.button}>
                <Typography noWrap>Last 30 Days</Typography>
              </Button>
            </Grid>
            <Grid item xs>
              <Button variant="outlined" href="/stats/lastMonths" className={classes.button}>
                <Typography noWrap>Last 12 Months</Typography>
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Box textAlign="center">
        <Typography variant="subtitle1">
          Artwork by <Link color="textPrimary" target="_blank" href="https://www.instagram.com/dotadrawing/">dotadrawing</Link>
        </Typography>
      </Box>
    </React.Fragment>
  );
}

export default Splash
