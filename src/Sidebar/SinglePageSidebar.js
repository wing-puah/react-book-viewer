import styled from "styled-components";

import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

import Toolbar from "@material-ui/core/Toolbar";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";

import DrawerContainer from "./DrawerContainer";

const StyledTextField = styled(TextField)`
  height: 35px;
  padding: 0 10px;

  .MuiInputBase-root {
    height: 45px;
  }

  .MuiInputBase-input {
    padding: 5px;
  }
`;

const StyledButton = styled(Button)`
  padding: 5px;
  height: 35px;

  &.MuiButton-root {
    min-width: 20px;
  }
`;

const SinglePageSidebar = ({ data }) => {
  return (
    <DrawerContainer>
      <Toolbar />
      <List>
        <ListItem>
          <StyledTextField placeholder="Search…" variant="outlined" />
          <StyledButton
            variant="outlined"
            color="primary"
            disableElevation
            className="ml-1"
          >
            Go
          </StyledButton>
        </ListItem>
        <ListItem>
          <ListItemText>
            <strong>{data.title}</strong>
            <br /> {data.author}
          </ListItemText>
        </ListItem>
      </List>
    </DrawerContainer>
  );
};

export default SinglePageSidebar;
