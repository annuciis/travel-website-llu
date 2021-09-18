import React from "react";
import { Route } from "react-router-dom";
import { ReviewsPage } from "./ReviewsPage";

import { TitlePage } from "./TitlePage";
import { ToursPage } from "./ToursPage";

export const WebPages = () => {
  return (
    <React.Fragment>
      <Route exact path="/" component={TitlePage} />
      <Route path="/tours" component={ToursPage} />
      <Route path="/reviews" component={ReviewsPage} />
    </React.Fragment>
  );
};
