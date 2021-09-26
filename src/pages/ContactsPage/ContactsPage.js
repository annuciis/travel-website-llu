import { ContactForm } from "./components/ContactForm";
import { ContactInfoWindow } from "./components/ContactInfoWindow/ContactInfoWindow";
import { useStyles } from "./ContactsPage.styles";

export const ContactsPage = () => {
  const classes = useStyles();
  return (
    <main className={classes.main}>
      <section className={classes.section}>
        <ContactInfoWindow />
        <div className={classes.header}>
          <h2 className={classes.title}> contact us </h2>
          <p> We will try to answer you as soon as possible! </p>
        </div>
        <ContactForm />
      </section>
    </main>
  );
};
