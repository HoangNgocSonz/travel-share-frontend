import React, { Component } from "react";
import "./FormSignIn.css";

export default class Login extends Component {
  render() {
    return (
      <form class="form-sign-in">
        <h1>Sign in</h1>
        <input placeholder="Email" type="email" required=""/>
        <input placeholder="Password" type="password" required=""/>
        <button>Sign in</button>
        <a href="#link">Forgot Password?</a>
        <div class="create-acc">
          <p>Don't have an account? </p>
          <a href="#link">Create one</a>
        </div>
      </form>
    );
  }
}
