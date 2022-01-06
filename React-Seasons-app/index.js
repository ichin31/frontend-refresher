import React, { Component } from 'react'
import ReactDOM from "react-dom"
import SeasonDisplay from './SeasonDisplay'
import Spinner from './Spinner'

// this.setState({errorMessage:err.message})
// console.log(err)
 class App extends Component {

  state = {lat: null, errorMessage: '' };


   componentDidMount(){
    window.navigator.geolocation.getCurrentPosition(
      postion =>  this.setState({lat:postion.coords.latitude}),
      err =>  this.setState({errorMessage: err.message})
      );
   }
    


  render() {
    if(this.state.errorMessage && !this.state.lat){
      return (
        <div>
          Error:{this.state.errorMessage}
        </div> 
      );
    }
    if(!this.state.errorMessage && this.state.lat){
      return (
        <div>
          <SeasonDisplay lat={this.state.lat}/>
          {/* Latitude: {this.state.lat} {this.state.errorMessage} */}
        </div> 
      );
    }

      return (<Spinner message="Please accept location request"/>);
  }
}


ReactDOM.render (<App />, document.getElementById("root"))

