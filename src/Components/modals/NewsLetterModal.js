import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { Grid, IconButton } from "@mui/material";
import axios from "axios";
import CloseIcon from "@mui/icons-material/Close";

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
  const [email, setEmail] = React.useState("");
  const [isMail, setIsmail] = React.useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    email.length === 0 ? setIsmail(true) : setIsmail(false);
    try {
      await axios.post("http://localhost:3001/send-email", { email });
      alert("Email sent successfully!");
    } catch (error) {
      console.error("Error sending email:", error);
      alert("Error sending email. Please try again.");
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
        <Box position={"absolute"} top={"10px"} right={"10px"}>
          <IconButton onClick={handleClose}>
          <CloseIcon fontSize="medium" />
          </IconButton>
        </Box>
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
        <form onSubmit={handleSubmit}>
          <Grid container spacing={2} mt={"2rem"}>
            <Grid item lg={12} sm={12} xs={12}>
              {isMail && (
                <Typography color={"red"}>
                  Please enter email address
                </Typography>
              )}

              <input
                className="newsletter-input"
                placeholder="Enter Email Address"
                value={email}
                // type="email"
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
