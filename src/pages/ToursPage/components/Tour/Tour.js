import React, { useState } from "react";
import { useStyles } from "./Tour.styles";

export const Tour = ({ id, image, info, price, name, tourId }) => {
  const classes = useStyles();
  const [readMore, setReadMore] = useState(false);

  return (
    <article className={classes.singleTour}>
      <img classes={classes} src={image} alt={name} />
      <footer>
        <div className={classes.tourInfo}>
          <h4>{name}</h4>
          <h4 className={classes.tourPrice}>$ {price}</h4>
        </div>
        <p>
          {readMore ? info : `${info.substring(0, 200)}...`}
          <button onClick={() => setReadMore(!readMore)}>
            {readMore ? "show less" : "read more"}
          </button>
        </p>
        <button className={classes.deleteButton} onClick={() => tourId(id)}>
          not interested
        </button>
      </footer>
    </article>
  );
};
