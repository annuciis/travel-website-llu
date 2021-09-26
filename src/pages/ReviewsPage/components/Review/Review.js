import React, { useEffect, useState } from "react";
import { reviews } from "../../../../utils/Reviews";
import { ChevronLeft, ChevronRight } from "@mui/icons-material";
import { useStyles } from "./Review.styles";

export const Review = () => {
  const classes = useStyles();

  const [ID, setID] = useState(1);
  const [card, setCard] = useState(reviews[0]);

  const getCard = () => {
    if (ID > reviews.length) {
      setID(1);
      setCard(reviews[0]);
    }

    if (ID <= 0) {
      setID(reviews.length);
      setCard(reviews[reviews.length - 1]);
    }

    const currentPerson = reviews.filter((person) => person.id === ID);
    return currentPerson[0];
  };

  useEffect(() => {
    setCard(getCard);
    const interval = setInterval(() => {
      setID(ID + 1);
    }, 8000);
    return () => clearInterval(interval);
  }, [ID]);

  if (card) {
    return (
      <article className={classes.review}>
        <div className={classes.imgContainer}>
          <img src={card.image} alt={card.name} className={classes.personImg} />
        </div>
        <h4 className={classes.author}>{card.name}</h4>
        <p className={classes.country}>{card.country}</p>
        <p className={classes.reviewText}>{card.text}</p>
        <div>
          <button
            className={classes.switchButton}
            onClick={() => setID(ID - 1)}
          >
            <ChevronLeft />
          </button>
          <button
            className={classes.switchButton}
            onClick={() => setID(ID + 1)}
          >
            <ChevronRight />
          </button>
        </div>
      </article>
    );
  }

  return (
    <>
      <div>
        <h2>No cards found </h2>
      </div>
    </>
  );
};
