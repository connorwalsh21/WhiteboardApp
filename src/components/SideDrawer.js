import React from 'react';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import Grey from '@material-ui/core/colors/grey';
import HighlightedButton from "./HighlightedButton";
import VerticalTabs from "./TabPanel";
import ToggleButtonGroup from '@material-ui/lab/ToggleButtonGroup';
import Home from './HomeButton';
import Grid from '@material-ui/core/Grid';
import MessageWindow from "../containers/MessageWindow";

const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
    },
    appBar: {
        zIndex: theme.zIndex.drawer + 1,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
    },
    appBarShift: {
        marginLeft: drawerWidth,
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    menuButton: {
        marginRight: 36,
    },
    hide: {
        display: 'none',
    },
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
        whiteSpace: 'nowrap',
        flexDirection: 'column',
    },
    drawerOpen: {
        width: drawerWidth,
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    drawerClose: {
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        overflowX: 'hidden',
        width: theme.spacing(11) + 1,
        [theme.breakpoints.up('sm')]: {
            width: theme.spacing(11) + 1,
        },
    },
    toolbar: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        padding: theme.spacing(0, 1),
        ...theme.mixins.toolbar,
    },
    content: {
        flexGrow: 1,
        padding: theme.spacing(3),
    },
    toggleButtonContainer: {
        flexDirection: 'column',
    },
    navButtons: {
        marginLeft: '3px',
    }
}));

export default function MiniDrawer() {
    const classes = useStyles();
    const theme = useTheme();
    const [open, setOpen] = React.useState(false);

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };

    return (
        <div className={classes.root}>
            <CssBaseline />
            <AppBar
                position="fixed"
                className={clsx(classes.appBar, {
                    [classes.appBarShift]: open,
                })}
            >
                <Toolbar>
                    <IconButton
                        color="secondary"
                        aria-label="open drawer"
                        onClick={handleDrawerOpen}
                        edge="start"
                        className={clsx(classes.menuButton, {
                            [classes.hide]: open,
                        })}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant='title' color='secondary'>
                        <Box fontWeight='bold' letterSpacing={8}>WHITEBOARD</Box>
                        <Typography variant='subtitle2' color='secondary'>
                            <Box fontStyle='italic' fontSize={12}>"It's not Blackboard"</Box>
                        </Typography>
                    </Typography>
                </Toolbar>
            </AppBar>
            <Drawer
                variant="permanent"
                className={clsx(classes.drawer, {
                    [classes.drawerOpen]: open,
                    [classes.drawerClose]: !open,
                })}
                classes={{
                    paper: clsx({
                        [classes.drawerOpen]: open,
                        [classes.drawerClose]: !open,
                    }),
                }}
            >
                <div className={classes.toolbar}>
                    <IconButton onClick={handleDrawerClose}>
                        {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
                    </IconButton>
                </div>
                <Divider />
                <List>
                    {/*{['First Class', 'Second Class', 'Third Class?', 'Fourth Class.'].map((text, index) => (*/}
                        <ToggleButtonGroup class={'toggleButtonContainer'}>
                            <ListItem>
                                <HighlightedButton buttonText="Class 1">

                                </HighlightedButton>
                                <ListItemText primary={'First Class'} />
                            </ListItem>
                            <ListItem>
                                <HighlightedButton>

                                </HighlightedButton>
                                <ListItemText primary={'Second Class'} />
                            </ListItem>
                            <ListItem>
                                <HighlightedButton>

                                </HighlightedButton>
                                <ListItemText primary={'Third Class?'} />
                            </ListItem>
                            <ListItem>
                                <HighlightedButton textPrimary={'Class 1'}>

                                </HighlightedButton>
                                <ListItemText primary={'Fourth Class.'} />
                            </ListItem>
                        </ToggleButtonGroup>
                    {/*))}*/}
                </List>
                <Divider />
                <Grid container direction='column' xs={7}
                      alignContent={'center'}
                      justify={'flex-end'}
                      classes={'navButtons'}>
                    <Home> </Home>
                </Grid>
            </Drawer>
            <main className={classes.content}>
                <div className={classes.toolbar} />
                {/*<VerticalTabs>

                </VerticalTabs>*/}
                {/*<MessageWindow>
                    Hello
                </MessageWindow>*/}
            </main>
        </div>
    );
}
