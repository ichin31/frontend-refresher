import React, { Component } from 'react'

export default class SearchBar extends Component {


  state = {search:''}

  onFormSubmit = e => {
    e.preventDefault();
    this.props.onSeaSubmit(this.state.search);
  };


  render() {
    return (
      <div className='ui segment'>
        <form action="ui form" onSubmit={this.onFormSubmit}>
        <label><strong>Image Search</strong></label>
          <div className="ui fluid icon input"> 
            <input type="text" name="search" value={this.state.search} onChange={e => this.setState({search :e.target.value})}/>
            <i className="search icon"></i>
          </div>
        </form>
      </div>
    )
  }
}
