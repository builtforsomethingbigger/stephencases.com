import React from 'react';
import {Switch, Route} from 'react-router-dom'
import Home from './components/Home'
import ProfileBanner from './components/profile/ProfileBanner'
import Login from './components/scases/Login'
// import PostForm from './components/scases/PostForm'
import Bio from './components/main/Bio'
import Portfolio from './components/main/Portfolio'
import Resume from './components/main/Resume'
import Contact from './components/main/Contact'
import './styles/App.css';

const resumeAPI = 'http://localhost:3001/resumes'
const bioAPI = 'http://localhost:3001/bios'
const portfolioAPI = 'http://localhost:3001/portfolios'

export default class App extends React.Component{

  constructor(props) {
    super(props);
    this.state = { 
      isLoggedIn: false,
      user: {},
      entries: [],
      bio: [],
      portfolio: []
     };
  }  


  componentDidMount() {
    this.loginStatus()
    this.fetchResumes()
    this.fetchBio()
    this.fetchPortfolio()
  }

  fetchResumes = () => {
    fetch(resumeAPI)
    .then(res=>res.json())
    .then(entries => this.setState({ entries }))
  }
  fetchBio = () => {
    fetch(bioAPI)
    .then(res=>res.json())
    .then(bio => this.setState({ bio }))
  }
  fetchPortfolio = () => {
    fetch(portfolioAPI)
    .then(res=>res.json())
    .then(portfolio => this.setState({ portfolio }))
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
          <Route exact path='/signin' render={routerProps => (
            <Login  {...routerProps}
              handleLogin={this.handleLogin} 
              loggedInStatus={this.state.isLoggedIn} 
            />
          )}/>
          <div id="Main">
            <Route exact path='/bio'  render={routerProps => (
              <Bio  {...routerProps} 
                bio={this.state.bio}
              />
            )}/>
            <Route exact path='/portfolio'  render={routerProps => (
              <Portfolio  {...routerProps} 
                portfolio={this.state.portfolio} 
              />
            )}/>
            <Route exact path='/resume'  render={routerProps => (
              <Resume  {...routerProps} 
                entries={this.state.entries} 
              />
            )}/>
            <Route exact path='/contact'  render={routerProps => (
              <Contact  {...routerProps} 
              />
            )}/>
            {/* <Route exact path='/crm/new-post' component={<PostForm />}/> */}
          </div>
        </Switch>
      </div>
    )
  }
}