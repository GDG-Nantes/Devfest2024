import { CloseRounded, MenuRounded } from "@mui/icons-material";
import {
  AppBar,
  CssBaseline,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItemButton,
  ListItemText,
  ThemeProvider,
  Toolbar,
} from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { useTranslation } from "react-i18next";
import { ToggleLanguage } from "../helpers/i18n";
import { MyLink } from "../helpers/links";
import { MENU } from "../navbar-menu";
import "./accessibility.scss";
import { Footer } from "./footer";
import { Helmet } from "./helmet";
import "./layout.scss";
import { CustomMDXProvider } from "./mdx";
import theme from "./theme";

const Layout: React.FC<React.PropsWithChildren> = ({ children }) => {
  const [isOpen, setDrawerOpen] = React.useState(false);

  const toggleDrawer = (open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setDrawerOpen(open);
  };
  return (
    <>
      <Helmet />
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Topbar
          toggleDrawer={toggleDrawer}
          logo="/images/logo-long.png"
        />

        <BarMenu isOpen={isOpen} toggleDrawer={toggleDrawer} />
        <CustomMDXProvider>{children}</CustomMDXProvider>
        <Footer />
      </ThemeProvider>
    </>
  );
};

const TopMenu = () => (
  <List className="menu-desktop">
    <ListMenuButtons />
  </List>
);

const Topbar: React.FC<{
  toggleDrawer: (open) => (event) => void;
  logo: string;
}> = ({ toggleDrawer, logo }) => {
  return (
    <AppBar position="sticky" color="secondary">
      <Toolbar className="toolbar">
        <Box className="top-bar-left">
          <MyLink to="/">
            <img
              className="logo-top-bar"
              src={logo}
              alt="Logo Devfest"
              height="64"
              width="226"
            />
          </MyLink>
        </Box>

        <Box className="top-bar-right">
          <TopMenu />
          <IconButton
            className="drawer"
            edge="start"
            aria-label="open menu"
            onClick={toggleDrawer(true)}
          >
            <MenuRounded />
          </IconButton>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

const BarMenu: React.FC<{
  toggleDrawer: (open) => (event) => void;
  isOpen: boolean;
}> = ({ isOpen, toggleDrawer }) => (
  <Drawer
    className="drawer"
    anchor="top"
    variant="temporary"
    open={isOpen}
    onClose={toggleDrawer(false)}
  >
    <Box
      className="menu-mobile"
      role="presentation"
      onKeyDown={toggleDrawer(true)}
      onClick={toggleDrawer(false)}
    >
      <List>
        <ListItemButton
          style={{
            height: "50px",
            justifyContent: "end",
            marginRight: "20px",
          }}
        >
          <IconButton aria-label="close menu">
            <CloseRounded />
          </IconButton>
        </ListItemButton>
        <Divider />
        <ListMenuButtons />
      </List>
    </Box>
  </Drawer>
);

const ListMenuButtons: React.FC = () => {
  const { t } = useTranslation("translation", { keyPrefix: "pages" });
  return (
    <>
      {MENU.map((menuItem) => (
        <MyLink
          key={menuItem.label}
          to={menuItem.link}
          activeClassName="active-link"
          style={{ width: "100%", height: "100%" }}
        >
          <ListItemButton>
            <ListItemText sx={{ textAlign: 'center' }} primaryTypographyProps={{ variant: "h3" }}>
              {t(menuItem.label + ".name", { defaultValue: menuItem.label })}
            </ListItemText>
          </ListItemButton>
        </MyLink>
      ))}
      <ListItemButton aria-label="change language">
        <ToggleLanguage />
      </ListItemButton>
    </>
  );
};

export default Layout;
