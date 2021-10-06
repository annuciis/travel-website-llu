import React, { useEffect, useState } from "react";
import { useStyles } from "./TourPage.styles";
import { AllTours } from "../../utils/Tours";
import { Tours } from "./components/Tours";
import { ToursInfoWindow } from "./components/ToursInfoWindow";

export const ToursPage = ({ favoritesState }) => {
  const classes = useStyles();

  const [tours, setTours] = useState([]);
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    setTours(AllTours);
  }, []);

  const removeTour = (id) => {
    const newToursList = tours.filter((tour) => tour.id !== id);
    setTours(newToursList);
    const newFavorites = favorites.filter((tour) => tour.id !== id);
    setFavorites(newFavorites);
  };

  const addToFavorite = (id) => {
    const newFavoriteTour = tours.find((tour) => tour.id === id);
    setFavorites([...favorites, newFavoriteTour]);
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
    <main className={classes.mainBox}>
      <div className={classes.inlineBox}>
        <ToursInfoWindow tours={tours} />
        <Tours
          tours={favoritesState ? favorites : tours}
          favoriteTourId={addToFavorite}
          tourId={removeTour}
        />
      </div>
    </main>
  );
};
