import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles({
  footer: {
    bottom: 0,
    width: "100%",
    backgroundColor: "#49a6ed",
    position: "absolute",
    padding: "10px 0",

    "& div": {
      paddingLeft: 20,
      maxWidth: "100vw",
    },
    "@media screen and (max-width: 400px)": {
      height: "80px",
    },
  },
  copyrightText: {
    width: "50%",
    display: "inline-block",
    padding: "0px !important",
    "@media screen and (max-width: 400px)": {
      display: "block",
      textAlign: "center",
      width: "100%",
    },
  },
  iconBox: {
    display: "inline-block",
    position: "absolute",
    right: 20,
    "@media screen and (max-width: 400px)": {
      display: "block",
      width: "100%",
      textAlign: "center",
      marginTop: 10,
    },
  },
  icon: {
    padding: "0 10px",
    color: "#145493",

    "@media screen and (max-width: 400px)": {
      padding: "0 20px",
    },
  },
});
