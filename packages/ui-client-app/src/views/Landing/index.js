import React from "react";
import PropTypes from "prop-types";
import {Route,Link} from "react-router-dom";
import { withStyles } from "@material-ui/core/styles";
import {
  AppBar,
  Drawer,
  Div,
  Toolbar,
  List,
  ListItem,
  ListItemText,
  Typegraphy,
  Icon,
  Main
} from "ui-atoms";
import IconButton from "@material-ui/core/IconButton";
import Hidden from "@material-ui/core/Hidden";
import Divider from "@material-ui/core/Divider";
import { RenderRoutes } from "ui-molecules";
import appRoutes from "config/routes/app-routes";
import styles from "./css";

class Landing extends React.Component {
  state = {
    mobileOpen: false
  };

  handleDrawerToggle = () => {
    this.setState(state => ({ mobileOpen: !state.mobileOpen }));
  };

  render() {
    const { classes, theme, match } = this.props;

    const drawer = (
      <Div>
        <Div className={classes.toolbar} />
        <Divider />
        <List>
          <ListItem button>
            <ListItemText primary="Home" />
          </ListItem>
          <ListItem button component="a" href="#simple-list">
            <ListItemText primary="Edit Profile" />
          </ListItem>
          <ListItem button>
            <ListItemText primary="Contact Us" />
          </ListItem>
          <ListItem button>
            <ListItemText primary="Logout" />
          </ListItem>
          <ListItem button>
          <Link to="/blood">
            <ListItemText primary="Blood" />
          </Link>
          </ListItem>
        </List>
      </Div>
    );
    return (
      <Div className={classes.root}>
        <AppBar className={classes.appBar}>
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="Open drawer"
              onClick={this.handleDrawerToggle}
              className={classes.navIconHide}
            >
              <Icon iconName="menu" />
            </IconButton>
            <Typegraphy variant="title" color="inherit" noWrap>
              Mihy
            </Typegraphy>
          </Toolbar>
        </AppBar>
        <Hidden mdUp>
          <Drawer
            variant="temporary"
            anchor={theme.direction === "rtl" ? "right" : "left"}
            open={this.state.mobileOpen}
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
        <Hidden smDown implementation="css">
          <Drawer
            variant="permanent"
            open
            classes={{
              paper: classes.drawerPaper
            }}
          >
            {drawer}
          </Drawer>
        </Hidden>
        <Main className={classes.content} style={{marginTop:"50px"}}>
          <Route exact path="/mihy/home" component={()=><div>home</div>} />
          <Route exact path="/mihy/blood" component={()=><div>blood</div>} />
          {/*<RenderRoutes basePath={match.path} routes={appRoutes} />*/}
        </Main>
      </Div>
    );
  }
}

Landing.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired
};

export default withStyles(styles, { withTheme: true })(Landing);
