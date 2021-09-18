import { Link } from "react-router-dom";
import { List, ListItem, ListItemText, ListItemIcon } from "@mui/material";

export const SideBarListItem = ({ handleDrawerToggle, icon, name, link }) => {
  return (
    <Link to={link} onClick={handleDrawerToggle}>
      <ListItem button key={name}>
        <ListItemIcon>{icon}</ListItemIcon>
        <ListItemText primary={name} />
      </ListItem>
    </Link>
  );
};
