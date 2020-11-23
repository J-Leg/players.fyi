import Box from '@material-ui/core/Box'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper';
import { TooltipProps, TooltipPayload } from 'recharts'
import { makeStyles, Theme } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme: Theme) => ({
  tooltip: {
    background: '#000000',
    color: theme.palette.text.secondary,
    borderRadius: 16, 
    padding: 18,
    opacity: 0.75,
    maxWidth: '400px',
    alignItems: 'center',
  },
  paper: {
    textAlign: 'right',
  },
  typography: {
    paddingBottom: 8,
  }
}));

const CustomTooltip: any = function (props: TooltipProps): any {
  if (!props.active) { return null }
  const { payload, label } = props
  const classes = useStyles()

  // Sort in descending order
  const sortedPayload: TooltipPayload[] = payload.slice().sort((a, b) => {
    // Type assertion to keep compiler happy
    let aVal = a.value as number
    let bVal = b.value as number
    return bVal - aVal
  });

  return (
    <Box boxShadow={3} className={classes.tooltip}>
      <Typography className={classes.typography}>{label}</Typography>
      <Grid container spacing={1}>
        {
          sortedPayload.map((elem) => {
            return (
              <Grid container spacing={1}>
                <Grid item xs={10}>{elem.name}</Grid>
                <Grid item xs={2}>
                  <div className={classes.paper}>{elem.value}</div>
                </Grid>
              </Grid>
            )
          })
        }
      </Grid>
    </Box>
  );
}

export default CustomTooltip
