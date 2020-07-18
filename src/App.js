import React from 'react';
// import axios from 'axios'
import {Switch, Route} from 'react-router-dom'
import Home from './components/Home'
import ProfileBanner from './components/profile/ProfileBanner'
import Login from './components/scases/Login'
// import PostForm from './components/scases/PostForm'
import Bio from './components/main/Bio'
import Portfolio from './components/main/Portfolio'
import Resume from './components/main/Resume'
import './styles/App.css';

const resumeAPI = 'http://localhost:3001/resumes'

export default class App extends React.Component{

  constructor(props) {
    super(props);
    this.state = { 
      isLoggedIn: false,
      user: {},
      entries: []
     };
  }  


  componentDidMount() {
    this.loginStatus()
    this.fetchResumes()
  }


//LOGIN FUNCTIONS
  handleLogin = (data) => {
    this.setState({
      isLoggedIn: true,
      user: data.user
    })
  }

  handleLogout = (data) => {
    this.setState({
      isLoggedIn: false,
      user: {}
    })
  }

  loginStatus = () => {
    const proxyurl = "https://cors-anywhere.herokuapp.com/";
    const loginAPI = "http://localhost:3001/login"
    fetch((proxyurl+loginAPI), {withCredentials: true}, {
      method:'GET',
      mode: 'cors',
      headers:{
          'Access-Control-Allow-Origin':'*'
      }
    })
    .then(res=>res.json())
    .then(response => {
      if (response.data.logged_in) {
        this.handleLogin(response)
      } else {
        this.handleLogout()
      }
    })
    .catch(error => console.log('api errors:', error))
  }
//END LOGIN FUNCTIONS

  fetchResumes = () => {
    fetch(resumeAPI)
    .then(res=>res.json())
    .then(entries => this.setState({ entries }))
  }


  render(){
    return(
      <div id="App">
        <ProfileBanner />
        <Route exact path='/' render={routerProps => (
                <Home {...routerProps} 
                  loggedInStatus={this.state.isLoggedIn}
                />
              )}/>
            <Switch>
            <Route exact path='/login' render={routerProps => (
              <Login  {...routerProps}
                handleLogin={this.handleLogin} 
                loggedInStatus={this.state.isLoggedIn} 
              />
            )}/>
            <div id="Main">
              <Route exact path='/bio'  render={routerProps => (
                <Bio  {...routerProps} />
              )}/>
              <Route exact path='/portfolio'  render={routerProps => (
                <Portfolio  {...routerProps} />
              )}/>
              <Route exact path='/resume'  render={routerProps => (
                <Resume  {...routerProps} entries={this.state.entries} />
              )}/>
              {/* <Route exact path='/crm/new-post' component={<PostForm />}/> */}
            </div>
        </Switch>
      </div>
    )
  }
}