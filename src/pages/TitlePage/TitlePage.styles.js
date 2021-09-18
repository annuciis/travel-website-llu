import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles({
  mainBox: {
    flexGrow: 1,
    textAlign: "center",
    backgroundImage:
      "url(https://youmatter.world/app/uploads/sites/2/2019/11/travel-world.jpg)",
    backgroundSize: "cover",
    display: "table",
  },
  inlineBox: {
    verticalAlign: "middle",
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
});
