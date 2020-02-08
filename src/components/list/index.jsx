import React, { Component } from "react";

import ListItem from "./ListItem";
import ListForm from "./ListForm";

import { AuthContext } from '../../context/auth';

import CONSTANTS from '../../constants';
const { ENDPOINT } = CONSTANTS;


export default class List extends Component {

  static contextType = AuthContext;
  getToken = this.context;

  state = {
    listItems: []
  };

  // Get the data from the back end
  componentDidMount() {
    fetch(ENDPOINT.LIST, {
        headers: { 'Authorization': this.getToken() }
    })
      .then(response => {
        if (!response.ok) {
          if(response.status === 401) this.props.logout();
          throw Error(response.statusText);
        }
        return response.json();
      })
      .then(result => this.setState({ listItems: result }))
      .catch(error =>
        error // TODO
      );
  }

  deleteListItem = (listItem) => {
    fetch(`${ENDPOINT.LIST}/${listItem._id}`, {
        method: "DELETE", headers: { 'Authorization': this.getToken() }
    })
      .then(response => {
        if (!response.ok) {
          if(response.status === 401) this.props.logout();
          throw Error(response.statusText);
        }
        return response.json();
      })
      .then(result => {
        let list = this.state.listItems.filter(item => item._id !== result._id);
        this.setState({ listItems: list });
      })
      .catch(error => {
        return error // TODO
      });
  }

  addListItem = (textField) => {
    if (!textField) {
      // TODO
      return;
    }

    fetch(ENDPOINT.LIST, {
      method: "POST",
      headers: {
          "Content-Type": "application/json",
          'Authorization': this.getToken()
        },
      body: JSON.stringify({
        text: textField
      })
    })
      .then(response => {
        if (!response.ok) {
          if(response.status === 401) this.props.logout();
          throw Error(response.statusText);
        }
        return response.json();
      })
      .then(result =>
        this.setState(prevState => ({
          listItems: [result, ...prevState.listItems]
        }))
      )
      .catch(error =>
        error // TODO
      );
  }

  render() {
    const {
      listItems
    } = this.state;
    return (
      <main id="mainContent" className="container">
        <div className="row">
          <div className="col mt-5 p-0">
            <h3>Encode</h3>
          </div>
          <div className="col-12 p-0">
            <ListForm
              addListItem={this.addListItem}
            />
          </div>
          {listItems.map(listItem => (
            <ListItem
              key={listItem._id}
              listItem={listItem}
              deleteListItem={this.deleteListItem}
            />
          ))}
        </div>
      </main>
    );
  }
}
