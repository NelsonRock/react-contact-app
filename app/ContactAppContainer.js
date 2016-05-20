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

  render(){
    return(
      <ContactApp contacts={this.state.contacts} />
    );
  }
}
