import React, { Component } from "react";
import axios from "axios";
import "./FormPostToHomePage.css";

export default class FormPostToHomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {}
  post = () => {
    var imageLinkString = document.getElementById("imgLink").value;
    var imageLinkList = imageLinkString.split(",");

    axios
      .post("https://travel-share-backend.herokuapp.com/api/post", {
        author: "5f7a012776547955016262e6",
        title: document.getElementById("title").value,
        description: document.getElementById("description").value,
        images: imageLinkList,
        date: new Date(),
        season: document.getElementById("season").value,
      })
      .then((res) => {
        console.log(res.data);
        console.log(document.getElementById("title").value);
      })
      .catch((err) => console.log("err: " + err));
  };

  render() {
    return (
      <div>
        <br></br>
        <div class="form">
          <div class="top">
            <span>Tạo bài viết</span>
            <img
              src={require("../access/x-png-18.png")}
              onClick={this.props.hideForm}
            ></img>
          </div>
          <div className="middle">
            <img src={require("../access/avatar_2009.jpg")}></img>
            <input type="text" id="title" placeholder="Tiêu đề"></input>
            <textarea
              id="description"
              className="textarea"
              rows="2"
              cols="50"
              placeholder="Miêu tả"
            ></textarea>
          </div>
          <div className="hr"></div>
          <div className="bottom">
            <div className="addImg">
              <img src={require("../access/img.png")}></img>
              <input id="imgLink" placeholder="Link ảnh"></input>
            </div>
            <div className="addTime">
              <select className="select" id="season">
                <option>Mùa xuân</option>
                <option>Mùa Hạ</option>
                <option>Mùa thu</option>
                <option>Mùa đông</option>
              </select>
            </div>
            <br className="clear" />
            <div className="addLocation"></div>
            <button className="post" onClick={this.post}>
              Đăng
            </button>
          </div>
        </div>
      </div>
    );
  }
}
