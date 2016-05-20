import React, { Component,  PropTypes} from 'react';
import { render } from 'react-dom';

class SearchBar extends Component {
  handleChange(event){
    this.props.handlerUserInput(event.target.value)
  }
  render(){
    return(
      <input type="search" placeholder="Search"
                value={this.props.filterText}
                onChange={this.handleChange.bind(this)}
                />
    );
  }
}

SearchBar.propTypes = {
  handlerUserInput: PropTypes.func.isRequired,  
  filterText: PropTypes.string.isRequired,
}

export default SearchBar;
