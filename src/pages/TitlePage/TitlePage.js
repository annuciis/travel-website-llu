import { Toolbar, Container, Button } from "@mui/material";
import { useStyles } from "./TitlePage.styles";
import { Link } from "react-router-dom";

export const TitlePage = () => {
  const classes = useStyles();
  return (
    <main className={classes.mainBox}>
      <Toolbar />
      <Container
        sx={{ paddingLeft: 0, display: "table-cell" }}
        maxWidth
        className={classes.inlineBox}
      >
        <div className={classes.headings}>
          <h3 className={classes.headingSecond}> CHECK OUT OUR DEALS </h3>
          <h1 className={classes.headingMain}>TRAVEL WITH US</h1>
        </div>
        <div className={classes.exploreNowButton}>
          <Link to="/tours">
            <Button size="large" variant="contained" color="primary">
              Explore now
            </Button>
          </Link>
        </div>
      </Container>
    </main>
  );
};
