import Axios from "axios";
import React, { Component } from "react";
import "./FormSignIn.css";
import axios from "axios";

export default class Login extends Component {
  startLogin = () => {
    console.log(document.getElementById("email").value);
    axios
      .get("https://travel-share-backend.herokuapp.com/api/user", {
        params: { email: `${document.getElementById("email").value}` },
      })
      .then((res) => {
        console.log(res.data.data[0]);
        if (
          res.data.data[0].password == document.getElementById("password").value
        ) {
          this.props.signInSuccess();
        }
      })
      .catch((err) => console.log("err: " + err));
  };
  render() {
    return (
      <form class="form-sign-in">
        <h1>Đăng nhập</h1>
        <input placeholder="Email" id="email" type="email" required="" />
        <input
          placeholder="Mật khẩu"
          id="password"
          type="password"
          required=""
        />
        <button onClick={this.startLogin}>Đăng nhập</button>
        <a href="#link">Quên mật khẩu?</a>
        <div class="create-acc">
          <p>Bạn chưa có tài khoản? </p>
          <a href="#link">Đăng ký</a>
        </div>
      </form>
    );
  }
}
