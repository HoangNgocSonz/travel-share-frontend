import React, { Component } from "react";
import axios from "axios";
import FormPostToHomePage from "./FormPostToHomePage";
import Navbar from "./Navbar";
import "./Home.css";
import PostDetail from "./PostDetail";

export default class Read extends Component {
  constructor(props) {
    super(props);
    this.state = {
      chapter: [],
      showForm: false,
    };
  }
  showFormPostToHomePage = () => {
    document.getElementById("FormPostToHomePages").style.display = "block";
  };
  hideFormPostToHomePage = () => {
    document.getElementById("FormPostToHomePages").style.display = "none";
  };
  componentDidMount() {
    axios
      .get(`https://travel-share-backend.herokuapp.com/api/user`)
      .then((res) => {})
      .catch((error) => console.log(error));
  }

  render() {
    var images;
    if (this.state.chapter !== 0) {
      images = this.state.chapter?.imageLink?.map((link) => (
        <img className="img" src={link} alt="img"></img>
      ));
    }
    return (
      <div>
        <Navbar showForm={this.showFormPostToHomePage}></Navbar>
        <div id="FormPostToHomePages">
          <FormPostToHomePage
            hideForm={this.hideFormPostToHomePage}
          ></FormPostToHomePage>
        </div>
        {/* <PostDetail _id="5f8a93f9615ed90023d6bbbf" /> */}
      </div>
    );
  }
}
