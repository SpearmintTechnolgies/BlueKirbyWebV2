import React, { useState } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { Grid, IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import axios from "axios";

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

  const handlSubmit = async (e) => {
    e.preventDefault();
    if (email.length !== 0) {
      setMessage(true);
      setTimeout(() => {
        setMessage(false);
      }, 3000);

      const response = await axios.post(
        `https://kirby-test-api.vercel.app/sendConfirmationEmail`,
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
    } else {
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
        <form onSubmit={handlSubmit}>
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
                  A confirmation message send to you mail.
                </div>
              )}
              <input
                className="newsletter-input"
                placeholder="Enter Email Address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
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
