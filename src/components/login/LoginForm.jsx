import React, { Component } from 'react';

export default class LoginForm extends Component {
  state = {
    email: '',
    password: ''
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.login(this.state.email, this.state.password);
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit} className="input-group flex-column">
        <input
          type="email"
          onChange={this.handleChange}
          value={this.state.email}
          name="email"
          className="form-control"
          placeholder="Enter e-mail"
          aria-label="Enter e-mail"
          required
        />
        <input
          type="password"
          onChange={this.handleChange}
          value={this.state.password}
          name="password"
          className="form-control"
          placeholder="Enter password"
          aria-label="Enter password"
          minLength="6"
          pattern=".*[0-9].*"
          title="Password must contain at least one digit."
          required
        />
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    );
  }
}