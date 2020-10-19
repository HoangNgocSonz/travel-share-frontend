import React, { Component } from "react";
import axios from "axios";
import "./UserDetail.css";
import StackGrid from "react-stack-grid";

export default class PostList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: { posts: [] },
      widthImg: 248,
    };
  }
  componentDidMount() {
    console.log("width:" + window.innerWidth);
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
      .get(
        `https://travel-share-backend.herokuapp.com/api/user/${this.props.authorId}/posts`
      )
      .then((res) => {
        this.setState((prev) => ({
          ...prev,
          user: res.data.data,
        }));
      })
      .catch((err) => console.log("err:" + err));
  }
  setWidth() {}
  render() {
    // console.log(this.state.user.posts);
    var postList = this.state.user.posts.map((post) => (
      <div className="DadImgShow" key={post._id}>
        <img className="imageToShowInHomePage" src={post.images[0]}></img>
        <p className="title">{post.title}</p>
      </div>
    ));
    return (
      <div className="my-5">
        <div class="panel profile-cover">
          <div class="profile-cover__img">
            <img
              src="https://bootdey.com/img/Content/avatar/avatar6.png"
              alt=""
            />
            <h3 class="h3">{this.state.user.username}</h3>
          </div>
          <div class="profile-cover__action bg--img" data-overlay="0.3">
            <button class="btn btn-rounded btn-info">
              <i class="fa fa-plus"></i>
              <span>Follow</span>
            </button>
            <button class="btn btn-rounded btn-info">
              <i class="fa fa-comment"></i>
              <span>Message</span>
            </button>
          </div>
          <div class="profile-cover__info">
            <ul class="nav">
              <li>
                <strong>26</strong>Posts
              </li>
              <li>
                <strong>33</strong>Followers
              </li>
              <li>
                <strong>136</strong>Following
              </li>
            </ul>
          </div>
        </div>
        <StackGrid columnWidth={this.state.widthImg}>{postList}</StackGrid>
      </div>
    );
  }
}
