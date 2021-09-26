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
      textTransform: "capitalize",
      background: "transparent",
      fontSize: "1rem",
      cursor: "pointer",
      paddingLeft: "0.25rem",
    },
    "& footer": {
      padding: "1.5rem 2rem",
    },
  },
  expandButton: {
    borderColor: "transparent",
    color: "#49A6E9",
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
  actionButtons: {
    "& button": {
      width: 200,
      letterSpacing: "0.1rem",
      padding: "0.25rem 0.5rem",
      borderRadius: "0.25rem",
      marginRight: "1rem",
      marginBottom: "0.6rem",
    },
  },
  deleteButton: {
    color: "#da4748",
    border: "1px solid #da4748",
  },
  addButton: {
    color: "#2e8953",
    border: "1px solid #2e8953",
  },
});
