import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { Grid } from "@mui/material";

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
  

export default function NewsLetterModal({ open, setOpen ,darkmode}) {
  const handleClose = () => setOpen(false);

  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={{ ...style, transition: "all 200ms ease-in" }} className="from-top">
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
          Subscribe to our Newsletter
        </Typography>
        <Grid container spacing={2} mt={"2rem"}>
          <Grid item lg={12} sm={12} xs={12}>
            <input
              className="newsletter-input"
              placeholder="Enter Email Address"
            />
          </Grid>
          <Grid item lg={12} sm={12} xs={12}>
            <button className="newsletter-button" style={{ width: "100%" }}>
              Subscribe Now
            </button>
          </Grid>
        </Grid>
      </Box>
    </Modal>
  );
}
