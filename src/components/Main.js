import React from 'react'
import {Route} from 'react-router-dom'
import MobileNav from './nav/MobileNav';
import Bio from './main/Bio'
import Portfolio from './main/Portfolio'
import Resume from './main/Resume'
import Contact from './main/Contact'
import VLog from './main/VLog'
import CMS from './scases/CMS'
import '../styles/App.css';

const Main = (props) => {

    const showCMS = () => {
        if(props.username){
          return (
            <Route exact path='/cms'  render={routerProps => (
              <CMS {...routerProps} />
            )}/>
          )
        }
      }    


    return(
        <main id="Main">
            <MobileNav mobileNav={props.mobileNav} hideMobileNav={props.hideMobileNav}/>
            <Route exact path='/'  render={routerProps => (
            <Bio  {...routerProps} 
                loggedInStatus={props.isLoggedIn}
                bio={props.bio}
            />
            )}/>
            <Route exact path='/portfolio'  render={routerProps => (
            <Portfolio  {...routerProps} 
                loggedInStatus={props.isLoggedIn}
                portfolio={props.portfolio} 
            />
            )}/>
            <Route exact path='/resume'  render={routerProps => (
            <Resume  {...routerProps} 
                loggedInStatus={props.isLoggedIn}
                entries={props.entries} 
            />
            )}/>
            <Route exact path='/vlog'  render={routerProps => (
            <VLog  {...routerProps} 
                loggedInStatus={props.isLoggedIn}
            />
            )}/>
            <Route exact path='/contact'  render={routerProps => (
            <Contact  {...routerProps} 
                loggedInStatus={props.isLoggedIn}
            />
            )}/>
            {showCMS()}
        </main>
    )
}
export default Main