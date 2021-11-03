import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles({
  modalWindow: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "40vw",
    backgroundColor: "#fff",
    border: "2px solid #000",
    display: "grid",
    placeItems: "center",
    margin: "0 auto",
    boxShadow: 24,
    padding: "1rem",
  },
  modalButton: {
    marginTop: "1rem !important",
  },
});
