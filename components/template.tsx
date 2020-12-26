import React, { useState } from 'react'
import { Container, Grid, Paper } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

import clsx from 'clsx';

import Chart from 'components/chart'
import Details from 'components/details'
import Baseline from 'components/baseline'

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  appBarSpacer: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    height: '100%',
    overflow: 'auto',
  },
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },
  paper: {
    padding: theme.spacing(2),
    display: 'flex',
    overflow: 'auto',
    flexDirection: 'column',
  },
  fixedHeight: {
    height: 600,
  },
}));

/**
 * Component used as a template for "chart" pages
 *
 * @component
 */
function Template(props: { title: string, appData: object[], chartData: object[] }) {
  const classes = useStyles();
  const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);

  const initialState = {}
  for (var e of props.appData) { initialState[e['name']] = false }

  const [lineProps, setLineProps] = useState(initialState)
  const toggleVisibility = (e: any) => { setLineProps({ ...lineProps, [e['name']]: !lineProps[e['name']]}) }

  return (
    <React.Fragment>
      <Baseline/>
      <div className={classes.appBarSpacer} />
      <Container maxWidth="lg" className={classes.container}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Paper elevation={0} className={fixedHeightPaper}>
              <Chart
                title={props.title}
                appData={props.appData}
                chartData={props.chartData}
                active={lineProps}
              />
            </Paper>
          </Grid>
          <Grid item xs={12}>
            <Paper elevation={0} className={classes.paper}>
              <Details
                appData={props.appData} 
                toggle={toggleVisibility}
                active={lineProps}
              />
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </React.Fragment>
  );
}

export default Template
