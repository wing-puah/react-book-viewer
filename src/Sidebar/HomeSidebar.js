import Toolbar from "@material-ui/core/Toolbar";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";

import DrawerContainer from "./DrawerContainer";

const menuList = [
  { text: "All" },
  { text: "Favorites" },
  { text: "Reading now" },
  { text: "To read" },
  { text: "Have read" },
];

const HomeSidebar = () => {
  return (
    <DrawerContainer>
      <Toolbar />
      <List>
        {menuList.map((singleList) => {
          return (
            <ListItem button key={singleList.text}>
              <ListItemText>{singleList.text}</ListItemText>
            </ListItem>
          );
        })}
      </List>
    </DrawerContainer>
  );
};

export default HomeSidebar;
