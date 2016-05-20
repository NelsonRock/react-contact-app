import React, { Component,  PropTypes} from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './SearchBar';
import ContactList from './ContactList';
import ContactItem from './ContactItem';
//Main Component will render ContactList and a searchBar
class ContactApp extends Component {
  render(){
    return(
      <div>
        <SearchBar />
        <ContactList contacts={this.props.contacts} />
      </div>

    );
  }
}


ContactApp.propTypes = {
  contacts: PropTypes.arrayOf(PropTypes.object)
}


let contacts = [
{ name: "Cassio Zen", email: "cassiozen@gmail.com" },
{ name: "Dan Abramov", email: "gaearon@somewhere.com" },
{ name: "Pete Hunt", email: "floydophone@somewhere.com" },
{ name: "Paul O’Shannessy", email: "zpao@somewhere.com" },
{ name: "Ryan Florence", email: "rpflorence@somewhere.com" },
{ name: "Sebastian Markbage", email: "sebmarkbage@here.com" },
];

ReactDOM.render(<ContactApp contacts={contacts} />, document.getElementById('root'));
