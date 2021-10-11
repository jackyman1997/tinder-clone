import React from "react"; 
import "./Header.css"; 
import PersonOutlineIcon from '@mui/icons-material/PersonOutline'; 
import IconButton from '@mui/material/IconButton';
import ForumIcon from '@mui/icons-material/Forum';

function Header() {
  return (
    <div className="header">
      <IconButton>
        <PersonOutlineIcon fontSize="large" className="header__icon" />
      </IconButton>
      <IconButton>
        <img 
          className="header__logo" 
          src="https://upload.wikimedia.org/wikipedia/commons/7/7c/LIHKG_logo.svg" 
          alt="" 
          height="40" 
          width="40" 
        />
      </IconButton>
      <IconButton>
        <ForumIcon fontSize="large" className="header__icon"/>
      </IconButton>
    </div>
  );
}

export default Header;
