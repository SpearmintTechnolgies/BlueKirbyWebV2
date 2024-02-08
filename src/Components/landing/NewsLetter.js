import React, { useState } from "react";
import { Box, Grid, Typography } from "@mui/material";
import image from "../images/newsletter-icon.svg";
import axios from "axios";
import { SERVER_URL } from "../../config";

const NewsLetter = ({ darkmode }) => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (email.length !== 0) {
      // Retrieve emails array from localStorage or initialize it if it doesn't exist
      const storedEmailsJSON = localStorage.getItem("emails");
      const storedEmails = storedEmailsJSON ? JSON.parse(storedEmailsJSON) : [];

      // Check if the email already exists in the stored emails array
      if (storedEmails.includes(email)) {
        setError("A confirmation mail was already sent or already confirmed. Please check!");
        setMessage(false);
      } else {
        // Store the email in the stored emails array
        const updatedEmails = [...storedEmails, email];
        localStorage.setItem("emails", JSON.stringify(updatedEmails));

        setMessage(true);
        setError("");
        setTimeout(() => {
          setMessage(false);
        }, 15000);

        try {
          // Send confirmation email
          const response = await axios.post(
            `${SERVER_URL}.app/sendConfirmationEmail`,
            {
              email,
            },
            {
              headers: {
                "Content-Type": "application/json",
              },
            }
          );
          console.log(response.data);
        } catch (error) {
          console.error("Error sending confirmation email:", error);
          // Handle error, show error message, etc.
        }
      }
    } else {
      // Handle case where email is empty
    }
  };

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

              <form onSubmit={handleSubmit}>
                <Grid container spacing={2} mt={"2rem"}>
                  <Grid item lg={8} sm={8} xs={12}>
                    {message ? (
                      <Typography color={darkmode ? "white" : "black"}>
                        A confirmation mail has been sent, make sure to check
                        spam/junk.
                      </Typography>
                    ) : error ? (
                      <Typography color={darkmode ? "white" : "black"}>
                        {error}
                      </Typography>
                    ) : (
                      <div style={{ height: "21px" }}></div>
                    )}

                    <input
                      className="newsletter-input"
                      placeholder="Enter Email Address"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      type="email"
                    />
                  </Grid>
                  <Grid item lg={4} sm={4} xs={12}>
                    <button
                      className="newsletter-button"
                      type="submit"
                      style={{ marginTop: "22px" }}
                    >
                      Subscribe Now
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
