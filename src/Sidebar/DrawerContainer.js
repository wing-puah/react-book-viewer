import styled from "styled-components";

import Drawer from "@material-ui/core/Drawer";

const StyledDrawer = styled(Drawer)`
  width: 200px;
  height: 100%;

  .MuiDrawer-paper {
    z-index: 900;
    width: 200px;
  }
`;

const DrawerContainer = ({ children }) => {
  return <StyledDrawer variant="permanent">{children}</StyledDrawer>;
};

export default DrawerContainer;
