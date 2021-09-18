import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles({
  mainBox: {
    flexGrow: 1,
    textAlign: "center",
    padding: "13vw 0",
  },
  headings: {
    fontFamily: "'Alfa Slab One', cursive",
    color: "white",
    letterSpacing: "1.5px",
    textShadow:
      "-1px 1px 0 #000, 1px 1px 0 #000,1px -1px 0 #000,-1px -1px 0 #000",
  },
  headingMain: {
    fontSize: "clamp(2rem, 9vw, 5rem)",
  },
  headingSecond: {
    fontSize: "clamp(0.75rem, 5vw, 3rem)",
  },
});
