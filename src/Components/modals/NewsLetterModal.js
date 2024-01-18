import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { Grid, IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import useNewsletterSubscription from "../../hooks/useNewsletterSubscription";

const apiKey =
  "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";
const listId = 3;

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

  // Use the custom hook
  const { email, setEmail, isMail, isLoading, error, handleSubmit } =
    useNewsletterSubscription();

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
        <form onSubmit={(e) => handleSubmit(e, listId, apiKey)}>
          <Grid container spacing={2} mt={"2rem"}>
            <Grid item lg={12} sm={12} xs={12}>
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
                  Either this email has already subscribed or it doesn't exist
                </Typography>
              ) : (
                <Typography color={"red"}></Typography>
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
                disabled={isLoading}
              >
                {isLoading ? "Subscribing..." : "Subscribe Now"}
              </button>
            </Grid>
          </Grid>
        </form>
      </Box>
    </Modal>
  );
}
