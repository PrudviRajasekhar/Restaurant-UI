import {
  Box,
  Button,
  Container,
  TextField,
  Typography,
} from "@material-ui/core";
import React, { Component } from "react";
import Header from "./Header";
import Home from "./Home";
import UserSelfReg from "../media/UserSelfReg.png";

export class Signup extends Component {
  constructor(props) {
    super(props);

    this.state = {
      fname: "",
      lname: "",
      email: "",
      userId: "",
      password: "",
    };
    this.readForm = this.readForm.bind(this);
    this.doRegister = this.doRegister.bind(this);
  }

  readForm = (e) => {
    //console.log(e.target.value);
    this.setState({ [e.target.name]: e.target.value });
  };

  doRegister = (e) => {
    console.log(" In Do Register");
    let user = {
      fname: this.state.fname,
      lname: this.state.lname,
      email: this.state.email,
      password: this.state.password,
      UserId: this.state.userId,
    };
    console.log("user registration data is");
    console.log(JSON.stringify(user));
  };
  render() {
    return (
      <div>
        <Header />

        <Container maxWidth="sm">
          <Box
            bgcolor="white"
            boxShadow="2"
            borderRadius="12px"
            textAlign="text"
            p="24px"
            mt="50px"
          >
            <Typography color="primary">
              <img src={UserSelfReg} height="80px"></img>
              User Self Registration
            </Typography>

            <TextField
              id="outlined-required"
              label="First Name"
              //defaultValue="Hello World"
              variant="outlined"
              type="text"
              color="primary"
              fullWidth
              margin="normal"
              size="normal"
              name="fname"
              onChange={this.readForm}
            />
            <TextField
              id="outlined-required"
              label="Last Name"
              //defaultValue="Hello World"
              variant="outlined"
              type="text"
              color="primary"
              fullWidth
              margin="normal"
              size="normal"
              name="lname"
              onChange={this.readForm}
            />
            <TextField
              id="outlined-required"
              label="Email"
              //defaultValue="Hello World"
              variant="outlined"
              type="text"
              color="primary"
              fullWidth
              margin="normal"
              size="normal"
              name="email"
              onChange={this.readForm}
            />
            <TextField
              id="outlined-required"
              label="User Id"
              //defaultValue="Hello World"
              variant="outlined"
              type="text"
              color="primary"
              fullWidth
              margin="normal"
              size="normal"
              name="userId"
              onChange={this.readForm}
            />
            <TextField
              id="outlined-required"
              label="Password"
              //defaultValue="Hello World"
              variant="outlined"
              type="password"
              color="primary"
              fullWidth
              margin="normal"
              size="normal"
              name="password"
              onChange={this.readForm}
            />
            <br />
            <br />
            <Button
              variant="contained"
              color="primary"
              fullWidth
              onClick={this.doRegister}
            >
              Register
            </Button>
          </Box>
        </Container>
      </div>
    );
  }
}

export default Signup;
