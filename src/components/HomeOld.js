import React from 'react'
import { Grid, TextField, Box, Button } from '@mui/material';
import { SendAndArchiveOutlined } from '@mui/icons-material';


function Home() {
    
  return (
    <div>
      <h1>React CRUD with API Call</h1>

      <Grid container spacing={2}>
        
        <Grid item xs={8}>
        <h2 align="center" style={{backgroundColor:"#0bc1b6"}}>Add Student</h2>
        </Grid>
  <Grid item xs={8}>
  <Box
      sx={{
        width: 500,
        maxWidth: '100%',
      }}
    >
      <TextField fullWidth label="fullWidth" id="fullWidth" />
    </Box>

    <Box
      sx={{
        width: 500,
        maxWidth: '100%',
        margin: '8px 0px'
      }}
    >
      <TextField fullWidth label="fullWidth" id="fullWidth" />
   
   
    </Box>

  <Button style={{width:500, maxWidth:"100%"}} variant="contained" endIcon={<SendAndArchiveOutlined />}>
        Send
      </Button>

  </Grid>


  
  <Grid item xs={4}>
  <TextField id="standard-basic" label="Standard" variant="standard" />
  </Grid>
  
    
 
</Grid>



        
    </div>
  )
}

export default Home