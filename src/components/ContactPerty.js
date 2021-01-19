import React from "react";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import { TextField, Typography, Button, Grid, Box } from "@material-ui/core";
// import InputField from '@material-ui/core/TextField';

import SendIcon from "@material-ui/icons/Send";
import Navbar from "./Navbar";
import emailjs from "emailjs-com";

const useStyles = makeStyles(theme=>({
  form: {
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)",
      position: "absolute",
  },
  button: {
      marginTop: "1rem",
      color: "tomato",
      borderColor: "tomato",
  }
}))

const InputField = withStyles({
  root: {
      "& label.Mui-focused": {
          color: "tomato",
      },
      "& label": {
          color: "tan"
      },
      "& .MuiOutlinedInput-root": {
          "& fieldset": {
              borderColor: "tan"
          },
          "&:hover fieldset": {
              borderColor: "tan"
          },
          "&.Mui-focused fieldset": {
              borderColor: "tan"
          }
      }
  },

})(TextField);


export const Contacts = () => {
  const classes = useStyles()

  function sendEmail(e) {
    var aName = document.getElementById("nameID");
    aName.value = document.getElementById("name");
    var aEmail = document.getElementById("emailID");
    aEmail.value = document.getElementById("email");
    var aMessage = document.getElementById("messageID");
    aMessage.value = document.getElementById("message");
    
    e.preventDefault();


    var name = document.getElementById("nameID").value;
    var email = document.getElementById("emailID").value;
    alert("Email Submitted! Name is " + name + "  Email is " + email);

    var templateParams = {
      name: document.getElementById("nameID").value,
      email: document.getElementById("emailID").value,
      message: document.getElementById("messageID").value,
    };

    emailjs
      .sendForm(
        "gmail",
        "portfolio_template",
        e.target,
        "user_J8r9RC4Rk555sicdUCFNM"
      )
      .then(
        function (response) {
          console.log("SUCCESS!", response.status, response.text);
        },
        function (error) {
          console.log("FAILED...", error);
        }
      );
  }
  
  return (
    <Box component="div" style={{ background: "#233", height: "100vh" }}>
      <Navbar />
      <Grid container justify="center">
        <form onSubmit={sendEmail} id="contact-form">
        <Box component="form" className={classes.form}>
          <Typography
            variant="h5"
            style={{
              color: "tomato",
              textAlign: "center",
              textTransform: "uppercase",
            }}
          >
            Contact me...
          </Typography>

          <input type="hidden" id="nameID" name="contact_name" value="" />

          <InputField
            id="name"
            name="name"
            fullWidth={true}
            label="Name"
            variant="outlined"
            inputProps={{ style: { color: "white" } }}
            margin="dense"
            size="medium"
          />
          <br />


          <input type="hidden" id="emailID" name="contact_email" value=""/>


          <InputField
            id="email"
            name="email"
            fullWidth={true}
            label="Email"
            variant="outlined"
            inputProps={{ style: { color: "white" } }}
            margin="dense"
            size="medium"
          />
          <br />

          <input type="hidden" id="messageID"  name="contact_message" value="" />


          <InputField
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
          />
          <br />
          <Button
            type="submit"
            onClick={() => {
              sendEmail();
            }}
            className={classes.button}
            variant="outlined"
            fullWidth={true}
            endIcon={<SendIcon />}
          >
            Contact me
          </Button>
        </Box>
        </form>
      </Grid>
    </Box>
  );

};
export default Contacts;

// export default Contacts;

/*
function sendEmail() {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    alert("Email Submitted! Name is " + name + "  Email is " + email);

    var templateParams = {
      name: document.getElementById("name").value,
      email: document.getElementById("email").value,
      message: document.getElementById("message").value,
    };

    emailjs
      .send(
        "gmail",
        "portfolio_template",
        templateParams,
        "user_J8r9RC4Rk555sicdUCFNM"
      )
      .then(
        function (response) {
          console.log("SUCCESS!", response.status, response.text);
        },
        function (error) {
          console.log("FAILED...", error);
        }
      );
  }

  return (
    <Box component="div" style={{ background: "#233", height: "100vh" }}>
      <Navbar />
      <Grid container justify="center">
        <Box component="form" className={classes.form}>
          <Typography
            variant="h5"
            style={{
              color: "tomato",
              textAlign: "center",
              textTransform: "uppercase",
            }}
          >
            Contact me...
          </Typography>

          <InputField
            id="name"
            name="name"
            fullWidth={true}
            label="Name"
            variant="outlined"
            inputProps={{ style: { color: "white" } }}
            margin="dense"
            size="medium"
          />
          <br />
          <InputField
            id="email"
            name="email"
            fullWidth={true}
            label="Email"
            variant="outlined"
            inputProps={{ style: { color: "white" } }}
            margin="dense"
            size="medium"
          />
          <br />
          <InputField
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
          />
          <br />
          <Button
            type="submit"
            onClick={() => {
              sendEmail();
            }}
            className={classes.button}
            variant="outlined"
            fullWidth={true}
            endIcon={<SendIcon />}
          >
            Contact me
          </Button>
        </Box>
      </Grid>
    </Box>
  );
  */


  /*
    function sendEmail(e) {
    e.preventDefault();

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

  return (

    
    <div>
      <Navbar />
      <div className={classes.form}>
        <form onSubmit={sendEmail}>
          <div className={classes.form}>
            <div className="col-8 form-group mx-auto">
              <input
                type="text"
                className="form-control"
                placeholder="Name"
                name="name"
              />
            </div>
            <div class="input_info">
              <input
                type="email"
                className="form-control"
                placeholder="Email Address"
                name="email"
              />
            </div>

            <div className="col-8 form-group pt-2 mx-auto">
              <textarea
                className="form-control"
                id=""
                cols="30"
                rows="8"
                placeholder="Your message"
                name="message"
              ></textarea>
            </div>
            <div className={classes.button}>
              <input
                type="submit"
                className="btn btn-info"
                value="Send Message"
              ></input>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
  */