import React, { Component } from "react";

import LoginForm from "./LoginForm";

import CONSTANTS from '../../constants';
const { ENDPOINT } = CONSTANTS;

export default class Login extends Component {
  state = {
      email: '',
      password: ''
  };

  componentDidMount() {
      // TODO check if logged, redirect
  }

  onSubmit = (email, password) => {
    if (!email || !password) {
      // TODO prompt
      return;
    }

    fetch(ENDPOINT.LOGIN, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email,
        password
      })
    })
      .then(response => {
        if (!response.ok) {
          throw Error(response.statusText);
        }
        return response.json();
      })
      .then(token => {
          // TODO auth
      })
      .catch(error =>
        error // TODO
      );
  }

  render() {
    return (
      <main id="mainContent" className="container">
        <div className="row mx-auto" style={{width: "300px"}}>
          <div className="col mt-5 p-0">
            <h3>Login</h3>
          </div>
          <div className="col-12 p-0">
            <LoginForm
              login={this.onSubmit}
            />
          </div>
        </div>
      </main>
    );
  }
}
