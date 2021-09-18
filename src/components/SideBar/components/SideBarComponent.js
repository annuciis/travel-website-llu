import {
  Toolbar,
  IconButton,
  Divider,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
} from "@mui/material";
import {
  MoveToInbox as InboxIcon,
  Mail as MailIcon,
} from "@mui/icons-material";
import { ChevronLeft } from "@material-ui/icons";

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
      <List>
        {["Inbox", "Starred", "Send email", "Drafts"].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>
              {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
            </ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {["All mail", "Trash", "Spam"].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>
              {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
            </ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
    </div>
  );
};
