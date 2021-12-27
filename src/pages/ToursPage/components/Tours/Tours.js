import React from "react";
import { Tour } from "../Tour";

export const Tours = ({ tourId, tours, favoriteTourId }) => {
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
