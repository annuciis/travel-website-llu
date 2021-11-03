import { Modal, Box, Typography, Button } from "@mui/material";
import { useStyles } from "./RatingModalWindow.styles";

export const RatingModal = ({ open, handleClose, handleClick }) => {
  const classes = useStyles();
  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box className={classes.modalWindow}>
        <Typography id="modal-modal-title" variant="h6" component="h2">
          Thanks for your opinion!
        </Typography>
        <Button
          className={classes.modalButton}
          variant="contained"
          onClick={handleClick}
        >
          Close
        </Button>
      </Box>
    </Modal>
  );
};
