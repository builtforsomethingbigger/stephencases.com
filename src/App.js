import React from 'react';
import ProfileBanner from './components/profile/ProfileBanner'
import PostForm from './components/scases/PostForm'
import Login from './components/scases/Login'
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
          <PostForm />
          <Bio /> 
          <Portfolio /> 
        </div>
      </div>
    )
  }
}