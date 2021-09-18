import { makeStyles } from "@material-ui/core/styles";

import { TitlePage } from "./components/TitlePage";

const useStyles = makeStyles({
  root: {
    backgroundImage:
      "url(https://youmatter.world/app/uploads/sites/2/2019/11/travel-world.jpg)",
    width: "100%",
    height: "100vh",
    backgroundSize: "cover",
  },
});

function App() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      {/* <NavBar /> */}
      <TitlePage />
      {/* <Content /> */}
    </div>
  );
}

export default App;
