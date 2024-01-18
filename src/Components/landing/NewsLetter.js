import React from "react";
import { Box, Grid, Typography } from "@mui/material";
import image from "../images/newsletter-icon.svg";
import useNewsletterSubscription from "../../hooks/useNewsletterSubscription";
import Snackbar from "@mui/material/Snackbar";

const apiKey =
  "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";
const listId = 3;

const NewsLetter = ({ darkmode }) => {
  // Use the custom hook
  const { email, setEmail, isMail, isLoading, error, handleSubmit } =
    useNewsletterSubscription();

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
                Subscribe To Kirby’s Newsletter
              </Typography>
              <Typography
                fontSize={{ xs: "13px", sm: "15px", lg: "18px" }}
                color={darkmode ? "white" : "black"}
                textAlign={{ xs: "center", sm: "center", lg: "start" }}
              >
                Seize the unparalleled advantages of early insights and stay
                steps ahead of the game with Kirby's exclusive updates.
              </Typography>

              <form onSubmit={(e) => handleSubmit(e, listId, apiKey)}>
                <Grid container spacing={2} mt={"2rem"}>
                  <Grid item lg={8} sm={8} xs={12}>
                    {isMail ? (
                      <Typography color={"red"}>
                        Please enter email address
                      </Typography>
                    ) : error?.message ===
                      "Contact email addresses are invalid/ not in valid format" ? (
                      <Typography color={"red"} fontSize={"14px"}>
                        Please input email in a correct format
                      </Typography>
                    ) : error?.message ===
                      "Contact already in list and/or does not exist" ? (
                      <Typography color={"red"} fontSize={"14px"}>
                        Either this email has already subscribed or it doesn't
                        exist
                      </Typography>
                    ) : (
                      <Typography color={"white"}>Enter email address here</Typography>
                    )}

                    <input
                      className="newsletter-input"
                      placeholder="Enter Email Address"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </Grid>
                  <Grid item lg={4} sm={4} xs={12}>
                    <button
                      className="newsletter-button"
                      type="submit"
                      style={{ marginTop: "22px" }}
                    >
                      {isLoading ? "Subscribing..." : "Subscribe Now"}
                    </button>
                  </Grid>
                </Grid>
              </form>
            </Box>
          </Box>
        </Grid>
        <Grid item lg={4} sm={4} xs={0}>
          <Box display={{ xs: "none", sm: "block" }}>
            <Box position={"relative"}>
              <img
                src={image}
                alt="icon"
                style={{
                  width: "350px",
                  position: "relative",
                  zIndex: 1,
                  left: "35px",
                }}
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
