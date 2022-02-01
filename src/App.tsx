import React from 'react';
import './App.css';
import Box from './component/Box/Box';
import Grid from './component/Grid/Grid';
import GridRuler from './component/GridRuler/GridRuler'

function App() {
  return (
    <div className="App" style={{ margin: '16px', position:"relative", height:"100vh" }}>
      <GridRuler spacing="sm" ></GridRuler>
      <Grid container spacing="sm" justifyContent="space-around" alignItems="center" style={{height:"100%"}}>
        <Grid item xs={1} sm={6} md={4} lg={3}>
          <Box>Box 1</Box>
        </Grid>
        <Grid item xs={1} sm={6} md={4} lg={3}>
          <Box>Box 2</Box>
        </Grid>
        <Grid item xs={1} sm={6} md={4} lg={3}>
          <Box>Box 3</Box>
        </Grid>
        <Grid item xs={1} sm={6} md={4} lg={3}>
          <Box>Box 3</Box>
        </Grid>

      </Grid>
    </div>
  );
}

export default App;
