import React from "react";
import { Tour } from "./components/Tour";
import { useStyles } from "./Tours.styles";

export const Tours = ({ tourId, tours, favoriteTourId }) => {
  const classes = useStyles();
  return (
    <section>
      <div>
        {tours.map((tour) => {
          return (
            <Tour
              key={tour.id}
              {...tour}
              tourId={tourId}
              favoriteTourId={favoriteTourId}
            />
          );
        })}
      </div>
    </section>
  );
};
