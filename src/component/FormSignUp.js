import React, { Component } from "react";
import "./FormSignUp.css";

export default class Login extends Component {
    render() {
        return (
            <form class="form-sign-up">
                <h1>Sign up</h1>
                <input placeholder="Username" type="text"/>
                <input placeholder="Email" type="email" />
                <input placeholder="Password" type="password"/>
                <input placeholder="Confirm Password" type="password"/>
                <button>Sign up</button>
                <div class="go-sign-in">
                    <p>Already have an account? </p>
                    <a href="#link">Sign in here</a>
                </div>
            </form>
        );
    }
}