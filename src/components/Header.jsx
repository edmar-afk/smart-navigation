import React, { useState } from "react";
import {
  Avatar,
  Menu,
  MenuItem,
  IconButton,
  Typography,
  Box,
} from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import PersonIcon from "@mui/icons-material/Person";

function Header() {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    handleClose();
    console.log("Logout clicked");
  };

  return (
    <div className="fixed top-4 right-0 px-8 z-50 flex flex-row items-center justify-between w-full">
      <p className='ml-4 md:ml-72'>Smart Office Navigation and Service Directory</p>
      <Box
        onClick={handleOpen}
        className="flex items-center gap-2 cursor-pointer bg-white px-3 py-2 rounded-lg shadow"
      >
        <Avatar sx={{ width: 32, height: 32 }}>
          <PersonIcon fontSize="small" />
        </Avatar>

        <Typography variant="body2" className="font-medium">
          Sample User Name
        </Typography>

        <KeyboardArrowDownIcon fontSize="small" />
      </Box>

      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
      >
        <MenuItem onClick={handleLogout}>Logout</MenuItem>
      </Menu>
    </div>
  );
}

export default Header;