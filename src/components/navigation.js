import React, { Component } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import TwitterIcon from '@material-ui/icons/Twitter';
import FavoriteIcon from '@material-ui/icons/Favorite';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import MailIcon from '@material-ui/icons/Mail';
import Switch from '@material-ui/core/Switch';
import Drawer from '@material-ui/core/Drawer';
import { useTheme } from '@material-ui/core/styles';
import { Hidden } from '@material-ui/core';
import Link from '@material-ui/core/Link';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        paddingTop: 5,
    },
    appbar: {
        background: 'transparent',
        boxShadow: 'none',
    },
    iconBar: {
        flexGrow: 1,
        flexWrap: 'wrap',
        overflowX: 'auto',
    },
    link: {
        display: 'inline-block',
        borderRadius: '30px',
        padding: '6px 18px',
        textAlign: 'center',
        '&:hover': {
            background: "#FFFFFF",
            color: '#000000',
         },
    },
    toolbarLink: {
        '&:hover': {
            textDecoration:'none',
         },
        
    },
    drawerPaper: {
        position: 'relative',
        whiteSpace: 'nowrap',
        width: drawerWidth,
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    drawerPaperClose: {
        overflowX: 'hidden',
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        width: theme.spacing(7),
        [theme.breakpoints.up('sm')]: {
            width: theme.spacing(9),
        },
    },
}));

const sections = [
    { title: 'Deliver', url: '#' },
    { title: 'Track', url: '#' },
    { title: 'Offers', url: '#' },
    { title: 'Help', url: '#' },
];
export default function Navigation(props) {
    const theme = useTheme();
    const classes = useStyles(theme);
    const [open, setOpen] = React.useState(false);
    const [checked, setChecked] = React.useState(false);
    function handleDrawer() {
        setOpen(!open);
    }
    function handleCheck(e) {
        props.handleSwitch();
        setChecked(!checked);
    }
    return (
        <div className={classes.root}>
            <AppBar position="static" color="transparent" elevation={0}>
                <Toolbar variant="dense">
                    <Hidden smUp>
                        <IconButton edge="start" style={{ color: theme.palette.secondary.icons }} aria-label="menu" onClick={() => { handleDrawer() }}>
                            <MenuIcon />
                        </IconButton>
                    </Hidden>
                    <nav className={classes.iconBar}>
                        {sections.map((section) => (
                            <div className={classes.link} key={section.title}>
                            <Link
                                color="inherit"
                                variant="body2"
                                href={section.url}
                                className={classes.toolbarLink}
                            >
                                {section.title}
                            </Link>
                            </div>
                        ))}
                    </nav>
                    <Switch checked={checked} onChange={() => { handleCheck() }} style={{ color: theme.palette.secondary.icons }} />
                </Toolbar>
            </AppBar>
            {/* Drawer (can be placed anywhere in template) */}
            <Drawer
                variant="temporary"
                classes={{
                    paper: clsx(classes.drawerPaper, !open && classes.drawerPaperClose),
                }}
                open={open}
                onClick={() => { handleDrawer() }}>
                <List>
                    <div>
                        <ListItem button component="a" href="#">
                            <ListItemIcon>
                                <MailIcon />
                            </ListItemIcon>
                            <ListItemText primary="Mail" />
                        </ListItem>
                        <ListItem button component="a" href="#">
                            <ListItemIcon>
                                <LinkedInIcon />
                            </ListItemIcon>
                            <ListItemText primary="LinkedIn" />
                        </ListItem>
                        <ListItem button component="a" href="#">
                            <ListItemIcon>
                                <TwitterIcon />
                            </ListItemIcon>
                            <ListItemText primary="Twitter" />
                        </ListItem>
                        <ListItem button>
                            <ListItemIcon>
                                <FavoriteIcon />
                            </ListItemIcon>
                            <ListItemText primary="Support" />
                        </ListItem>
                    </div>
                </List>
            </Drawer>
            {/* End-Drawer */}
        </div>
    );
}
