import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles({
  modalWindowStyle: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "90vw",
    backgroundColor: "#fff",
    border: "2px solid #000",
    display: "grid",
    placeItems: "center",
    margin: "0 auto",
    boxShadow: 24,
    padding: "1rem",
  },
  moreInfoButton: { position: "absolute !important", right: 35, top: 80 },
  tableTitle: { marginBottom: "1rem" },
});
