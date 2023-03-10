import React from 'react';

// To define a class component we need to extend React.Component.
class SearchBar extends React.Component {
  state = { term : ''};

  onInputChange = (event) => {
    
    this.setState({term: event.target.value});
  }

  onFormSubmit = (event) => {
    event.preventDefault();
    // TODO: Make sure we call the callback from the parent component
    this.props.onFormSubmit(this.state.term);
  }
  render () {
    return (
      <div className='search-bar  ui segment'>
        <form className='ui form' onSubmit={ this.onFormSubmit }>
          <div className='field'>
            <label>Video Search</label>
            <input type="text" value = { this.state.term } onChange= {this.onInputChange}/>
          </div>
        </form>

      </div>
    );
  }
}

export default SearchBar;