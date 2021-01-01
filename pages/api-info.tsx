import React from 'react'
import Image from 'next/image'
import { Container, Grid, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import Baseline from 'components/baseline'

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  appBarSpacer: theme.mixins.toolbar,
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },
}));


function Api(){
  const classes = useStyles()

  return (
    <React.Fragment>
      <Baseline/>
      <div className={classes.appBarSpacer} />
      <Container maxWidth="lg" className={classes.container}>
        <Grid container direction="column" alignItems="center" justify="center" spacing={2} style={{ minHeight: '70vh' }}>
          <Grid item xs={12}>
            <Image src="/images/build.svg" width={200} height={200}/>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="subtitle2">TODO</Typography>
          </Grid>
        </Grid>
      </Container>
    </React.Fragment>
  )
}

export default Api 
