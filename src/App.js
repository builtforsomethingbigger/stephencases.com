import React from 'react';
import ProfileBanner from './components/profile/ProfileBanner'
import Login from './components/login/Login'
import Bio from './components/main/Bio'
import Portfolio from './components/main/Portfolio'
import './styles/App.css';
import './styles/Main.css';

export default class App extends React.Component{
  render(){
    return(
      <div id="App">
        <Login />
        <ProfileBanner />
        <div id="Main">
          <Bio /> 
          <Portfolio /> 
        </div>
      </div>
    )
  }
}