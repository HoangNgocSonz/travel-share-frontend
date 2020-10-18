import React, { Component } from "react";
import "./FormSignIn.css";

export default class Login extends Component {
  render() {
    return (
      <form class="form-sign-in">
        <h1>Đăng nhập</h1>
        <input placeholder="Email" type="email" required=""/>
        <input placeholder="Mật khẩu" type="password" required=""/>
        <button>Đăng nhập</button>
        <a href="#link">Quên mật khẩu?</a>
        <div class="create-acc">
          <p>Bạn chưa có tài khoản? </p>
          <a href="#link">Đăng ký</a>
        </div>
      </form>
    );
  }
}
