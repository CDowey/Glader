import React, { useState } from 'react'
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import '../css/App.css';
import Map from './Map';

const App = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2} justifyContent="center">
        <Grid item xs={8}>
          <Map />
        </Grid>
      </Grid>
    </Box>
  );
}

export default App;
