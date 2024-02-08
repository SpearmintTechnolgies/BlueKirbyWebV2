import React, { useState } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { Grid, IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import axios from "axios";
import { SERVER_URL } from "../../config";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "white",
  boxShadow: 24,
  p: 4,
  borderRadius: "10px",
  border: "none",
};

export default function NewsLetterModal({ open, setOpen, darkmode }) {
  const handleClose = () => setOpen(false);
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
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box
        sx={{ ...style, transition: "all 200ms ease-in" }}
        className="from-top"
        position={"relative"}
      >
        <IconButton
          onClick={handleClose}
          sx={{ position: "absolute", right: "10px", top: "10px" }}
        >
          <CloseIcon fontSize="medium" />
        </IconButton>
        <Typography
          textAlign={"center"}
          fontSize={"30px"}
          fontWeight={800}
          color={"#007bff"}
        >
          Newsletter!
        </Typography>
        <Typography
          textAlign={"center"}
          fontSize={"20px"}
          fontWeight={800}
          color={"black"}
        >
          Grab opportunities at first
        </Typography>
        <form onSubmit={handleSubmit}>
          <Grid container spacing={2} mt={"2rem"}>
            <Grid item lg={12} sm={12} xs={12}>
              {message && (
                <div
                  style={{
                    width: "100%",
                    height: "60px",
                    backgroundColor: "yellow",
                    padding: "10px",
                  }}
                >
                  A confirmation mail has been sent, make sure to check
                  spam/junk.
                </div>
              )}
              {error && (
                <div
                  style={{
                    width: "100%",
                    height: "60px",
                    backgroundColor: "yellow",
                    padding: "10px",
                  }}
                >
                  {error}
                </div>
              )}
              <input
                className="newsletter-input"
                placeholder="Enter Email Address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                type="email"
              />
            </Grid>
            <Grid item lg={12} sm={12} xs={12}>
              <button
                className="newsletter-button"
                style={{ width: "100%" }}
                type="submit"
              >
                Subscribe Now
              </button>
            </Grid>
          </Grid>
        </form>
      </Box>
    </Modal>
  );
}
