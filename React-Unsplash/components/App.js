import React, { Component } from 'react'
import unsplash from '../api/unsplash'
import SearchBar from './SearchBar';
import ImageList from './ImageList';

class App extends Component {

  state = { images:[] };
    
 
 
  

  onSearchSubmit = async (search) => {
     const response = await unsplash.get('/search/photos',{
      params: {query:search}
    });
    
    this.setState({images: response.data.results});
    console.log(response.data.results)    
  }

  render() {
    return (
      <div className='ui container' style={{marginTop:'10px'}}>
        <SearchBar onSeaSubmit={ this.onSearchSubmit}/>
        <ImageList images={this.state.images}/>
      </div>
    )
  }
}

export default App



