import React from 'react'
import { GetStaticProps } from 'next'
import { InferGetStaticPropsType } from 'next'

import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import { makeStyles } from '@material-ui/core/styles'

import clsx from 'clsx';

import { queryLast } from 'middleware/db'
import { appify, chartifyDaily, chartifyMonthlyAvg } from 'lib/dataUtils'

import Chart from 'components/chart'
import Details from 'components/details'
import Baseline from 'components/baseline'

const REGEN_HOURS: number = 12;
const SEC_IN_HOUR: number = 3600;

export const getStaticProps: GetStaticProps = async() => {
  const res: Object[] = await queryLast(10)
  return {
    props: {
      chartDataDaily: chartifyDaily(res),
      chartDataMonthlyAvg: chartifyMonthlyAvg(res),
      appData: appify(res),
    },
  };
}

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

function LastDays({ appData, chartDataDaily, chartDataMonthlyAvg }: InferGetStaticPropsType<typeof getStaticProps>) {
  const days30: String = "Last 30 Days";
  const classes = useStyles();
  const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);

  return (
    <React.Fragment>
      <Baseline/>
      <main className={classes.content}>
        <div className={classes.appBarSpacer} />
        <Container maxWidth="lg" className={classes.container}>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <Paper elevation={0} className={fixedHeightPaper}>
                <Chart
                  appData={ appData }
                  chartData={ chartDataDaily }
                  chartTitle={ days30 }
                />
              </Paper>
            </Grid>
            <Grid item xs={12}>
              <Paper elevation={0} className={classes.paper}>
                <Details appData={ appData }/>
              </Paper>
            </Grid>
          </Grid>
        </Container>
      </main>
    </React.Fragment>
  );
}
export default LastDays;
