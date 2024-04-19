import * as React from "react";
import Box from "@mui/material/Box";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import { Language } from "@mui/icons-material";
import Switch from "./Switch";
import MenuIcon from "@mui/icons-material/Menu";

export default function AccountMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <React.Fragment>
      <Box
        sx={{
          display: { xs: "flex", md: "none", alignItems: "center" },
          alignItems: "center",
          textAlign: "center",
          marginTop: { xs: 5, md: 0 },
        }}
      >
        <Tooltip title="Account settings">
          <IconButton
            onClick={handleClick}
            size="small"
            sx={{ ml: 2 }}
            aria-controls={open ? "account-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
          >
            <MenuIcon sx={{ width: 32, height: 32, color: "#10101A" }} />
          </IconButton>
        </Tooltip>
        <Menu
          anchorEl={anchorEl}
          id="account-menu"
          open={open}
          onClose={handleClose}
          onClick={handleClose}
          PaperProps={{
            elevation: 0,
            sx: {
              overflow: "visible",
              filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
              mt: 1.5,
              "& .MuiAvatar-root": {
                width: 32,
                height: 32,
                ml: -0.5,
                mr: 1,
              },
              "&::before": {
                content: '""',
                display: "block",
                position: "absolute",
                top: 0,
                right: 14,
                width: 10,
                height: 10,
                bgcolor: "background.paper",
                transform: "translateY(-50%) rotate(45deg)",
                zIndex: 0,
              },
            },
          }}
          transformOrigin={{ horizontal: "right", vertical: "top" }}
          anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
        >
          <MenuItem
            onClick={handleClose}
            sx={{
              display: "flex",
              color: "#10101A",
              fontSize: 18,
              fontWeight: 500,
              "&:hover": {
                color: "#FFA500",
              },
            }}
          >
            Homepage
          </MenuItem>
          <MenuItem
            onClick={handleClose}
            sx={{
              display: "none",
              color: "#10101A",
              fontSize: 18,
              fontWeight: 500,
              "&:hover": {
                color: "#FFA500",
              },
            }}
          >
            Projects
          </MenuItem>
          <MenuItem
            onClick={handleClose}
            sx={{
              display: "flex",
              color: "#10101A",
              fontSize: 18,
              fontWeight: 500,
              "&:hover": {
                color: "#FFA500",
              },
            }}
          >
            CV
          </MenuItem>
          <Divider sx={{ display: "none" }} />
          <MenuItem sx={{ display: "none" }}>
            <ListItemIcon>
              <Language fontSize="small" sx={{ color: "#10101A" }} />
            </ListItemIcon>
            Language
          </MenuItem>
          <MenuItem sx={{ display: "none" }}>
            <Switch />
          </MenuItem>
        </Menu>
      </Box>
    </React.Fragment>
  );
}
