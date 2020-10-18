import React, { Component } from "react";
import axios from "axios";
import FormPostToHomePage from "../component/FormPostToHomePage";
import Navbar from "../component/Navbar";
import "./Home.css";
import PostList from "../component/PostList";
import Select from "../component/Select";

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
        <Select></Select>
        <Navbar showForm={this.showFormPostToHomePage}></Navbar>
        <div id="FormPostToHomePages">
          <FormPostToHomePage
            hideForm={this.hideFormPostToHomePage}
          ></FormPostToHomePage>
        </div>
        <div className="postList">
          <PostList></PostList>
        </div>
      </div>
    );
  }
}
