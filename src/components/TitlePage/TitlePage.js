import React, { useState } from "react";
import { Box, CssBaseline } from "@mui/material";
import { Content } from "../Content";
import { SideBar } from "../SideBar";
import { NavBar } from "../NavBar";
import { Footer } from "../Footer";

export const TitlePage = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleDrawerToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <NavBar handleDrawerToggle={handleDrawerToggle} />
      <SideBar handleDrawerToggle={handleDrawerToggle} isOpen={isOpen} />
      <Content />
      <Footer />
    </Box>
  );
};
