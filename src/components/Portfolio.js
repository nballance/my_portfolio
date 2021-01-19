import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Box,
  Grid,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
  Container,
} from "@material-ui/core";
import Navbar from "./Navbar";
import tuitionManager from "../images/tuition-manager.gif";
import pizzaManager from "../images/pizza-manager.gif";
import bmiCalculator from "../images/bmi-calculator.gif";
import train from "../images/train.gif";
import aStarSearch from "../images/a-star-search.gif";

const useStyles = makeStyles({
  mainContainer: {
    background: "#233",
    height: "100%",
  },

  button: {
    marginTop: "1rem",
    color: "tomato",
    borderColor: "tomato",
  },
  
  cardContainer: {
    maxWidth: 500,
    margin: "6rem auto",
    // height:"80%",
    // width:"100%",
    // // height: 600,
    // width: 700,
  },

  // mediaContainer: {
  //     height:"100%",
  //     width:"100%",
  // }
});

const Portfolio = () => {
  const classes = useStyles();
  return (
    <>
      <Box component="div" className={classes.mainContainer}>
        <Navbar />
        <Grid container justify="center">
          
          {/* Project 4 */}
          <Grid item xs={12} sm={8} md={6}>
            <Card className={classes.cardContainer} >
              <CardMedia
                // className={classes.mediaContainer}
                component="img"
                alt="Train Booking System"
                image={train}
              />
              <CardContent>
                <Typography gutterBottom variant="h5">
                  Train Booking System
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  An online railway booking system which uses HTML for the user
                  interface, MySQL for the database server, and Java,
                  Javascript, and JDBC for connectivity between the user
                  interface and database server. Virtual machine wih a web
                  server hoted under an EC2 instance of AWS.
                </Typography>
              </CardContent>
              <CardActions>
                <Button
                  className={classes.button}
                  variant="outlined"

                  size="small"
                  color="primary"
                  onClick={(e) => {
                    e.preventDefault();
                    window.open(
                      "https://github.com/nballance/TrainBookingDatabase"
                    );
                  }}
                >
                  View Repository
                </Button>
              </CardActions>
            </Card>
          </Grid>

          
          {/* Project 3 */}
          <Grid item xs={12} sm={8} md={6}>
            <Card className={classes.cardContainer}>
              <CardMedia
                // className={classes.mediaContainer}
                component="img"
                alt="Projec 3"
                image={bmiCalculator}
              />
              <CardContent>
                <Typography gutterBottom variant="h5">
                  BMI Calculator
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  Android app written in Java to take in a user's information to
                  calculate their bmi and give relevant advice to achieve an
                  ideal weight.
                </Typography>
              </CardContent>
              <CardActions>
                <Button
                                  className={classes.button}
                                  variant="outlined"
                  size="small"
                  color="primary"
                  onClick={(e) => {
                    e.preventDefault();
                    window.open("https://github.com/nballance/BMI_App");
                  }}
                >
                  View Repository
                </Button>
              </CardActions>
            </Card>
          </Grid>

          
          {/* Project 5 */}
          <Grid item xs={12} sm={8} md={6}>
            <Card className={classes.cardContainer}>
              <CardMedia
                // className={classes.mediaContainer}
                component="img"
                alt="A Star Search"
                image={aStarSearch}
              />
              <CardContent>
                <Typography gutterBottom variant="h5">
                  A* Search
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  A* path finding algorithm written in Python which details the
                  optimal path given different terrain which are easier or
                  harder to traverse.
                </Typography>
              </CardContent>
              <CardActions>
                <Button
                                  className={classes.button}
                                  variant="outlined"
                  size="small"
                  color="primary"
                  onClick={(e) => {
                    e.preventDefault();
                    window.open(
                      "https://github.com/nballance/A-Search-Algorithm"
                    );
                  }}
                >
                  View Repository
                </Button>
              </CardActions>
            </Card>
          </Grid>
          
          {/* Project 1 */}
          <Grid item xs={12} sm={8} md={6}>
            <Card className={classes.cardContainer}>
              <CardMedia>
                <img
                  src={tuitionManager}
                  style={{
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                  height="400"
                  width="100%"
                />
              </CardMedia>
              <CardContent>
                <Typography gutterBottom variant="h5">
                  Tuition Manager
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  JavaFX application to manage the tuitions of students.
                </Typography>
              </CardContent>

              <CardActions>
                <Button
                                  className={classes.button}
                                  variant="outlined"
                  size="small"
                  color="primary"
                  onClick={(e) => {
                    e.preventDefault();
                    window.open("https://github.com/nballance/Project_3");
                  }}
                >
                  View Repository
                </Button>
              </CardActions>
            </Card>
          </Grid>

          {/* Project 2 */}
          <Grid item xs={12} sm={8} md={6}>
            <Card className={classes.cardContainer}>
              <CardMedia
              // className={classes.mediaContainer}
              // component="img"
              // alt="Projec 2"
              // image={pizzaManager}
              >
                <img
                  src={pizzaManager}
                  style={{
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                  height="400"
                  width="100%"
                />
              </CardMedia>
              <CardContent>
                <Typography gutterBottom variant="h5">
                  Pizza Manager
                </Typography>

                <Typography variant="body2" color="textSecondary" component="p">
                  JavaFX application to manage a customer session at an online
                  pizza site. Change the size and toppings of pizza and add them
                  to a purchase. Then go to a checkout page and verify before
                  placing the order.
                </Typography>
              </CardContent>

              <CardActions>
                <Button
                                  className={classes.button}
                                  variant="outlined"
                  size="small"
                  color="primary"
                  onClick={(e) => {
                    e.preventDefault();
                    window.open("https://github.com/nballance/Project_4");
                  }}
                >
                  View Repository
                </Button>
              </CardActions>
            </Card>
          </Grid>

        </Grid>
      </Box>
    </>
  );
};

export default Portfolio;
