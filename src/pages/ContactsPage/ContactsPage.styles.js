import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles({
  main: {
    display: "grid",
    placeItems: "center",
    margin: "0 auto",
    "@media screen and (max-width: 740px)": {},
  },
  section: {
    background: "#fff",
    padding: "3rem",
    borderRadius: "0.25rem",
    boxShadow: "0 5px 15px rgba(0, 0, 0, 0.1)",
    width: "85vw",
    position: "relative",
    "@media screen and (max-width: 740px)": {
      width: "100vw",
      height: "100vh",
      padding: "15vh 1rem 2rem",
    },
  },
  header: {
    marginBottom: "2.5vh",
  },
  title: {
    marginBottom: "2.5vh",
    "@media screen and (min-width: 500px)": {
      fontSize: "2.3rem",
    },
  },
});
