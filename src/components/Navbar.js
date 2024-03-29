import { Avatar, IconButton, MenuItem, Menu } from "@material-ui/core";
import { Add, Menu as MenuIcon } from "@material-ui/icons";
import React, { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, logout } from "../firebase";
import "../styles/Navbar.css";
import logodark from "../assests/img/logo-dark.svg";
import CreateCourse from "./CreateCourse";
import JoinCourse  from "./JoinCourse"
import { useRecoilState } from "recoil";
import { createDialogAtom, joinDialogAtom } from "../utilities/atoms";

function Navbar() {
  const [user, loading, error] = useAuthState(auth);
  const [anchorEl, setAnchorEl] = useState(null);
  const [createOpened, setCreateOpened] = useRecoilState(createDialogAtom);
  const [joinOpened, setJoinOpened] = useRecoilState(joinDialogAtom);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <CreateCourse />
      <JoinCourse />
      <nav className="navbar">
        <div className="navbar__left">
          <IconButton>
            <MenuIcon style={{ color: 'white' }}/>
          </IconButton>
          <img
            src={logodark}
            alt="Tyche Logo"
            className="navbar__logo"
          />{" "}

        </div>
        <div className="navbar__right">
          <IconButton
            aria-controls="simple-menu"
            aria-haspopup="true"
            onClick={handleClick}
          >
            <Add style={{ color: 'white' }}/>
          </IconButton>
          <IconButton onClick={logout}>
            <Avatar src={user?.photoURL} />
          </IconButton>
          <Menu
            id="simple-menu"
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleClose}
          >
            <MenuItem
              onClick={() => {
                setCreateOpened(true);
                handleClose();
              }}
            >
              Create Class
            </MenuItem>
            <MenuItem
              onClick={() => {
                setJoinOpened(true);
                handleClose();
              }}
            >
              Join Class
            </MenuItem>
          </Menu>
        </div>
      </nav>
    </>
  );
}
export default Navbar;