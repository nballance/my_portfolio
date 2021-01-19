import React, {useState} from "react";
import {Link} from "react-router-dom"
import { makeStyles } from "@material-ui/core/styles";
import MobilRightMenuSlider from "@material-ui/core/Drawer";
import Footer from "./Footer"
import {
AppBar,
Toolbar,
ListItem,
IconButton,
ListItemText,
ListItemIcon,
Avatar,
Divider,
List,
Typography,
Box,
Grid
} from "@material-ui/core";
import MenuIcon from '@material-ui/icons/Menu';
import {
    AssignmentInd,
    Home,
    Apps,
    ContactMail
} from "@material-ui/icons";
import avatar from "../FOR_ONLINE_RESUME.png";

// CSS Styles
const useStyles = makeStyles(theme => ({
    
    menuSliderContainer: {
        width: 250,
        background: "#511",
        height: "100%"
    },

    avatar: {
        display: "black",
        margin: "0.5rem auto",
        width: theme.spacing(13),
        height: theme.spacing(13)
    },

    listItem: {
        color: "tan"
    }

}));

const menuItems = [
    {
        listIcon: <Home/>,
        listText: "Home",
        listPath: "/"
    },
    {
        listIcon: <AssignmentInd/>,
        listText: "Resume",
        listPath: "/resume"
    },
    {
        listIcon: <Apps/>,
        listText: "Portfolio",
        listPath: "/portfolio"
    },
    {
        listIcon: <ContactMail/>,
        listText: "Contact",
        listPath: "/contacts"
    }
];

const Navbar = () => {

    const [state, setState] = useState({
        left: false
    });

    const toggleSlider = ((slider, open)=> () => {
        setState({ ...state, [slider]: open});
    });

    const classes = useStyles();

    const sideList = slider => (
        <Box className={classes.menuSliderContainer} component="div" onClick={toggleSlider(slider, false)}>
            <Avatar className={classes.avatar} src={avatar} alt="Nathan Ballance" />
            <Divider/>
            <List>
                {menuItems.map((lsItem, key) => (
                    <ListItem button key={key} component={Link} to={lsItem.listPath}>
                        <ListItemIcon className={classes.listItem}>{lsItem.listIcon}</ListItemIcon>
                        <ListItemText className={classes.listItem} primary={lsItem.listText} />
                    </ListItem>  
                ))}
            </List>
        </Box>
    );

    return (
        <>
        
        <Box component="nav">
            <AppBar position="fixed" style ={{background: "#222"}}>
                <Toolbar>
                    <IconButton onClick={toggleSlider("left", true)}>
                        <MenuIcon style={{color: "tomato"}}/>
                    </IconButton>
                    <Typography variant="h5" style={{color: "tan"}}>Portfolio</Typography>
                    
                    <Grid
                    container
                    direction="row"
                    justify="flex-end"
                    alignItems="flex-start">
                    <Grid item>
                        <Footer/>
                    </Grid>
                    </Grid>


                    <MobilRightMenuSlider anchor="left" open={state.left} onClose={toggleSlider("left", false)}>
                        {sideList("left")}


                    </MobilRightMenuSlider>
                </Toolbar>
            </AppBar>
        </Box>
        </>
    );
};

export default Navbar