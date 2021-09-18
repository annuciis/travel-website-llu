import React, { useEffect, useState } from "react";
import { reviews } from "../../../utils/Reviews";
import { ChevronLeft, ChevronRight } from "@mui/icons-material";

export const Review = () => {
  const [ID, setID] = useState(1);
  const [card, setCard] = useState();

  useEffect(() => {
    const getCard = () => {
      if (ID > reviews.length) {
        setID(1);
      }

      if (ID <= 0) {
        setID(reviews.length);
      }

      const currentPerson = reviews.filter((person) => person.id === ID);
      return currentPerson[0];
    };

    setCard(getCard);

    const interval = setInterval(() => {
      setID(ID + 1);
    }, 8000);
    return () => clearInterval(interval);
  }, [ID]);

  if (card) {
    return (
      <article className="review">
        <div className="img-container">
          <img src={card.image} alt={card.name} className="person-img" />
          {/* <span className="quote-icon">
            <FaQuoteRight />
          </span> */}
        </div>
        <h4 className="author">{card.name}</h4>
        <p className="country">{card.country}</p>
        <p className="info">{card.text}</p>
        <div className="button-container">
          <button className="prev-btn" onClick={() => setID(ID - 1)}>
            <ChevronLeft />
          </button>
          <button className="next-btn" onClick={() => setID(ID + 1)}>
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
