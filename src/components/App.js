import React, { Component } from 'react'; 
import './../css/App.css';
import Nav from './Nav' ; 
import Footer from './Footer'; 
import Home from './Home';
import DieuHuongURL from '../router/DieuHuongURL';
import News from './News'; 
class App extends Component {
  render() {
    return (
      <div> 
        <Nav/>
        <Home/> 
        <Footer/>
        <News/>
      </div>
    );
  }
} 

export default App;
