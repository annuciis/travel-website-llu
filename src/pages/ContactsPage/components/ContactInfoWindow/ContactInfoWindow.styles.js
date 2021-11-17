import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles({
  infoButton: {
    position: "absolute !important",
    right: 25,
    top: 17,
    "@media screen and (max-width: 740px)": {
      right: 10,
      top: 80,
    },
  },
  modalBox: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "80%",
    backgroundColor: "#fff",
    border: "2px solid #000",
    boxShadow: 24,
    padding: "1rem",
  },
  contactNumberEmailText: {
    marginTop: "1rem",
    display: "inline-block",
    width: "50%",
    textAlign: "center",
    "@media screen and (max-width: 689px)": {
      display: "block",
      width: "100%",
    },
  },
});
