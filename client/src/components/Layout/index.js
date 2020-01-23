import React from "react";
import { MenuList, MenuItem, AppBar } from "@material-ui/core";
import CssBaseline from "@material-ui/core/CssBaseline";
import Divider from "@material-ui/core/Divider";
import Drawer from "@material-ui/core/Drawer";
import Hidden from "@material-ui/core/Hidden";
import IconButton from "@material-ui/core/IconButton";
import Menu from "@material-ui/icons/Menu";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { makeStyles, useTheme } from "@material-ui/core/styles";

import { Link, withRouter } from "react-router-dom";

const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex"
  },
  drawer: {
    [theme.breakpoints.up("sm")]: {
      width: drawerWidth,
      flexShrink: 0
    }
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    backgroundColor: "red"
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up("sm")]: {
      display: "none"
    }
  },
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3)
  },
  listItem: {
    // border: "2px solid red"
  },
  nested: {
    paddingLeft: theme.spacing(4)
  }
}));

// LAYOUT COMPONENT HERE
function Layout(props) {
  const {
    container,
    children,
    location: { pathname }
  } = props;

  const classes = useStyles();
  const theme = useTheme();
  const [mobileOpen, setMobileOpen] = React.useState(false);

  React.useEffect(() => {
    console.log("PROPS", pathname);
  });

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  // the drawer shows up on the left side of the UI
  const drawer = (
    <div>
      <div className={classes.toolbar} />
      <MenuList>
        <MenuItem
          component={Link}
          to="/machines"
          selected={"/machines" === pathname}
        >
          Machines
        </MenuItem>
        <MenuItem
          component={Link}
          to="/locations"
          selected={"/locations" === pathname}
        >
          Locations
        </MenuItem>
        <MenuItem
          component={Link}
          to="/products"
          selected={"/products" === pathname}
        >
          Products
        </MenuItem>
        <MenuItem
          component={Link}
          to="/reports"
          selected={"/reports" === pathname}
        >
          Reports
        </MenuItem>
        <MenuItem component={Link} to="/media">
          Media
        </MenuItem>
        <MenuItem component={Link} to="/userManagement">
          User Management
        </MenuItem>
        <MenuItem component={Link} to="/logout">
          Logout
        </MenuItem>

        <Divider />
      </MenuList>
    </div>
  );

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        style={{ background: "black" }}
        position="fixed"
        className={classes.appBar}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            className={classes.menuButton}
          >
            <Menu />
          </IconButton>

          <Typography variant="h4" noWrap>
            ViaTouch Media
          </Typography>
          {/* <img src="viatouch.png"></img> */}
        </Toolbar>
      </AppBar>
      <nav className={classes.drawer} aria-label="mailbox folders">
        <Hidden smUp implementation="css">
          <Drawer
            container={container}
            variant="temporary"
            anchor={theme.direction === "rtl" ? "right" : "left"}
            open={mobileOpen}
            onClose={handleDrawerToggle}
            classes={{
              paper: classes.drawerPaper
            }}
            ModalProps={{
              keepMounted: true // Better open performance on mobile.
            }}
          >
            {drawer}
          </Drawer>
        </Hidden>
        <Hidden xsDown implementation="css">
          <Drawer
            classes={{
              paper: classes.drawerPaper
            }}
            variant="permanent"
            open
          >
            {drawer}
          </Drawer>
        </Hidden>
      </nav>
      <main className={classes.content}>
        <div className={classes.toolbar} />
        {children}
      </main>
    </div>
  );
}

// export default Layout;
export default withRouter(Layout);
