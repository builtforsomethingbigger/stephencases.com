import React from 'react';
import {Switch, Route} from 'react-router-dom'
import ProfileBanner from './components/profile/ProfileBanner'
import Login from './components/scases/Login'
import Main from './components/Main'
import './styles/App.css';

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


//=[ FETCH FUNCTIONS ]
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



//=[ LOGIN FUNCTIONS ]
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


//=[ MOBILE NAV FUNCTIONS ]
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
          <Route basename='/stephencases.com' exact path='/login' render={routerProps => (
            <Login  {...routerProps}
              handleSuccessfulAuth={this.handleLogin} 
              loggedInStatus={this.state.isLoggedIn} 
            />
          )}/>
          <Main 
            loggedInStatus={this.state.isLoggedIn}
            username={this.state.user.username} 
            mobileNav={this.state.mobileNav} 
            hideMobileNav={this.hideMobileNav}
            bio={this.state.bio}
            portfolio={this.state.portfolio} 
            entries={this.state.entries}
          />
        </Switch>
      </div>
    )
  }
}