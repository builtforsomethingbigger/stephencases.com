import React from 'react';
import axios from 'axios'
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import Home from './components/Home'
import ProfileBanner from './components/profile/ProfileBanner'
import Login from './components/scases/Login'
import PostForm from './components/scases/PostForm'
import Bio from './components/main/Bio'
import Portfolio from './components/main/Portfolio'
import './styles/App.css';

export default class App extends React.Component{

  constructor(props) {
    super(props);
    this.state = { 
      isLoggedIn: false,
      user: {}
     };
  }  


  componentDidMount() {
    this.loginStatus()
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
    axios.get('http://localhost:3001/logged_in', {withCredentials: true})
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
        <BrowserRouter>
        <Route exact path='/' render={props => (
                <Home {...props} 
                  loggedInStatus={this.state.isLoggedIn}
                />
              )}/>
        <div id="Main">
            <Switch>
              <Route exact path='/bio' component={<Bio />}/>
              <Route exact path='/portfolio' component={<Portfolio />}/>
              <Route exact path='/crm/new-post' component={<PostForm />}/>
              <Route exact path='/login' render={props => (
                <Login  {...props}
                  handleLogin={this.handleLogin} 
                  loggedInStatus={this.state.isLoggedIn} 
                />
              )}/>
            </Switch>
        </div>
          </BrowserRouter>
      </div>
    )
  }
}