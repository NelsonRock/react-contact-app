import React, { Component,  PropTypes } from 'react';
import ReactDOM from 'react-dom';
import 'whatwg-fetch';
import ContactApp from './ContactApp';

class ContactAppContainer extends Component {
  constructor(){
    super();
    this.state = {
      contacts: []
    }
  }
  componentDidMount(){

    fetch('./contacts.json')
    .then((response) => response.json())
    .then((responseData) => {
      this.setState({contacts: responseData});
    })
    .catch((error) => {
      console.trace('Error fetching and parsing data: ', error);
      });
  }
  render(){
    return <ContactApp contacts={this.state.contacts} />
  }
}

ContactAppContainer.propTypes ={
  ContactApp: PropTypes.arrayOf(PropTypes.object)
}

ReactDOM.render(<ContactAppContainer /> , document.getElementById('root'));
