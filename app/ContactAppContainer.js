import React,  { Component,  PropTypes } from 'react';
import ReactDOM from 'react-dom';
import 'whatwg-fetch';
import ContactApp from '.ContactApp';

class ContactAppContainer extends Component {
  constructor() {
    super();
    this.state = {
      contacts: []
    }
  }
  componentDidMount(){
    fetch('./contacts.json')
    .then((response) => response.json)
    .then((responseData) => {
      this.setState({ contacts: responseData});
    })
    .catch((error) => {
      console.log('Error feteching and parsing data', error);
    });
  }
  render(){
    return(
      <ContactApp contacts={this.state.contacts} />
    );
  }
}
