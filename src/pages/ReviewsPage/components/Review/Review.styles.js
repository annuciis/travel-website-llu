import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles({
  review: {
    background: "#fff",
    padding: "1.5rem 2rem",
    borderRadius: "0.25rem",
    boxShadow: "0 5px 15px rgba(0, 0, 0, 0.1)",
    transition: "all 0.3s linear",
    textAlign: "center",
  },

  imgContainer: {
    position: "relative",
    width: 150,
    height: 150,
    borderRadius: "50%",
    margin: "0 auto",
    marginBottom: "1.5rem",
  },

  personImg: {
    width: "100%",
    display: "block",
    height: "100%",
    objectFit: "cover",
    borderRadius: "50%",
  },
  author: {
    marginBottom: "0.25rem",
  },
  country: {
    marginBottom: "0.5rem",
    textTransform: "uppercase",
    color: "#49A6E9",
    fontSize: "0.85rem",
  },
  reviewText: {
    marginBottom: "0.75rem",
  },
  switchButton: {
    color: "#8BCBF9",
    fontSize: "1.25rem",
    background: "transparent",
    borderColor: "transparent",
    margin: "0 0.5rem",
    transition: "all 0.3s linear",
    cursor: "pointer",

    "&:hover": {
      color: "#49A6E9",
    },
  },
});
