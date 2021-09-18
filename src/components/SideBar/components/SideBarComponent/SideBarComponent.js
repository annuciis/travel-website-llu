import { Toolbar, IconButton, Divider, List } from "@mui/material";
import {
  Contacts as ContactsIcon,
  FlightTakeoff as FlightTakeoffIcon,
  Home as HomeIcon,
  Reviews as ReviewsIcon,
} from "@mui/icons-material";
import { ChevronLeft } from "@material-ui/icons";
import { SideBarListItem } from "../SideBarListItem";

export const SideBarComponent = ({ handleDrawerToggle }) => {
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
      {/*first list */}
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
        {/* </List> */}
        {/*second list */}
        {/* <List> */}
        <SideBarListItem
          handleDrawerToggle={handleDrawerToggle}
          icon={<ReviewsIcon />}
          name={"Reviews"}
          link={"/reviews"}
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
