import React from 'react';
import {Switch, Route} from 'react-router-dom'
import ProfileBanner from './components/profile/ProfileBanner'
import Login from './components/scases/Login'
import CMS from './components/scases/CMS'
import Bio from './components/main/Bio'
import Portfolio from './components/main/Portfolio'
import Resume from './components/main/Resume'
import Contact from './components/main/Contact'
import './styles/App.css';
import MobileNav from './components/nav/MobileNav';

const resumeAPI = 'https://stephen-cases-backend.herokuapp.com/resumes'
const bioAPI = 'https://stephen-cases-backend.herokuapp.com/bios'
const portfolioAPI = 'https://stephen-cases-backend.herokuapp.com/portfolios'

export default class App extends React.Component{

  constructor() {
    super()

    this.state = { 
      isLoggedIn: "Not Logged In",
      user: {},
      entries: [],
      bio: [],
      portfolio: [],
      mobileNav: false
     };
  }  


  componentDidMount() {
    this.fetchResumes()
    this.fetchBio()
    this.fetchPortfolio()
    // this.setCurrentUser()
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
      isLoggedIn: "Logged In",
      user: data.user
    })
  }

  setCurrentUser = () => {
    this.setState({
      isLoggedIn: "Logged In",
      user: {
        username: window.sessionStorage.getItem('username')
      }
    })
  }

  showMobileNav = e => {
    if(this.state.mobileNav){
      this.setState({
        mobileNav: false
      })
    }else{
      this.setState({
        mobileNav: true
      })
    }
  }

  hideMobileNav = e => {
    if(this.state.mobileNav){
      this.setState({
        mobileNav: false
      })
    }
  }

  showCMS = () => {
    if(this.state.user.username){
      return (
        <Route exact path='/cms'  render={routerProps => (
          <CMS {...routerProps} />
        )}/>
      )
    }
  }

  render(){
    return(
      <div id="App">
        <ProfileBanner user={this.state.user}
          showMobileNav={this.showMobileNav}
        />
        <Switch>
          {/* <Route exact path='/' render={routerProps => (
            <Home {...routerProps} 
              loggedInStatus={this.state.isLoggedIn}
            />
          )}/> */}
          <Route exact path='/login' render={routerProps => (
            <Login  {...routerProps}
              handleSuccessfulAuth={this.handleLogin} 
              loggedInStatus={this.state.isLoggedIn} 
            />
            )}/>
            <main id="Main">
              <MobileNav mobileNav={this.state.mobileNav} hideMobileNav={this.hideMobileNav}/>
              <Route exact path='/'  render={routerProps => (
                <Bio  {...routerProps} 
                loggedInStatus={this.state.isLoggedIn}
                  bio={this.state.bio}
                />
              )}/>
              <Route exact path='/portfolio'  render={routerProps => (
                <Portfolio  {...routerProps} 
                  loggedInStatus={this.state.isLoggedIn}
                  portfolio={this.state.portfolio} 
                />
              )}/>
              <Route exact path='/resume'  render={routerProps => (
                <Resume  {...routerProps} 
                  loggedInStatus={this.state.isLoggedIn}
                  entries={this.state.entries} 
                />
              )}/>
              <Route exact path='/contact'  render={routerProps => (
                <Contact  {...routerProps} 
                  loggedInStatus={this.state.isLoggedIn}
                />
              )}/>
              {this.showCMS()}
            </main>
        </Switch>
      </div>
    )
  }
}