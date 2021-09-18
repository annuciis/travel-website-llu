import React, { useEffect, useState } from "react";
import { Box } from "@mui/material";
import { useStyles } from "./TourPage.styles";
import { AllTours } from "../../utils/Tours";
import { Tours } from "./components/Tours";

export const ToursPage = () => {
  const classes = useStyles();

  const [tours, setTours] = useState([]);

  useEffect(() => {
    setTours(AllTours);
  }, []);

  const removeTour = (id) => {
    const newToursList = tours.filter((tour) => tour.id !== id);
    setTours(newToursList);
  };

  if (tours.length === 0) {
    return (
      <main>
        <div className={classes.title}>
          <h2>no tours left</h2>
          <button
            className={classes.refreshToursButton}
            onClick={() => setTours(AllTours)}
          >
            refresh
          </button>
        </div>
      </main>
    );
  }

  return (
    <Box component="main" className={classes.mainBox}>
      <div className={classes.inlineBox}>
        <Tours tours={tours} tourId={removeTour} />
      </div>
    </Box>
  );
};
