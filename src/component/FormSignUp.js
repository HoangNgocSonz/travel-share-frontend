import React, { Component } from "react";
import "./FormSignUp.css";

export default class Login extends Component {
    render() {
        return (
            <form class="form-sign-up">
                <h1>Sign up</h1>
                <input placeholder="Username" type="text" required=""/>
                <input placeholder="Email" type="email" required=""/>
                <input id="pass" placeholder="Password" type="password"/>
                <input id="cf-pass" placeholder="Confirm Password" type="password"/>
                <button>Sign up</button>
                <div class="go-sign-in">
                    <p>Already have an account? </p>
                    <a href="#link">Sign in here</a>
                </div>
            </form>
        );
    }
}