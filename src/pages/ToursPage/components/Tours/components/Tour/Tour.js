import React, { useState } from "react";
import { useStyles } from "./Tour.styles";

export const Tour = ({
  id,
  image,
  info,
  price,
  name,
  tourId,
  favoriteTourId,
}) => {
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
          <button
            className={classes.expandButton}
            onClick={() => setReadMore(!readMore)}
          >
            {readMore ? "show less" : "read more"}
          </button>
        </p>
        <div className={classes.actionButtons}>
          <button className={classes.deleteButton} onClick={() => tourId(id)}>
            not interested
          </button>
          <button
            id={id}
            className={classes.addButton}
            onClick={(e) => {
              if (
                document.getElementById(e.target.id).style.backgroundColor ===
                "red"
              ) {
                return;
              } else {
                document.getElementById(e.target.id).style.backgroundColor =
                  "red";
                return favoriteTourId(id);
              }
            }}
          >
            add to favorites
          </button>
        </div>
      </footer>
    </article>
  );
};
