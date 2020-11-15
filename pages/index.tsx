import React from 'react';
import Container from '@material-ui/core/Container';

import Splash from '../components/splash';
import Baseline from '../components/baseline';

function Home(){
  return (
    <React.Fragment>
      <Baseline/> 
      <main>
        <div/>
          <Container maxWidth="lg">
            <Splash />
          </Container>
      </main>
    </React.Fragment>
  )
}

export default Home
