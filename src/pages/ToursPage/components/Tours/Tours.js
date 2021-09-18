import React from "react";
import { Tour } from "../Tour";
import { useStyles } from "./Tours.styles";

export const Tours = ({ tourId, tours }) => {
  const classes = useStyles();
  return (
    <section>
      <div>
        {tours.map((tour) => {
          return <Tour key={tour.id} {...tour} tourId={tourId} />;
        })}
      </div>
    </section>
  );
};
