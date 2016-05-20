import React,  { Component,  PropTypes } from 'react';
import ContactItem from './ContactItem';
import { render } from 'react-dom';

class ContactList extends Component {
  render(){
    //we use filter
    let contacts = this.props.contacts.filter(
      (contact) => contact.name.indexOf(this.props.filterText) !== -1
    );
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
