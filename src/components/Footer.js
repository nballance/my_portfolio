import React from 'react'
import {makeStyles} from "@material-ui/styles"
import {
    BottomNavigation,
    BottomNavigationAction
} from "@material-ui/core"

import Resume_PDF from "../pdf/Resume.pdf";


import PictureAsPdfIcon from '@material-ui/icons/PictureAsPdf';

import {
    GitHub,
    LinkedIn,
} from "@material-ui/icons"

const useStyles = makeStyles({
    root: {
        color: "tan",

        "& .MuiBottomNavigationAction-root": {
            minWidth: 0,
            maxWidth: 250,
        },
        "& .MuiSvgIcon-root": {
            fill: "tan",
            "&:hover": {
                fill: "tomato",
                fontSize: "1.8rem"
            }
        },
    }
})

export const Footer = () => {
    const classes = useStyles()
    return (
        <BottomNavigation width="auto" style={{background: "#222"}}>
            
            <BottomNavigationAction
            className={classes.root}
            style={{ padding: 0 }} onClick={(e) =>{e.preventDefault(); window.open(Resume_PDF)}}
            icon = {
                <a href={Resume_PDF} target="_blank" rel="noreferrer">
                    <PictureAsPdfIcon />
                </a>
            }
            label="Resume"
            showLabel="true"
            
            />
            
            <BottomNavigationAction
            className={classes.root}
            style={{ padding: 0 }} onClick={(e) =>{e.preventDefault(); window.open("https://github.com/nballance" )}}
            icon = {
                <a href="https://github.com/nballance" target="_blank" rel="noreferrer">
                    <GitHub />
                </a>
            }
            label="GitHub"
            showLabel="true"
            />

            <BottomNavigationAction
            className={classes.root}
            style={{ padding: 0 }} onClick={(e) =>{e.preventDefault(); window.open("https://www.linkedin.com/in/nathan-ballance/")}}
            icon = {
                <a href="https://www.linkedin.com/in/nathan-ballance/" target="_blank" rel="noreferrer">
                    <LinkedIn />
                </a>
            }
            label="Linkedin"
            showLabel="true"
            />

        </BottomNavigation>
    )
}

export default Footer;