import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles({
  main: {
    minHeight: "100vh",
    display: "grid",
    placeItems: "center",
    margin: "0 auto",
  },
  container: {
    width: "80vw",
    maxWidth: 620,
  },
  title: {
    textAlign: "center",
    marginBottom: "4rem",
  },
  underline: {
    height: "0.25rem",
    width: "5rem",
    background: "#49A6E9",
    marginLeft: "auto",
    marginRight: "auto",
  },
});
