import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles({
  mainBox: {
    backgroundColor: "#f1f5f8",
    flexGrow: 1,
    textAlign: "center",
  },
  inlineBox: {
    width: "90vw",
    maxWidth: "620px",
    margin: "8rem auto 7rem",
  },
  title: {
    marginTop: "8rem",
    marginBottom: "4rem",
    textAlign: "center",
    width: "100vw",
  },
  refreshToursButton: {
    background: "#e22020c2",
    display: "inline-block",
    padding: "0.5rem 1rem",
    borderRadius: "0.25rem",
    textTransform: "capitalize",
    color: "#fff",
    letterSpacing: "0.1rem",
    borderColor: "transparent",
    cursor: "pointer",
    marginTop: "2rem",
    fontSize: "1.2rem",
  },
});
