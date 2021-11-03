import { Container, Typography, Box, Link } from "@mui/material";
import { Facebook, Twitter } from "@mui/icons-material";
import { useStyles } from "./Footer.styles";

export const Footer = () => {
  const classes = useStyles();
  return (
    <Box component="footer" className={classes.footer}>
      <Container className={classes.footerContainer}>
        <Typography
          variant="body2"
          color="text.secondary"
          className={classes.copyrightText}
        >
          {"Copyright © TripVision "}
          {new Date().getFullYear()}
        </Typography>
        <Box className={classes.iconBox}>
          <a href="https://www.twitter.com" className={classes.icon}>
            <Twitter />
          </a>
          <a href="https://www.facebook.com" className={classes.icon}>
            <Facebook />
          </a>
        </Box>
      </Container>
    </Box>
  );
};
