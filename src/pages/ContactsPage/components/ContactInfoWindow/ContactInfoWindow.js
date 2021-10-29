import React, { useState } from "react";
import { Box, Button, Modal, Typography } from "@mui/material";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "80%",
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const contactNumberEmailStyle = {
  marginTop: "1rem",
  display: "inline-block",
  width: "50%",
  textAlign: "center",
  "@media screen and (max-width: 689px)": {
    display: "block",
    width: "100%",
  },
};

export const ContactInfoWindow = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button
        sx={{
          position: "absolute",
          right: 25,
          top: 17,
          "@media screen and (max-width: 740px)": {
            right: 10,
            top: 80,
          },
        }}
        onClick={handleOpen}
      >
        Information
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2175.4804107249765!2d24.10535841594889!3d56.957702880892725!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46eecfc516d1f367%3A0x76c0a40a2ae592d5!2sKalpaka%20bulv%C4%81ris%2C%20Centra%20rajons%2C%20R%C4%ABga%2C%20LV-1010!5e0!3m2!1slv!2slv!4v1635538055368!5m2!1slv!2slv"
            width="100%"
            height="350"
            allowfullscreen=""
            loading="lazy"
          ></iframe>
          <Typography sx={contactNumberEmailStyle}>
            <b>Phone:</b> +371 27785333
          </Typography>
          <Typography sx={contactNumberEmailStyle}>
            <b>Email:</b> tripv@gmail.com
          </Typography>
        </Box>
      </Modal>
    </div>
  );
};
