import React, { Component,  PropTypes} from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './SearchBar';
import ContactList from './ContactList';
import ContactItem from './ContactItem';
//Main Component will render ContactList and a searchBar
class ContactApp extends Component {
  constructor(){
    super();
    this.state = {
      filterText: ''
    }
  }
  handlerUserInput(searchItem){
    this.setState({ filterText: searchItem })
  }
  render(){
    return(
      <div>
      <SearchBar filterText={this.state.filterText}
                  onUserInput={this.handlerUserInput.bind(this)}
                  />
      <ContactList contacts={this.props.contacts}
                   filterText={this.state.filterText}
                   />
      </div>

    );
  }
}


ContactApp.propTypes = {
  contacts: PropTypes.arrayOf(PropTypes.object),
  filterText: PropTypes.string,
}

ReactDOM.render(<ContactApp contacts={contacts} />, document.getElementById('root'));
