import React from "react";
import { Route } from "react-router-dom";

import { TitlePage } from "./TitlePage";
import { ToursPage } from "./ToursPage";

export const WebPages = () => {
  return (
    <React.Fragment>
      <Route exact path="/" component={TitlePage} />
      <Route path="/tours" component={ToursPage} />
    </React.Fragment>
  );
};
