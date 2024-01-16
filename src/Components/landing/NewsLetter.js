import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import image from "../images/newsletter-icon.svg";

const NewsLetter = ({ darkmode }) => {
  return (
    <Box my={"1rem"}>
      <Grid container>
        <Grid item lg={8} sm={8} xs={12}>
          <Box>
            <Box>
              <Typography
                fontSize={{ xs: "20px", sm: "30px", lg: "30px" }}
                fontWeight={"800"}
                color={"#007dff"}
                textAlign={{ xs: "center", sm: "center", lg: "start" }}
              >
                Newsletter!
              </Typography>
              <Typography
                fontSize={{ xs: "26px", sm: "30px", lg: "50px" }}
                fontWeight={"800"}
                color={darkmode ? "white" : "black"}
                textAlign={{ xs: "center", sm: "center", lg: "start" }}
              >
                Subscribe to our Newsletter
              </Typography>
              <Typography
                fontSize={{ xs: "13px", sm: "15px", lg: "18px" }}
                color={darkmode ? "white" : "black"}
                textAlign={{ xs: "center", sm: "center", lg: "start" }}
              >
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard.
              </Typography>
              <Grid container spacing={2} mt={"2rem"}>
                <Grid item lg={8} sm={8} xs={12}>
                  <input
                    className="newsletter-input"
                    placeholder="Enter Email Address"
                  />
                </Grid>
                <Grid item lg={4} sm={4} xs={12}>
                  <button className="newsletter-button">Subscribe Now</button>
                </Grid>
              </Grid>
            </Box>
          </Box>
        </Grid>
        <Grid item lg={4} sm={4} xs={0}>
          <Box display={{ xs: "none", sm: "block" }}>
            <Box position={"relative"}>
              <img
                src={image}
                alt="icon"
                style={{ width: "350px", position: "relative", zIndex: 1 , left: "35px",}}
              />
              <img
                src={image}
                alt="icon"
                style={{
                  width: "200px",
                  position: "absolute",
                  zIndex: 2,
                  top: "120px",
                  left: "-25px",
                }}
              />
              <img
                src={image}
                alt="icon"
                style={{
                  width: "250px",
                  position: "absolute",
                  zIndex: 2,
                  top: "80px",
                  right: "55px",
                }}
              />
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default NewsLetter;
