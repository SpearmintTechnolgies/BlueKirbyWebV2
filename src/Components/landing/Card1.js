import { Box, Container, Grid } from "@mui/material";
import React from "react";
import heromaindark from "../../images/hero-main-dark.png";
import heromainlight from "../../images/hero-main-light.png";

const Herosection = ({ darkmode }) => {
  return (
    <Box mt={"2rem"}>
      <Container maxWidth="xl">
        <Grid container spacing={2}>
          <Grid item xs={12} sm={12} lg={9}>
            <Box display={'flex'} justifyContent={'center'} alignItems={'center'} p={'2rem'}>
              <img src={darkmode ? heromaindark : heromainlight} alt="main" className="w-full" /> 
            </Box>
          </Grid>
          <Grid item xs={12} sm={12} lg={3}>
            hallo
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Herosection;
