import React from 'react'
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

type Qna = [string, string]

function Search(){
  const classes = useStyles()
  
  const qnaList: Qna[] = [
    ["Was ist das?", "Keine Ahnung."],
    ["Warum der Deutsche?", "Keine Ahnung."],
    ["Können wir das auf Englisch fortsetzen?", "Ok."],
    ["Why did you make this?", "Yes."],
  ]

  return (
    <React.Fragment>
      <Baseline/>
      <div className={classes.appBarSpacer} />
      <Container maxWidth="md" className={classes.container}>
        <Grid container spacing={4}>
          {
            qnaList.map((elem) => {
              return (
                <Grid item xs={12}>
                  <Typography component="h1" variant="h6" color="textPrimary" gutterBottom>{elem[0]}</Typography>
                  <Typography component="h1" variant="subtitle2" color="textPrimary" gutterBottom>{elem[1]}</Typography>
                </Grid>
              )
            })
          }
        </Grid>
      </Container>
    </React.Fragment>
  )
}

export default Search 
