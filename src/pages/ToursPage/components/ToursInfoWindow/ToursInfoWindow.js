import React, { useState } from "react";
import { Box, Button, Typography, Modal } from "@mui/material";

import { ToursInfoWindowContent } from "./components/TourInfoWindowContent";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "90vw",
  bgcolor: "background.paper",
  border: "2px solid #000",
  display: "grid",
  placeItems: "center",
  margin: "0 auto",
  boxShadow: 24,
  p: 4,
};

export const ToursInfoWindow = ({ tours }) => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button
        sx={{ position: "absolute", right: 35, top: 80 }}
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
        <Box sx={style}>
          <Typography
            id="modal-modal-title"
            variant="h6"
            component="h2"
            sx={{ marginBottom: "1rem" }}
          >
            Information about tours
          </Typography>

          <ToursInfoWindowContent tours={tours} />
        </Box>
      </Modal>
    </div>
  );
};
