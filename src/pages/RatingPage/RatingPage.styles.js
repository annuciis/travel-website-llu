import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles({
  mainBox: {
    width: "100vw",
    textAlign: "center",
    paddingTop: "8rem",
  },
  box: {
    "& > legend": { marginTop: 6, marginBottom: 4 },
    background: "#fff",
    padding: "2.5rem 3rem",
    borderRadius: "0.25rem",
    boxShadow: "0 5px 15px rgba(0, 0, 0, 0.1)",
    width: "85vw",
    margin: "0 auto",
    position: "relative",
    "@media screen and (max-width: 740px)": {
      padding: "3rem 1rem",
      width: "100vw",
    },
  },
  title: {
    margin: "0 auto 2rem",
    textAlign: "center",
  },
  underline: {
    height: "0.25rem",
    width: "5rem",
    background: "#49A6E9",
    marginLeft: "auto",
    marginRight: "auto",
    marginBottom: "2rem",
  },
  sendButton: {
    margin: "3rem auto !important",
    display: "flex !important",
  },
  ratingMessage: {
    padding: "8rem 0",
    textAlign: "center",
  },
});
