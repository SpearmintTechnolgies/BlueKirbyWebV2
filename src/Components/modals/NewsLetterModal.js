import React, { useState } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { Grid, IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import useNewsletterSubscription from "../../hooks/useSendInblue";
import { API_KEY, LIST_ID } from "../../config";
import usePostEmailApi from "../../hooks/useSendMail";

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
  const [email, setEmail] = useState("");
  const { loading, error, response, postEmail } = usePostEmailApi();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (email.length === 0) return false;
    await postEmail(email);
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
        <form onSubmit={(e) => handleSubmit(e)}>
          <Grid container spacing={2} mt={"2rem"}>
            <Grid item lg={12} sm={12} xs={12}>
              {response && <Typography>{response}</Typography>}
              {error && <Typography>{error}</Typography>}

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
                disabled={loading}
              >
                {loading ? "Subscribing..." : "Subscribe Now"}
              </button>
            </Grid>
          </Grid>
        </form>
      </Box>
    </Modal>
  );
}
