import React,  { Component,  PropTypes } from 'react';
import ContactItem from './ContactItem';
import { render } from 'react-dom';

class ContactList extends Component {
  render(){
    let contacts = this.props.contacts;
    return(
      <ul>
      {contacts.map(
        (contact)=>(
             <ContactItem key={contact.email}
                                 name={contact.name}
                                 email={contact.email} />
                                )
      )}
      </ul>
    )
  }
}

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(PropTypes.object)
}

export default ContactList;
