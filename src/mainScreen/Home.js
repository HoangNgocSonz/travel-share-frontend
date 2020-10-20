import React, { Component } from "react";
import axios from "axios";
import FormPostToHomePage from "../component/FormPostToHomePage";
import Navbar from "../component/Navbar";
import "./Home.css";
import PostList from "../component/PostList";
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
export default class Read extends Component {
  constructor(props) {
    super(props);
    this.state = {
      displayPostForm: false,
    };
  }
  showFormPostToHomePage = () => {
    this.setState((prev) => ({ ...prev, displayPostForm: true }));
  };
  hideFormPostToHomePage = () => {
    this.setState((prev) => ({ ...prev, displayPostForm: false }));
  };

  render() {
    return (
      <Router>
        <Navbar showForm={this.showFormPostToHomePage}></Navbar>
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
            <FormSignIn showForm={this.showFormPostToHomePage}></FormSignIn>
          </Route>
          <Route path="/signup">
            <FormSignUp showForm={this.showFormPostToHomePage}></FormSignUp>
          </Route>
          <Route component={NotFound} />
        </Switch>
      </Router>
      // <div>
      //   <div>
      //   </div>
      /* <PostDetail _id="5f8a93f9615ed90023d6bbbf" /> */
      // </div>
    );
  }
}
