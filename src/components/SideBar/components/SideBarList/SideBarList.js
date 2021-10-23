import { Toolbar, IconButton, Divider, List } from "@mui/material";
import {
  Contacts as ContactsIcon,
  FlightTakeoff as FlightTakeoffIcon,
  Home as HomeIcon,
  Reviews as ReviewsIcon,
  Stars as StarsIcon,
} from "@mui/icons-material";
import { ChevronLeft } from "@material-ui/icons";
import { SideBarListItem } from "./components/SideBarListItem";

export const SideBarList = ({ handleDrawerToggle }) => {
  return (
    <div>
      <Toolbar sx={{ position: "relative" }}>
        <IconButton
          sx={{ position: "absolute", left: 185 }}
          onClick={handleDrawerToggle}
        >
          <ChevronLeft />
        </IconButton>
      </Toolbar>
      <Divider />
      <List>
        <SideBarListItem
          handleDrawerToggle={handleDrawerToggle}
          icon={<HomeIcon />}
          name={"Home"}
          link={"/"}
        />
        <SideBarListItem
          handleDrawerToggle={handleDrawerToggle}
          icon={<FlightTakeoffIcon />}
          name={"Tours"}
          link={"/tours"}
        />
        <SideBarListItem
          handleDrawerToggle={handleDrawerToggle}
          icon={<ReviewsIcon />}
          name={"Reviews"}
          link={"/reviews"}
        />
        <SideBarListItem
          handleDrawerToggle={handleDrawerToggle}
          icon={<StarsIcon />}
          name={"Rating"}
          link={"/rating"}
        />
        <SideBarListItem
          handleDrawerToggle={handleDrawerToggle}
          icon={<ContactsIcon />}
          name={"Contacts"}
          link={"/contacts"}
        />
      </List>
    </div>
  );
};
