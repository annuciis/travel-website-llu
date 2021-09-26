import { Review } from "./components/Review";
import { useStyles } from "./ReviewsPage.styles";

export const ReviewsPage = () => {
  const classes = useStyles();
  return (
    <main className={classes.main}>
      <section className={classes.container}>
        <div className={classes.title}>
          <h2>our reviews</h2>
          <div className={classes.underline}></div>
        </div>
        <Review />
      </section>
    </main>
  );
};
