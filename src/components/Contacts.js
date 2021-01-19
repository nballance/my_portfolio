import emailjs from "emailjs-com";
import React from "react";
import { TextField, Typography, Button, Grid, Box } from "@material-ui/core";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import Navbar from "./Navbar";
import SendIcon from "@material-ui/icons/Send";
import Paper from "@material-ui/core/Paper";

const useStyles = makeStyles((theme) => ({
  form: {
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    position: "absolute",
    width: "500px",
  },
  button: {
    marginTop: "1rem",
    color: "tomato",
    borderColor: "tomato",
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
}));

const CssTextField = withStyles({
  root: {
    "& label.Mui-focused": {
      color: "tomato",
    },
    "& label": {
      color: "tan",
    },
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: "tan",
      },
      "&:hover fieldset": {
        borderColor: "tan",
      },
      "&.Mui-focused fieldset": {
        borderColor: "tan",
      },
    },
  },
})(TextField);

function sendEmail(e) {
  e.preventDefault();

  alert("Email Sent!");

  emailjs
    .sendForm(
      "gmail",
      "portfolio_template",
      e.target,
      "user_J8r9RC4Rk555sicdUCFNM"
    )
    .then(
      (result) => {
        console.log(result.text);
      },
      (error) => {
        console.log(error.text);
      }
    );
  e.target.reset();
}

const Contacts = () => {
  const classes = useStyles();

  return (
    <div>
      <Navbar />
      <form
        onSubmit={sendEmail}
        style={{ background: "#233", height: "100vh" }}
      >
        <Grid container>
          <Box
            style={{
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              position: "absolute",
              width: "500px",
            }}
          >
            <Typography
              variant="h2"
              style={{
                color: "tomato",
                textAlign: "center",
              }}
            >
              Let's Talk
            </Typography>

            <br />

            <CssTextField
              id="outlined-basic"
              variant="outlined"
              inputProps={{ style: { color: "white" } }}
              fullWidth={true}
              label="Name"
              margin="dense"
              size="medium"
              type="text"
              className="form-control"
              name="name"
              required
            />

            <br />

            <CssTextField
              id="outlined-basic"
              variant="outlined"
              inputProps={{ style: { color: "white" } }}
              fullWidth={true}
              label="Email"
              margin="dense"
              size="medium"
              type="email"
              className="form-control"
              name="email"
              required
            />

            <br />

            <CssTextField
              id="message"
              name="message"
              multiline
              rowsMax={4}
              fullWidth={true}
              label="Leave your message here"
              variant="outlined"
              inputProps={{ style: { color: "white", height: 100 } }}
              margin="dense"
              size="medium"
              className="form-control"
              id=""
              cols="30"
              rows="8"
              name="message"
            />

            <br />

            <Button
              variant="outlined"
              fullWidth={true}
              endIcon={<SendIcon />}
              className={classes.button}
              type="submit"
              value="Send Message"
            >
              Contact me
            </Button>
          </Box>
        </Grid>
      </form>
    </div>
  );
};

export default Contacts;
