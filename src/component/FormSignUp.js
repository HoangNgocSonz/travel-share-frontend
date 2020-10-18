import React, { Component } from "react";
import "./FormSignUp.css";

export default class Login extends Component {
    render() {
        return (
            <form class="form-sign-up">
                <h1>Đăng ký</h1>
                <input placeholder="Tên đăng nhập" type="text" required=""/>
                <input placeholder="Email" type="email" required=""/>
                <input id="pass" placeholder="Mật khẩu" type="password"/>
                <input id="cf-pass" placeholder="Xác nhận mật khẩu" type="password"/>
                <button>Đăng ký</button>
                <div class="go-sign-in">
                    <p>Bạn đã có tài khoản? </p>
                    <a href="#link">Đăng nhập</a>
                </div>
            </form>
        );
    }
}