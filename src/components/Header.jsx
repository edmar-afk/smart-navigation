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
import { Link } from "react-router-dom";
function Header() {
  return (
    <div className="absolute top-4 right-0 px-8 z-50 flex flex-row items-center justify-between w-full">
      <p className="ml-4 md:ml-20">
        Smart Office Navigation and Service Directory
      </p>
      <div className="flex items-center gap-2 cursor-pointer bg-white px-3 py-2 rounded-lg shadow">
        <Avatar sx={{ width: 32, height: 32 }}>
          <PersonIcon fontSize="small" />
        </Avatar>

        <Typography variant="body2" className="font-medium">
          Hello, User.
        </Typography>
      </div>
    </div>
  );
}

export default Header;
