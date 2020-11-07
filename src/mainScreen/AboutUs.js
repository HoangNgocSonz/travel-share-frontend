import React, { Component } from "react";
import "./AboutUs.css";

export default class Login extends Component {
  render() {
    return (
      <div class="contain-per">
        <div>
          <h2 class="title">THÀNH VIÊN NHÓM 20 </h2>
        </div>
        <div class="about-us">
          <div id="per01" class="per">
            <img class="avt" src={require("../access/son.jpg")} alt="pic"></img>
            <h3 class="name">Hoàng Ngọc Sơn</h3>
            <h4 class="position">Nhóm trưởng</h4>
            <p class="per-id">18021085</p>
            <p class="birth">01/10/2000</p>
            <a class="email" href="#link">
              <img src={require("../access/email-logo.png")} alt="img"></img>
            </a>
            <a class="fb" href="#link">
              <img src={require("../access/fb-logo.png")} alt="img"></img>
            </a>
            <a class="mess" href="#link">
              <img src={require("../access/mess-logo.png")} alt="img"></img>
            </a>
          </div>
          <div id="per02" class="per">
            <img
              class="avt"
              src={require("../access/cuong.jpg")}
              alt="pic"
            ></img>
            <h3 class="name">Lê Mạnh Cường</h3>
            <h4 class="position">Thành viên</h4>
            <p class="per-id">18021085</p>
            <p class="birth">01/10/2000</p>
            <a class="email" href="#link">
              <img src={require("../access/email-logo.png")} alt="img"></img>
            </a>
            <a class="fb" href="#link">
              <img src={require("../access/fb-logo.png")} alt="img"></img>
            </a>
            <a class="mess" href="#link">
              <img src={require("../access/mess-logo.png")} alt="img"></img>
            </a>
          </div>
          <div id="per03" class="per">
            <img class="avt" src={require("../access/avt.jpg")} alt="pic"></img>
            <h3 class="name">Nông Thị Diễm</h3>
            <h4 class="position">Thành viên</h4>
            <p class="per-id">18021085</p>
            <p class="birth">01/10/2000</p>
            <a class="email" href="#link">
              <img src={require("../access/email-logo.png")} alt="img"></img>
            </a>
            <a class="fb" href="#link">
              <img src={require("../access/fb-logo.png")} alt="img"></img>
            </a>
            <a class="mess" href="#link">
              <img src={require("../access/mess-logo.png")} alt="img"></img>
            </a>
          </div>
          <div id="per04" class="per">
            <img
              class="avt"
              src={require("../access/xuan.jpg")}
              alt="pic"
            ></img>
            <h3 class="name">Nguyễn Văn Xuân</h3>
            <h4 class="position">Thành viên</h4>
            <p class="per-id">18021085</p>
            <p class="birth">01/10/2000</p>
            <a class="email" href="#link">
              <img src={require("../access/email-logo.png")} alt="img"></img>
            </a>
            <a class="fb" href="#link">
              <img src={require("../access/fb-logo.png")} alt="img"></img>
            </a>
            <a class="mess" href="#link">
              <img src={require("../access/mess-logo.png")} alt="img"></img>
            </a>
          </div>
        </div>
      </div>
    );
  }
}
