import { Toolbar, Container, Button } from "@mui/material";
import { AirportShuttle, BeachAccess, Hiking, Park } from "@mui/icons-material";
import { useStyles } from "./TitlePage.styles";
import { Link } from "react-router-dom";

export const TitlePage = () => {
  const classes = useStyles();
  return (
    <main className={classes.mainBox}>
      <section className={classes.titleBox}>
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
      </section>
      <section className={classes.travelTypeBox}>
        <h2>CHOOSE FROM OUR OFFERED TRAVEL TYPES</h2>
        <div>
          <div className={classes.travelTypeItem}>
            <BeachAccess />
          </div>
          <div className={classes.travelTypeItem}>
            <AirportShuttle />
          </div>
          <div className={classes.travelTypeItem}>
            <Hiking />
          </div>
          <div className={classes.travelTypeItem}>
            <Park />
          </div>
        </div>
      </section>
    </main>
  );
};
