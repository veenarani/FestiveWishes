import React from 'react'
import CssBaseline from '@material-ui/core/CssBaseline'
import BackgroundFirework from './BackgroundFirework'
import '../../src/css/component.scss'

export default function MainContainer () {
  return (

    <React.Fragment>
      <CssBaseline />
      <BackgroundFirework></BackgroundFirework>

      {/* <Container maxWidth="sm" style={{ backgroundColor: '#cfe8fc', height: '100vh' }}>
        <Paper className={classes.paper} mt={20}>
        <Grid container wrap="nowrap" spacing={2}>
          <Grid item>
            <Avatar>W</Avatar>
          </Grid>
          <Grid item xs>
            <Typography>{message}</Typography>
          </Grid>
        </Grid>
      </Paper>
      <Tree/>
      </Container> */}
    </React.Fragment>
  )
}
