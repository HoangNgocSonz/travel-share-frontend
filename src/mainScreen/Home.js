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
      <div>
        <Navbar showForm={this.showFormPostToHomePage}></Navbar>
        {this.state.displayPostForm && (
          <div id="FormPostToHomePages">
            <FormPostToHomePage
              hideForm={this.hideFormPostToHomePage}
            ></FormPostToHomePage>
          </div>
        )}
        <div>
          <FormSignIn showForm={this.showFormPostToHomePage}></FormSignIn>
          <FormSignUp showForm={this.showFormPostToHomePage}></FormSignUp>
        </div>
        <div className="postList">
          <PostList></PostList>
        </div>
        {/* <PostDetail _id="5f8a93f9615ed90023d6bbbf" /> */}
        {/* <UserDetail authorId="5f796dd318d2b23eac946be6" /> */}
      </div>
    );
  }
}
