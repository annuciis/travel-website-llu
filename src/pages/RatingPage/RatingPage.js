import React, { useEffect, useState } from "react";
import { Typography, Rating, Box, Button, Modal } from "@mui/material";
import { useStyles } from "./RatingPage.styles";
import { Send } from "@mui/icons-material";
import { RatingModal } from "./components";

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

  const handleClick = () => {
    setIsRated(false);
    setWebsiteValue(0);
    setOfferValue(0);
    setStaffValue(0);
  };

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
      {isRated && (
        <RatingModal
          open={open}
          handleClose={handleClose}
          handleClick={handleClick}
        />
      )}
    </Box>
  );
};
