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
import { withStyles } from "@material-ui/core/styles";

import { Link } from "react-router-dom";

const drawerWidth = 240;

const styles = theme => ({
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
    // use for responsive drawer
    // [theme.breakpoints.up("sm")]: {
    //   width: `calc(100% - ${drawerWidth}px)`,
    //   marginLeft: drawerWidth
    // }
    // use for clipped drawer
    zIndex: theme.zIndex.drawer + 1
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
    border: "2px solid red"
  },
  nested: {
    paddingLeft: theme.spacing(4)
  }
});

// LAYOUT COMPONENT HERE
class Layout extends React.Component {
  state = {
    mobileOpen: false
  };

  handleDrawerToggle = () => {
    // setMobileOpen(!mobileOpen);
    this.setState({ mobileOpen: !this.state.mobileOpen });
  };

  render() {
    const { container, children, classes, books } = this.props;
    // const classes = useStyles();
    // const theme = useTheme();
    // const classes = this.useStyles();
    const drawer = (
      <div>
        <div className={classes.toolbar} />
        <MenuList>
          <MenuItem component={Link} to="/">
            Home
          </MenuItem>
          <Divider />
          <MenuItem component={Link} to="/dashboard">
            Dashboard
          </MenuItem>
          <Divider />
          <MenuItem component={Link} to="/login">
            Login
          </MenuItem>
          <Divider />
          <MenuList>
            {/* RENDER BOOKS HERE */}
            {books.map(book => (
              <MenuItem className={classes.nested} key={book.id}>
                {book.title}
              </MenuItem>
            ))}
          </MenuList>
        </MenuList>
      </div>
    );
    return (
      <div className={classes.root}>
        <CssBaseline />
        <AppBar position="fixed" className={classes.appBar}>
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={this.handleDrawerToggle}
              className={classes.menuButton}
            >
              <Menu />
            </IconButton>
            <Typography variant="h6" noWrap>
              Responsive drawer
            </Typography>
          </Toolbar>
        </AppBar>
        <nav className={classes.drawer} aria-label="mailbox folders">
          <Hidden smUp implementation="css">
            <Drawer
              container={container}
              variant="temporary"
              open={this.mobileOpen}
              onClose={this.handleDrawerToggle}
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
}

// export default compose(withRouter, withStyles(styles))(Layout);
export default withStyles(styles)(Layout);
