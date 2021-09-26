import { SideBarList } from "./components/SideBarList";
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
        {<SideBarList handleDrawerToggle={handleDrawerToggle} />}
      </Drawer>
    </Box>
  );
};
