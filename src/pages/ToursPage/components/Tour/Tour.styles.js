import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles({
  singleTour: {
    margin: "2rem 0",
    background: "#ffffff",
    borderRadius: "0.25rem",
    boxShadow: "0 5px 15px rgba(0, 0, 0, 0.1)",
    transition: "all 0.3s linear",

    "& img": {
      width: "100%",
      height: "20rem",
      objectFit: "cover",
      borderTopRightRadius: "0.25rem",
      borderTopLeftRadius: "0.25rem",
    },

    "& button": {
      background: "transparent",
      borderColor: "transparent",
      textTransform: "capitalize",
      color: "#49A6E9",
      fontSize: "1rem",
      cursor: "pointer",
      paddingLeft: "0.25rem",
    },
    "& footer": {
      padding: "1.5rem 2rem",
    },
  },
  tourInfo: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: "1.5rem",

    "& h4": {
      marginBottom: 0,
    },
  },
  tourPrice: {
    color: "#49A6E9",
    background: "#EBF7FF",
    padding: "0.25rem 0.5rem",
    bordeRadius: "0.25rem",
  },

  deleteButton: {
    display: "block",
    width: 200,
    margin: "1rem auto 0 auto",
    color: "#da4748",
    letterSpacing: "0.1rem",
    background: "transparent",
    border: "1px solid #da4748",
    padding: "0.25rem 0.5rem",
    borderRadius: "0.25rem",
  },
});
