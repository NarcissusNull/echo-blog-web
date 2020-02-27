import React, {useState} from 'react';
import {Link as RouterLink} from 'react-router-dom';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import {makeStyles} from '@material-ui/styles';
import {AppBar, Toolbar, Badge, Hidden, IconButton} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import NotificationsIcon from '@material-ui/icons/NotificationsOutlined';
import InputIcon from '@material-ui/icons/Input';
import Typography from "@material-ui/core/Typography";
import SearchIcon from "@material-ui/icons/Search";
import InputBase from "@material-ui/core/InputBase";
import {fade} from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
    root: {
        boxShadow: 'none'
    },
    flexGrow: {
        flexGrow: 1
    },
    signOutButton: {
        marginLeft: theme.spacing(1)
    },
    menuButton: {
        marginRight: theme.spacing(2)
    },
    title: {
        flexGrow: 1,
        display: "none",
        [theme.breakpoints.up("sm")]: {
            display: "block"
        }
    },
    search: {
        position: "relative",
        borderRadius: theme.shape.borderRadius,
        backgroundColor: fade(theme.palette.common.white, 0.15),
        "&:hover": {
            backgroundColor: fade(theme.palette.common.white, 0.25)
        },
        marginLeft: 0,
        width: "100%",
        [theme.breakpoints.up("sm")]: {
            marginLeft: theme.spacing(1),
            width: "auto"
        }
    },
    searchIcon: {
        width: theme.spacing(7),
        height: "100%",
        position: "absolute",
        pointerEvents: "none",
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
    },
    inputRoot: {
        color: "inherit"
    },
    inputInput: {
        padding: theme.spacing(1, 1, 1, 7),
        transition: theme.transitions.create("width"),
        width: "100%",
        [theme.breakpoints.up("sm")]: {
            width: 120,
            "&:focus": {
                width: 200
            }
        }
    }
}));

const Topbar = props => {
    const {className, onSidebarOpen, ...rest} = props;

    const classes = useStyles();

    const [notifications] = useState([]);

    return (
        <AppBar
            {...rest}
            className={clsx(classes.root, className)}
        >
            <Toolbar>
                {/*<RouterLink to="/">*/}
                {/*    ECHO*/}
                {/*</RouterLink>*/}
                {/*<Hidden mdDown>*/}
                {/*    <IconButton color="inherit">*/}
                {/*        <Badge*/}
                {/*            badgeContent={notifications.length}*/}
                {/*            color="primary"*/}
                {/*            variant="dot"*/}
                {/*        >*/}
                {/*            <NotificationsIcon/>*/}
                {/*        </Badge>*/}
                {/*    </IconButton>*/}
                {/*    <IconButton*/}
                {/*        className={classes.signOutButton}*/}
                {/*        color="inherit"*/}
                {/*    >*/}
                {/*        <InputIcon/>*/}
                {/*    </IconButton>*/}
                {/*</Hidden>*/}
                {/*<Hidden lgUp>*/}
                {/*    <IconButton*/}
                {/*        color="inherit"*/}
                {/*        onClick={onSidebarOpen}*/}
                {/*    >*/}
                {/*        <MenuIcon/>*/}
                {/*    </IconButton>*/}
                {/*</Hidden>*/}
                <Typography className={classes.title} variant="h6" noWrap>
                    ECHO
                </Typography>
                <div className={classes.flexGrow}/>

                <div className={classes.search}>
                    <div className={classes.searchIcon}>
                        <SearchIcon/>
                    </div>
                    <InputBase
                        placeholder="Search…"
                        classes={{
                            root: classes.inputRoot,
                            input: classes.inputInput
                        }}
                        inputProps={{"aria-label": "search"}}
                    />
                </div>
            </Toolbar>
        </AppBar>
    );
};

Topbar.propTypes = {
    className: PropTypes.string,
    onSidebarOpen: PropTypes.func
};

export default Topbar;
