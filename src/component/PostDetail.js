import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./PostDetail.css";
import axios from "axios";

// Example use:
// <PostDetail _id="5f8a93f9615ed90023d6bbbf" />

export default class PostDetail extends Component {
  constructor(props) {
    super(props);
    this.render.bind(this);
    this.componentDidMount.bind(this);
    this.state = {};
  }

  componentDidMount() {
    //
    axios
      .get(
        `https://travel-share-backend.herokuapp.com/api/post/${this.props._id}`
      )
      .then((res) => {
        this.setState((prev) => ({ ...res.data.data }));
      })
      .then(() => {
        axios
          .get(
            `https://travel-share-backend.herokuapp.com/api/user/${this.state.author}`
          )
          .then((res) => {
            this.setState((prev) => ({
              ...prev,
              author: { ...res.data.data },
            }));
          })
          .catch((err) => console.log("err: " + err));
      })
      .catch((err) => console.log("err: " + err));
  }

  render() {
    // console.log(this.state);
    return (
      <div className="container  bg-midnight mt-4" id="post">
        <div className="post-img">
          <img
            // src="https://i.pinimg.com/originals/46/dc/dd/46dcdd45408a7aa3b607a03d21db06a7.jpg"
            src={this.state?.images}
            alt="img"
          />
        </div>
        <div className="post-info px-4 pt-3">
          <div>
            <h1 className="font-weight-bold post-title">
              {this.state.title || "undefined"}
            </h1>
            <p className="post-desc">{this.state.description}</p>
          </div>

          <div className="post-author clearfix">
            <div className="float-left">
              <div className="author-avatar float-left">
                <img src="http://placekitten.com/45/45" />
              </div>
              <div className="float-left">
                <h6 className="author-name font-weight-bold ">
                  {this.state.author?.username}
                </h6>
                <span className="sub-text">20 followers</span>
              </div>
            </div>
            <button className="btn btn-outline-info follow float-right">
              Follow
            </button>
            {/* <div className="clearfix"></div> */}
          </div>

          <div className="comments">
            <h5 className="font-weight-bold mb-0">Comments</h5>
            <div className="comment-box">
              <ul className="commentList">
                <li className="comment-item">
                  <div className="comment-avatar">
                    <img src="http://placekitten.com/50/50" />
                  </div>
                  <div className="comment-detail">
                    <h6 className="comment-author">sesaltme</h6>
                    <p className="comment-text">
                      Hello this is a test comment.
                    </p>
                    <span className="comment-date sub-text">
                      on March 5th, 2014
                    </span>
                  </div>
                </li>
                <li className="comment-item">
                  <div className="comment-avatar">
                    <img src="http://placekitten.com/40/40" />
                  </div>
                  <div className="comment-detail">
                    <h6 className="comment-author">username</h6>
                    <p className="comment-text">
                      Hello this is a test comment and this comment is
                      particularly very long and it goes on and on and on.
                    </p>
                    <span className="comment-date sub-text">
                      on March 5th, 2014
                    </span>
                  </div>
                </li>
              </ul>
              <form className="form-inline">
                <div className="form-group">
                  <input
                    className="form-control"
                    type="comment"
                    placeholder="Your comments"
                  />
                </div>
                <div className="form-group ">
                  <button className="btn btn-primary" type="submit">
                    Add
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
        {/* <h1>title</h1> */}
      </div>
    );
  }
}
