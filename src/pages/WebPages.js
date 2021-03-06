import React from "react";
import { Route } from "react-router-dom";
import { ContactsPage } from "./ContactsPage";
import { RatingPage } from "./RatingPage";
import { ReviewsPage } from "./ReviewsPage";
import { TitlePage } from "./TitlePage";
import { ToursPage } from "./ToursPage";

export const WebPages = ({ favoritesState }) => {
  return (
    <React.Fragment>
      <Route exact path="/" component={TitlePage} />
      <Route
        path="/tours"
        render={(props) => (
          <ToursPage {...props} favoritesState={favoritesState} />
        )}
      />
      <Route path="/reviews" component={ReviewsPage} />
      <Route path="/rating" component={RatingPage} />
      <Route path="/contacts" component={ContactsPage} />
    </React.Fragment>
  );
};
