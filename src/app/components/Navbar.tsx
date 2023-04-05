import AccountCircle from "@mui/icons-material/AccountCircle";
import Home from "@mui/icons-material/Home";
import LoginIcon from "@mui/icons-material/Login";
import LogoutIcon from "@mui/icons-material/Logout";
import MenuIcon from "@mui/icons-material/Menu";
import MoreIcon from "@mui/icons-material/MoreVert";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { MouseEvent, useState } from "react";
import { userStore } from "../global/userStore";

interface NavigationMenuProps {
  anchorEl: null | HTMLElement;
  handleMenuClose: () => void;
  setAnchorNavigationMenuEl: (value: null | HTMLElement) => void;
  handleMobileMenuClose: () => void;
}

function NavigationMenu({
  anchorEl,
  handleMenuClose,
  setAnchorNavigationMenuEl,
  handleMobileMenuClose,
}: NavigationMenuProps) {
  const navigationMenuId = "primary-search-account-navigation-menu";

  const handleNavigationMenuClose = () => {
    setAnchorNavigationMenuEl(null);
    handleMobileMenuClose();
  };

  const isNavigationMenuOpen = Boolean(anchorEl);

  return (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id={navigationMenuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isNavigationMenuOpen}
      onClose={handleNavigationMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>
        <IconButton
          size="large"
          aria-label="home-page"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        >
          <Home />
        </IconButton>
        Home
      </MenuItem>
    </Menu>
  );
}

export default function NavBar() {
  const user = userStore((state) => state.user);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [anchorNavigationEl, setAnchornavigationEl] =
    useState<null | HTMLElement>(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] =
    useState<null | HTMLElement>(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleUserMenuOpen = (event: MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleNavigationMenuOpen = (event: MouseEvent<HTMLElement>) => {
    setAnchornavigationEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event: MouseEvent<HTMLElement>) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const menuId = "primary-search-account-menu-";

  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id={menuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>
        <IconButton
          size="large"
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        >
          <AccountCircle />
        </IconButton>
        Home
      </MenuItem>
      {user ? (
        <MenuItem onClick={handleMenuClose}>
          <IconButton
            size="large"
            aria-label="logout of current user"
            aria-controls="primary-search-account-menu"
            aria-haspopup="true"
            color="inherit"
          >
            <LogoutIcon />
          </IconButton>
          <p>Logout</p>
        </MenuItem>
      ) : (
        <MenuItem onClick={handleMenuClose}>
          <IconButton
            size="large"
            aria-label="login of current user"
            aria-controls="primary-search-account-menu"
            aria-haspopup="true"
            color="inherit"
          >
            <LoginIcon />
          </IconButton>
          <p>Login</p>
        </MenuItem>
      )}
    </Menu>
  );

  const mobileMenuId = "primary-search-account-menu-mobile";
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem onClick={handleUserMenuOpen}>
        <IconButton
          size="large"
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        >
          <AccountCircle />
        </IconButton>
        <p>User</p>
      </MenuItem>
      {user ? (
        <MenuItem onClick={handleUserMenuOpen}>
          <IconButton
            size="large"
            aria-label="logout of current user"
            aria-controls="primary-search-account-menu"
            aria-haspopup="true"
            color="inherit"
          >
            <LogoutIcon />
          </IconButton>
          <p>Logout</p>
        </MenuItem>
      ) : (
        <MenuItem onClick={handleUserMenuOpen}>
          <IconButton
            size="large"
            aria-label="login of current user"
            aria-controls="primary-search-account-menu"
            aria-haspopup="true"
            color="inherit"
          >
            <LoginIcon />
          </IconButton>
          <p>Login</p>
        </MenuItem>
      )}
    </Menu>
  );

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{ mr: 2 }}
            onClick={handleNavigationMenuOpen}
          >
            <MenuIcon />
          </IconButton>
          {user && (
            <Typography
              variant="h6"
              noWrap
              component="div"
              sx={{ display: { xs: "none", sm: "block" } }}
            >
              {user.firstName}
            </Typography>
          )}

          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ display: { xs: "none", md: "flex" } }}>
            <IconButton
              size="large"
              edge="end"
              aria-label="account of current user"
              aria-controls={menuId}
              aria-haspopup="true"
              onClick={handleUserMenuOpen}
              color="inherit"
            >
              <AccountCircle />
            </IconButton>
          </Box>
          <Box sx={{ display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <MoreIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
      {renderMenu}
      <NavigationMenu
        anchorEl={anchorNavigationEl}
        handleMenuClose={handleMenuClose}
        setAnchorNavigationMenuEl={setAnchornavigationEl}
        handleMobileMenuClose={handleMobileMenuClose}
      />
    </Box>
  );
}
