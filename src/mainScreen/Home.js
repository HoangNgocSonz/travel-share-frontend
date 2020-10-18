import React, { Component } from "react";
import axios from "axios";
import FormPostToHomePage from "../component/FormPostToHomePage";
import Navbar from "../component/Navbar";
import "./Home.css";
import PostList from "../component/PostList";
import FormSignIn from "../component/FormSignIn";
import FormSignUp from "../component/FormSignUp";
import PostDetail from "../component/PostDetail";

export default class Read extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  showFormPostToHomePage = () => {
    document.getElementById("FormPostToHomePages").style.display = "block";
  };
  hideFormPostToHomePage = () => {
    document.getElementById("FormPostToHomePages").style.display = "none";
  };

  render() {
    return (
      <div>
        <Navbar showForm={this.showFormPostToHomePage}></Navbar>
        <div id="FormPostToHomePages">
          <FormPostToHomePage
            hideForm={this.hideFormPostToHomePage}
          ></FormPostToHomePage>
        </div>
        <div>
          <FormSignIn showForm={this.showFormPostToHomePage}></FormSignIn>
          <FormSignUp showForm={this.showFormPostToHomePage}></FormSignUp>
        </div>
        <div className="postList">
          <PostList></PostList>
        </div>
        {/* <PostDetail _id="5f8a93f9615ed90023d6bbbf" /> */}
      </div>
    );
  }
}
