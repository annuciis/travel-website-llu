import { Box, Toolbar, Container } from "@mui/material";
import { useStyles } from "./Content.styles";

export const Content = () => {
  const classes = useStyles();
  return (
    <Box component="main" className={classes.mainBox}>
      <Toolbar />
      <Container maxWidth>
        <div className={classes.headings}>
          <h3 className={classes.headingSecond}> CHECK OUT OUR DEALS </h3>
          <h1 className={classes.headingMain}>TRAVEL WITH US</h1>
        </div>
        <div></div>
      </Container>
    </Box>
  );
};
