import React, { Component } from "react";
import axios from "axios";
import FormPostToHomePage from "../component/FormPostToHomePage";
import Navbar from "../component/Navbar";
import "./Home.css";
import PostList from "../component/PostList";
import Select from "../component/Select";
import FormSignIn from "../component/FormSignIn";
import FormSignUp from "../component/FormSignUp";

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loggedIn: localStorage.user === "true",
    };
  }
  showFormPostToHomePage = () => {
    document.getElementById("FormPostToHomePages").style.display = "block";
    document.getElementById("postList").style.display = "none";
  };
  hideFormPostToHomePage = () => {
    document.getElementById("FormPostToHomePages").style.display = "none";
    document.getElementById("postList").style.display = "block";
  };
  login() {
    document.getElementById("FormLogin").style.display = "block";
    document.getElementById("postList").style.display = "none";
  }

  signInSuccess = () => {
    localStorage.user = "true";
    this.setState({
      loggedIn: true,
    });
  };

  render() {
    return (
      <div id="homePage">
        <Navbar
          loggedIn={this.state.loggedIn}
          login={this.login}
          showForm={this.showFormPostToHomePage}
        ></Navbar>
        <div id="FormPostToHomePages">
          <FormPostToHomePage
            hideForm={this.hideFormPostToHomePage}
          ></FormPostToHomePage>
        </div>
        <div className="FormLogin" id="FormLogin">
          <FormSignIn signInSuccess={this.signInSuccess}></FormSignIn>
        </div>
        {/* <div>
          <FormSignUp></FormSignUp>
        </div> */}
        <div className="postList" id="postList">
          <PostList></PostList>
        </div>
      </div>
    );
  }
}
