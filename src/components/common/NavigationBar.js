import 'babel-polyfill';
import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import Button from 'material-ui/Button';
import IconButton from 'material-ui/IconButton';
import MenuIcon from 'material-ui-icons/Menu';
import { Link } from 'react-router-dom';

const styles = theme => ({
  root: {
    marginTop: theme.spacing.unit,
    width: '100%',
  },
  flex: {
    flex: 1,
  },
  homeButton: {
      textDecoration: 'none'
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
});

class NavigationBar extends React.Component {
    render() {
        const { classes } = this.props;
        return (
            <div className={classes.root}>
            <AppBar position="static">
                <Toolbar>
                    <IconButton className={classes.menuButton} color="contrast" aria-label="Menu">
                        <MenuIcon />
                    </IconButton>
                    <Typography component={Link} to="/" type="title" color="inherit" 
                        className={`${classes.flex} ${classes.homeButton}`}>
                        Workflow Designer Demo
                    </Typography>
                    <Button component={Link} color="contrast" to="/workflows">List</Button>
                    <Button component={Link} color="contrast" to="/workflow">Create</Button>
                    <Button color="contrast">Login</Button>
                </Toolbar>
            </AppBar>
            </div>
        );
    }
}

NavigationBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(NavigationBar);