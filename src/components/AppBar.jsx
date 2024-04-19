import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import { IconButton, Stack } from "@mui/material";
import { Language, LightMode } from "@mui/icons-material";
import Menu from "./Menu.jsx";
import { Link } from "react-router-dom";

const pages = ["Homepage", "Projects", "CV"];
const settings = ["Profile", "Account", "Dashboard", "Logout"];

function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Container
      maxWidth="xl"
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        borderBottom: "1px solid black",
        paddingBlockEnd: 2,
      }}
    >
      <Box
        sx={{
          display: "flex",
          gap: 1,
          alignItems: "center",
          justifyContent: "space-between",
          marginTop: { xs: 5, md: 0 },
        }}
      >
        <Box
          sx={{
            flexGrow: 0,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Avatar
            alt="Bilal SEN"
            src="https://framerusercontent.com/images/WvC1O7e8kKoaPeP03YwzWLgFp0o.png"
          />
        </Box>

        <Stack
          sx={{
            display: { xs: "none", md: "flex" },
          }}
        >
          <Typography sx={{ color: "#10101A", fontSize: 24, fontWeight: 600 }}>
            Bilal Sen
          </Typography>
          <Typography sx={{ color: "#10101A", fontSize: 16, fontWeight: 400 }}>
            Frontend Developer
          </Typography>
        </Stack>
      </Box>
      <Stack
        sx={{
          display: { xs: "none", sm: "flex", md: "none", alignItems: "center" },
        }}
      >
        <Typography sx={{ color: "#10101A", fontSize: 24, fontWeight: 600 }}>
          Bilal Sen
        </Typography>
        <Typography sx={{ color: "#10101A", fontSize: 16, fontWeight: 400 }}>
          Frontend Developer
        </Typography>
      </Stack>
      <Box
        sx={{
          flexGrow: 0,
          display: { xs: "none", md: "flex" },
          alignItems: "center",
          gap: 2,
        }}
      >
        <Link to={"/"} style={{ textDecoration: "none" }}>
          <Typography
            sx={{
              display: "flex",
              color: "#10101A",
              fontSize: 18,
              fontWeight: 600,
              "&:hover": {
                cursor: "pointer",
                color: "#FFA500",
              },
            }}
          >
            Homepage
          </Typography>
        </Link>
        <Link to={"/"} style={{ textDecoration: "none" }}>
          <Typography
            sx={{
              display: "none",
              color: "#10101A",
              fontSize: 18,
              fontWeight: 600,
              "&:hover": {
                cursor: "pointer",
                color: "#FFA500",
              },
            }}
          >
            Projects
          </Typography>
        </Link>

        <Link to={"/Bilal_Sen_Resume.pdf"} style={{ textDecoration: "none" }}>
          <Typography
            sx={{
              display: "flex",
              color: "#10101A",
              fontSize: 18,
              fontWeight: 600,
              "&:hover": {
                cursor: "pointer",
                color: "#FFA500",
              },
            }}
          >
            CV
          </Typography>
        </Link>
        <IconButton aria-label="language" size="small">
          <Language
            sx={{
              display: "none",
              color: "#10101A",
              "&:hover": {
                color: "#FFA500",
              },
            }}
          />
        </IconButton>
        <IconButton
          aria-label="lightmode"
          size="small"
          sx={{ display: "none" }}
        >
          <LightMode
            sx={{
              color: "#FFA500",
            }}
          />
        </IconButton>
      </Box>
      <Menu />
    </Container>
  );
}
export default ResponsiveAppBar;
