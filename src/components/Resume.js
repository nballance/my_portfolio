import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Typography, Box } from "@material-ui/core";
import Navbar from "./Navbar";
import PictureAsPdfIcon from "@material-ui/icons/PictureAsPdf";
import { BottomNavigationAction } from "@material-ui/core";

const useStyle = makeStyles((theme) => ({
  mainContiner: {
    background: "#233",
    backgroundSize: "100%",
    padding: "3rem",
  },
  timeLine: {
    position: "relative",
    padding: "1rem",
    margin: "0 auto",
    "&:before": {
      content: "''",
      position: "absolute",
      height: "100%",
      border: "1px solid tan",
      right: "40px",
      top: 0,
    },
    "&:after": {
      content: "''",
      display: "table",
      clear: "both",
    },
    [theme.breakpoints.up("md")]: {
      padding: "2rem",
      "&:before": {
        left: "calc(50% - 1px)",
        right: "auto",
      },
    },
  },

  timeLineItem: {
    padding: "1rem",
    borderBottom: "2px solid tan",
    position: "relative",
    margin: "1rem 3rem 1rem 1rem",
    clear: "both",
    "&:after": {
      content: "''",
      position: "absolute",
    },
    "&:before": {
      content: "''",
      position: "absolute",
      right: "-0.625rem",
      top: "calc(50% - 5px)",
      borderStyle: "solid",
      borderColor: "tomato tomato transparent transparent",
      borderWidth: "0.625rem",
      transform: "rotate(45deg)",
    },
    [theme.breakpoints.up("md")]: {
      width: "44%",
      margin: "1rem",
      "&:nth-of-type(2n)": {
        float: "right",
        margin: "1rem",
        borderColor: "tan",
      },
      "&:nth-of-type(2n):before": {
        right: "auto",
        left: "-0.625rem",
        borderColor: "transparent transparent tomato tomato",
      },
    },
  },

  timeLineYear: {
    textAlign: "center",
    maxWidth: "9.375rem",
    margin: "0 3rem 0 auto",
    fontSize: "1.8rem",
    background: "tomato",
    color: "white",
    lineHeight: 1,
    padding: "0.5rem 0 1rem",
    "&:before": {
      display: "none",
    },
    [theme.breakpoints.up("md")]: {
      textAlign: "center",
      margin: "0 auto",
      "&:nth-of-type(2n)": {
        float: "none",
        margin: "0 auto",
      },
      "&:nth-of-type(2n):before": {
        display: "none",
      },
    },
  },
  heading: {
    color: "tomato",
    padding: "3rem 0",
    textTransform: "uppercase",
  },
  subHeading: {
    color: "white",
    padding: "0",
    textTransform: "uppercase",
  },

  pdfContainer: {
    padding: "12",
  },
  pdfHeading: {
    color: "tomato",
    margin: "3rem",
    padding: "3rem 0",
    textTransform: "uppercase",
  },
  root: {
    "& .MuiBottomNavigationAction-root": {
      minWidth: 0,
      maxWidth: 250,
    },
    "& .MuiSvgIcon-root": {
      fill: "tan",
      "&:hover": {
        fill: "tomato",
        fontSize: "1.8rem",
      },
    },
  },
}));

const Resume = () => {
  const classes = useStyle();

  return (
    <>
      <Navbar />

      <Box component="header" className={classes.mainContiner}>
        <Typography variant="h4" align="center" className={classes.heading}>
          working experience
        </Typography>
        <Box component="div" className={classes.timeLine}>
          
        <Typography
            variant="h2"
            className={`${classes.timeLineYear} ${classes.timeLineItem} `}
          >
            2015-2016
          </Typography>
          <Box component="div" className={classes.timeLineItem}>
            <Typography
              variant="h5"
              align="center"
              className={classes.subHeading}
            >
              Wedding Venue
            </Typography>
            <Typography
              variant="body1"
              align="center"
              style={{ color: "tomato" }}
            >
              The Farmhouse at the Grand Colonial-Hampton, NJ
            </Typography>
            <Typography
              variant="subtitle1"
              align="left"
              style={{ color: "tan" }}
            >
              Responsible for organizing and judging needs of restaurant.
              Assisted in garde-manger station when needed.
            </Typography>
          </Box>
          
          <Typography
            variant="h2"
            className={`${classes.timeLineYear} ${classes.timeLineItem} `}
          >
            2016-2018
          </Typography>
          <Box component="div" className={classes.timeLineItem}>
            <Typography
              variant="h5"
              align="center"
              className={classes.subHeading}
            >
              Programming Educator
            </Typography>
            <Typography
              variant="body1"
              align="center"
              style={{ color: "tomato" }}
            >
              Union Twp Middle School-Hampton, NJ
            </Typography>
            <Typography
              variant="subtitle1"
              align="left"
              style={{ color: "tan" }}
            >
              Taught basic programming skills to children at local middle
              school. Used applications, such as, Scratch to teach fundamental
              concepts including variables, loops, and other general programming
              logic.
            </Typography>
          </Box>

          <Typography
            variant="h2"
            className={`${classes.timeLineYear} ${classes.timeLineItem} `}
          >
            2019
          </Typography>
          <Box component="div" className={classes.timeLineItem}>
            <Typography
              variant="h5"
              align="center"
              className={classes.subHeading}
            >
              Stone Mason
            </Typography>
            <Typography
              variant="body1"
              align="center"
              style={{ color: "tomato" }}
            >
              Rep Masonry-Manville, NJ
            </Typography>
            <Typography
              variant="subtitle1"
              align="left"
              style={{ color: "tan" }}
            >
              Independently worked on contract jobs to fulfill requirements of
              customers.
            </Typography>
          </Box>

          <Typography
            variant="h2"
            className={`${classes.timeLineYear} ${classes.timeLineItem} `}
          >
            2020-2021
          </Typography>
          <Box component="div" className={classes.timeLineItem}>
            <Typography
              variant="h5"
              align="center"
              className={classes.subHeading}
            >
              Assembled, Programmed, and Tested Products
            </Typography>
            <Typography
              variant="body1"
              align="center"
              style={{ color: "tomato" }}
            >
              IOTecha-Cranbury, NJ
            </Typography>
            <Typography
              variant="subtitle1"
              align="left"
              style={{ color: "tan" }}
            >
              Assembled hardware and installed software to be used across smart electric vehicle charging applications.
              Performed testing and quality assurance on products to be directly sold to multi-billion-dollar automobile manufacturers.
            </Typography>
          </Box>

          <Typography
            variant="h2"
            className={`${classes.timeLineYear} ${classes.timeLineItem} `}
          >
            2017-2021
          </Typography>
          <Box component="div" className={classes.timeLineItem}>
            <Typography
              variant="h5"
              align="center"
              className={classes.subHeading}
            >
              Computer Science Undergraduate
            </Typography>
            <Typography
              variant="body1"
              align="center"
              style={{ color: "tomato" }}
            >
              Rutgers University-New Brunswick
            </Typography>
            <Typography
              variant="subtitle1"
              align="left"
              style={{ color: "tan" }}
            >
              Maintained a 3.5 GPA at an accredited state university. Received
              A's in crucial courses, such as, Data Strucures, Discrete
              Mathematics, Algorithms, Internet Technology, and Artificial
              Intelligence!
            </Typography>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Resume;
