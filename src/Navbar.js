import Link from "next/link";
import { useState } from "react";
import styled from "styled-components";

import { fade, makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import InputBase from "@material-ui/core/InputBase";

import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";

import SearchIcon from "@material-ui/icons/Search";

import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline";
import BookIcon from "@material-ui/icons/Book";
import MoreIcon from "@material-ui/icons/MoreVert";

import PdfUploader from "./PdfUploader";

const useStyles = makeStyles((theme) => ({
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    display: "none",
    [theme.breakpoints.up("sm")]: {
      display: "block",
    },
  },
  search: {
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(3),
      width: "auto",
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  inputRoot: {
    color: "inherit",
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
  sectionDesktop: {
    display: "none",
    [theme.breakpoints.up("md")]: {
      display: "flex",
    },
  },
  sectionMobile: {
    display: "flex",
    [theme.breakpoints.up("md")]: {
      display: "none",
    },
  },
}));

const StyledAppbar = styled(AppBar)`
  .MuiToolbar-root {
    background-color: white;
    color: #212121;
  }

  .MuiButtonBase-root {
    color: #212121;

    &:hover {
      background-color: #e0e0e0;
    }
  }
`;

const StyledTextField = styled(TextField)`
  .MuiOutlinedInput-input {
    padding: 10px;
  }
`;

function PrimarySearchAppBar() {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = useState(null);

  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const mobileMenuId = "primary-search-account-menu-mobile";

  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{ vertical: "top", horizontal: "right" }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem>
        <IconButton aria-label="add books" color="inherit">
          <AddCircleOutlineIcon />
        </IconButton>
        <p>Upload book</p>
      </MenuItem>
      <MenuItem>
        <IconButton aria-label="view collections" color="inherit">
          <BookIcon />
        </IconButton>
        <p>View Collection</p>
      </MenuItem>
    </Menu>
  );

  const initUpload = () => setOpen(true);

  return (
    <>
      <PdfUploader open={open} setOpen={setOpen} />
      <div className={classes.grow}>
        <StyledAppbar position="fixed">
          <Toolbar>
            <Typography className={classes.title} variant="h6" noWrap>
              My Bookstore
            </Typography>
            <div className={classes.search}>
              <StyledTextField
                placeholder="Search…"
                variant="outlined"
                InputProps={{ startAdornment: <SearchIcon /> }}
                classes={{
                  root: classes.inputRoot,
                  input: classes.inputInput,
                }}
                inputProps={{ "aria-label": "search" }}
              />
            </div>
            <div className={classes.grow} />
            <div className={classes.sectionDesktop}>
              <IconButton
                aria-label="add books"
                color="inherit"
                onClick={initUpload}
              >
                <AddCircleOutlineIcon />
              </IconButton>
              <Link href="/">
                <a>
                  <IconButton aria-label="view collections" color="inherit">
                    <BookIcon />
                  </IconButton>
                </a>
              </Link>
            </div>
            <div className={classes.sectionMobile}>
              <IconButton
                aria-label="show more"
                aria-controls={mobileMenuId}
                aria-haspopup="true"
                onClick={handleMobileMenuOpen}
                color="inherit"
              >
                <MoreIcon />
              </IconButton>
            </div>
          </Toolbar>
        </StyledAppbar>
        <Toolbar />
        {renderMobileMenu}
      </div>
    </>
  );
}

export default PrimarySearchAppBar;
