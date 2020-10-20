import React, { Component } from "react";
import axios from "axios";
import FormPostToHomePage from "../component/FormPostToHomePage";
import Navbar from "../component/Navbar";
import "./Home.css";
import PostList from "../component/PostList";
import Select from "../component/Select";
import FormSignIn from "../component/FormSignIn";
import FormSignUp from "../component/FormSignUp";
import PostDetail from "../component/PostDetail";
import UserDetail from "../component/UserDetail";

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
    this.refreshPage();
  };
  signout = () => {
    localStorage.user = "false";
    this.refreshPage();
  };
  refreshPage = () => {
    window.location.reload(false);
  };
  showFromSignUp = () => {
    document.getElementById("FormLogin").style.display = "none";
    document.getElementById("FormSignUp").style.display = "block";
  };
  signUpToSignIn = () => {
    console.log("eee");
    document.getElementById("FormLogin").style.display = "block";
    document.getElementById("FormSignUp").style.display = "none";
  };
  render() {
    return (
      <div id="homePage">
        <Navbar
          signout={this.signout}
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
          <FormSignIn
            showFromSignUp={this.showFromSignUp}
            signInSuccess={this.signInSuccess}
          ></FormSignIn>
        </div>
        <div className="FormSignUp" id="FormSignUp">
          <FormSignUp signUpToSignIn={this.signUpToSignIn}></FormSignUp>
        </div>
        <div className="postList" id="postList">
          <PostList></PostList>
        </div>
        {/* <PostDetail _id="5f8a93f9615ed90023d6bbbf" /> */}
        {/* <UserDetail authorId="5f796dd318d2b23eac946be6" /> */}
      </div>
    );
  }
}
