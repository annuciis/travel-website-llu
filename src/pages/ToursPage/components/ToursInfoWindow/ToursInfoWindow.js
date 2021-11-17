import React, { useState } from "react";
import { Box, Button, Typography, Modal } from "@mui/material";

import { ToursInfoWindowContent } from "../TourInfoWindowContent";
import { useStyles } from "./ToursInfoWindow.styles";

export const ToursInfoWindow = ({ tours, favoritesState }) => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button
        style={
          favoritesState ? { display: "none" } : { display: "inline-flex" }
        }
        id="tours-info-table"
        className={classes.moreInfoButton}
        onClick={handleOpen}
      >
        More info
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box className={classes.modalWindowStyle}>
          <Typography
            id="modal-modal-title"
            variant="h6"
            component="h2"
            className={classes.tableTitle}
          >
            Information about tours
          </Typography>

          <ToursInfoWindowContent tours={tours} />
        </Box>
      </Modal>
    </div>
  );
};
