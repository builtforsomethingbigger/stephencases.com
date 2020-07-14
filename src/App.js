import React from 'react';
import ProfileBanner from './components/profile/ProfileBanner'
import Nav from './components/nav/Nav'
import './styles/App.css';

export default class App extends React.Component{
  render(){
    return(
      <div id="App">
        <ProfileBanner />
        <Nav />
        <div id="ContentWindow"></div>
      </div>
    )
  }
}