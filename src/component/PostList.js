import React, { Component } from "react";
import axios from "axios";
import "./PostList.css";
import StackGrid from "react-stack-grid";

export default class PostList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      postList: [],
      widthImg: 248,
    };
  }
  componentDidMount() {
    if (window.innerWidth < 900 && window.innerWidth > 372) {
      this.setState({
        widthImg: 176,
      });
    }
    if (window.innerWidth <= 372) {
      this.setState({
        widthImg: 160,
      });
    }
    if (window.innerWidth < 340) {
      this.setState({
        widthImg: 140,
      });
    }
    if (window.innerWidth < 300) {
      this.setState({
        widthImg: 120,
      });
    }
    axios
      .get("https://travel-share-backend.herokuapp.com/api/post")
      .then((res) => {
        this.setState({
          postList: res.data.data,
        });
      })
      .catch((err) => console.log("err:" + err));
  }
  render() {
    var postList = this.state.postList.map((post) => (
      <div className="DadImgShow" key={post._id}>
        <img className="imageToShowInHomePage" src={post.images[0]}></img>
        <p className="title">{post.title}</p>
      </div>
    ));

    return (
      <div>
        <StackGrid columnWidth={this.state.widthImg}>{postList}</StackGrid>
      </div>
    );
  }
}
