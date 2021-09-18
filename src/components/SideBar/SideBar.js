import { SideBarComponent } from "./components";
import { Box, Drawer } from "@mui/material";

const drawerWidth = 240;

export const SideBar = ({ handleDrawerToggle, isOpen }) => {
  return (
    <Box component="nav" sx={{ width: 0 }} aria-label="mailbox folders">
      <Drawer
        id="side-bar"
        variant="temporary"
        open={isOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true,
        }}
        sx={{
          display: "block",
          "& .MuiDrawer-paper": {
            boxSizing: "border-box",
            width: drawerWidth,
          },
        }}
      >
        {<SideBarComponent handleDrawerToggle={handleDrawerToggle} />}
      </Drawer>
      <Drawer
        variant="permanent"
        sx={{
          display: "none",
          "& .MuiDrawer-paper": {
            boxSizing: "border-box",
            width: drawerWidth,
          },
        }}
        open
      >
        {<SideBarComponent handleDrawerToggle={handleDrawerToggle} />}
      </Drawer>
    </Box>
  );
};
