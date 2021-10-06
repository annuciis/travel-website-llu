import { AppBar, Toolbar, Typography, IconButton } from "@mui/material";
import { Menu as MenuIcon, Favorite, Tour } from "@mui/icons-material";
import { useEffect, useState } from "react";

export const NavBar = ({ handleDrawerToggle, handleFavoritesOpen }) => {
  const [isFavNotOpen, setIsFavNotOpen] = useState(false);
  useEffect(() => {
    setIsFavNotOpen(!isFavNotOpen);
  }, [handleFavoritesOpen]);
  return (
    <AppBar color="primary" position="fixed">
      <Toolbar>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          edge="start"
          onClick={handleDrawerToggle}
          sx={{ mr: 2 }}
        >
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" noWrap component="div">
          Responsive drawer
        </Typography>
        <IconButton
          color="inherit"
          aria-label="open favorites"
          onClick={handleFavoritesOpen}
          sx={{ mr: 1, position: "absolute", right: 0 }}
        >
          {isFavNotOpen ? <Favorite /> : <Tour />}
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};
