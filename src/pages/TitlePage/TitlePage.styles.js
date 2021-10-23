import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles({
  mainBox: {
    flexGrow: 1,
    textAlign: "center",
    display: "table",
  },
  titleBox: {
    verticalAlign: "middle",
    paddingTop: "30vh",
    paddingBottom: "30vh",
    height: "100vh",
    backgroundImage:
      "url(https://youmatter.world/app/uploads/sites/2/2019/11/travel-world.jpg)",
    backgroundSize: "cover",
  },
  headings: {
    fontFamily: "'Alfa Slab One', cursive",
    color: "white",
    letterSpacing: "1.5px",
    textShadow:
      "-1px 1px 0 #000, 1px 1px 0 #000,1px -1px 0 #000,-1px -1px 0 #000",
  },
  exploreNowButton: {
    marginTop: "3rem",
    "@media screen and (max-width: 619px)": {
      marginTop: "5rem",
    },
  },
  travelTypeBox: {
    position: "relative",
    minHeight: "100vh",
    alignItems: "center",
    justifyContent: "center",

    "&::before": {
      content: "''",
      backgroundImage:
        "url(https://images.pexels.com/photos/2090645/pexels-photo-2090645.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940)",
      backgroundSize: "cover",
      position: "absolute",
      opacity: "0.69",
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
    },

    backgroundColor: "#0a97a19e",
    padding: "5rem 0 5rem",
    "& h2": {
      fontFamily: "'Alfa Slab One', cursive",
      letterSpacing: "1.5px",
      textShadow:
        "-1px 1px 0 #000, 1px 1px 0 #000,1px -1px 0 #000,-1px -1px 0 #000",
      color: "white",
      position: "relative",
      marginBottom: "4rem",
    },
  },
  travelTypeItem: {
    width: "49vw",
    position: "relative",
    display: "inline-block",
    padding: "3rem 0 3rem",
    "& svg": {
      width: "5em",
      height: "5em",
      filter: "drop-shadow(3px 3px 3px #000)",
      color: "white",
    },
  },
});
