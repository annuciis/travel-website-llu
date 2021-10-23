import React, { useEffect, useState } from "react";
import { Typography, Rating, Box, Button, Modal } from "@mui/material";
import { useStyles } from "./RatingPage.styles";
import { Send } from "@mui/icons-material";

const modalStyle = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "40vw",
  bgcolor: "background.paper",
  border: "2px solid #000",
  display: "grid",
  placeItems: "center",
  margin: "0 auto",
  boxShadow: 24,
  p: 4,
};

export const RatingPage = () => {
  const classes = useStyles();

  const [websiteValue, setWebsiteValue] = useState(0);
  const [offerValue, setOfferValue] = useState(0);
  const [staffValue, setStaffValue] = useState(0);

  const [isRated, setIsRated] = useState(false);

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  useEffect(() => {
    if (isRated) {
      const timer = setTimeout(() => {
        setIsRated(false);
        setWebsiteValue(0);
        setOfferValue(0);
        setStaffValue(0);
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [isRated]);

  if (isRated) {
    return (
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={modalStyle}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Thanks for your opinion!
          </Typography>
          <Button
            className={classes.modalButton}
            variant="contained"
            onClick={() => {
              setIsRated(false);
              setWebsiteValue(0);
              setOfferValue(0);
              setStaffValue(0);
            }}
          >
            Close
          </Button>
        </Box>
      </Modal>
    );
  }

  const checkValues = () => {
    if (websiteValue != 0 && offerValue != 0 && staffValue != 0) {
      setIsRated(true);
      handleOpen();
    }
  };

  return (
    <Box className={classes.mainBox}>
      <h2 className={classes.title}>Rate us </h2>
      <div className={classes.underline}></div>
      <div className={classes.box}>
        <Typography component="legend">Webpage</Typography>
        <Rating
          name="simple-controlled"
          max={10}
          value={websiteValue}
          onChange={(event, newValue) => {
            setWebsiteValue(newValue);
          }}
        />
        <Typography component="legend">Offer</Typography>
        <Rating
          name="simple-controlled"
          max={10}
          value={offerValue}
          onChange={(event, newValue) => {
            setOfferValue(newValue);
          }}
        />
        <Typography component="legend">Staff</Typography>
        <Rating
          name="simple-controlled"
          max={10}
          value={staffValue}
          onChange={(event, newValue) => {
            setStaffValue(newValue);
          }}
        />
      </div>
      <Button
        onClick={checkValues}
        className={classes.sendButton}
        variant="contained"
        endIcon={<Send />}
      >
        Send
      </Button>
    </Box>
  );
};
