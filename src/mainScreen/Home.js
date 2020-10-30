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
import NotFound from "../component/NotFound";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
} from "react-router-dom";

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loggedIn: !!localStorage.user,
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

  signInSuccess = (user) => {
    localStorage.user = JSON.stringify(user);
    this.setState((prev) => ({ ...prev, loggedIn: true }));
    // this.refreshPage();
  };
  signout = () => {
    localStorage.removeItem("user");
    this.setState((prev) => ({ ...prev, loggedIn: false }));
    // this.refreshPage();
  };
  // refreshPage = () => {
  //   window.location.reload(false);
  // };
  render() {
    return (
      <Router>
        <Navbar
          signout={this.signout}
          loggedIn={this.state.loggedIn}
          login={this.login}
          showForm={this.showFormPostToHomePage}
        ></Navbar>
        {this.state.displayPostForm && (
          <div id="FormPostToHomePages">
            <FormPostToHomePage
              hideForm={this.hideFormPostToHomePage}
            ></FormPostToHomePage>
          </div>
        )}
        <Switch>
          <Route path="/" exact>
            <div className="postList">
              <PostList />
            </div>
          </Route>
          <Route path="/user/:id" component={UserDetail} />
          <Route path="/post/:id" component={PostDetail} />
          <Route path="/signin">
            <div className="FormLogin" id="FormLogin">
              <FormSignIn signInSuccess={this.signInSuccess}></FormSignIn>
            </div>
            {/* <FormSignIn showForm={this.showFormPostToHomePage}></FormSignIn> */}
          </Route>
          <Route path="/signup">
            <FormSignUp />
            {/* <FormSignUp showForm={this.showFormPostToHomePage}></FormSignUp> */}
          </Route>
          <Route component={NotFound} />
        </Switch>
      </Router>
      /* <PostDetail _id="5f8a93f9615ed90023d6bbbf" /> */
    );
  }
}
