import React, { Component } from 'react';
import KillerContainer from './KillerContainer';
import { MenuList } from '@material-ui/core';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import PopupState, { bindTrigger, bindMenu } from 'material-ui-popup-state';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import LoginRegisterForm from './RegisterDialog';
import LoginForm from './LoginDialog';
import UserProfileContainer from './UserProfileContainer'
import Header from './Header';
import { IconButton } from '@material-ui/core';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import Button from '@material-ui/core/Button';
import './App.css';


export default class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      loggedIn: false,
      loggedInUsername: '',
      loggedInUserEmail: '',
      loggedInName: ''
    }
  }

  register = async (registerInfo) => {
    // console.log("register() in App.js called with the following info", registerInfo);
    const url = process.env.REACT_APP_API_URL + "/api/v1/users/register"
    // console.log(url)
    // console.log('im in the register function')
    try {
      const registerResponse = await fetch(url, {
        credentials: 'include', // sends the cookie
        method: 'POST',
        body: JSON.stringify(registerInfo),
        headers: {
          'Content-Type': 'application/json'
        }
      })
      console.log("registerResponse", registerResponse);
      const registerJson = await registerResponse.json()
      // console.log("registerJson", registerJson);
  
      if(registerResponse.status === 201) {
        this.setState({
          loggedIn: true,
          loggedInUserEmail: registerJson.data.email,
          loggedInUsername: registerJson.data.username,
          loggedInName: registerJson.data.name
        })
        // console.log(this.state)
      }
   } catch(err) {
     console.error("Error trying to register with API")
     console.error(err)
   }
 }
 
 login = async (loginInfo) => {
  //  console.log("login() in App.js called with the following info", loginInfo);
   const url = process.env.REACT_APP_API_URL + '/api/v1/users/login'
 
   try {
     const loginResponse = await fetch(url, {
       credentials: 'include', // sends cookie
       method: 'POST',
       body: JSON.stringify(loginInfo),
       headers: {
         'Content-Type': 'application/json'
       }
     })
    //  console.log("loginResponse", loginResponse);
     const loginJson = await loginResponse.json()
    //  console.log("loginJson", loginJson);
 
     if(loginResponse.status === 200) {
         this.setState({
           loggedIn: true,
           loggedInUserEmail: loginJson.data.email,
           loggedInUsername: loginJson.data.username,
           loggedInName: loginJson.data.name
         })
       }
   } catch(error) {
     console.error("Error trying to log in")
     console.error(error)
   }
 }
 
 user = async (userInfo) => {
  // console.log("user() in App.js called with the following info", userInfo);
  const url = process.env.REACT_APP_API_URL + '/api/v1/users/<username>'
  // console.log('im in the user function')

  try {
    const userResponse = await fetch(url, {
      credentials: 'include', // sends cookie
      method: 'GET',
      body: JSON.stringify(userInfo),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    // console.log("userResponse", userResponse);
    const userJson = await userResponse.json()
    // console.log("userJson", userJson);

    if(userResponse.status === 200) {
        this.setState({
          loggedIn: true,
          loggedInUsername: userJson.data.username
        })
      }
  } catch(error) {
    console.error("Error getting user profile")
    console.error(error)
  }
}

 logout = async () => {
   try {
     const url = process.env.REACT_APP_API_URL + "/api/v1/users/logout"
 
     const logoutResponse = await fetch(url, {
       credentials: 'include'
     })
    //  console.log("logoutResponse", logoutResponse);
     const logoutJson = await logoutResponse.json()
    //  console.log("logoutJson", logoutJson);
 
     if(logoutResponse.status === 200) {
       this.setState({
         loggedIn: false,
         loggedInUsername: ''
       })
 
     }
 
   } catch(error) {
     console.error("Error logging out")
     console.error(error)
   }
 }
 
  render() {
    return (
      <div className="App"> 
      <h1 id='mainTitle'>The Serial Library</h1>
      { 
        this.state.loggedIn
        ?
        <React.Fragment>
          
          <KillerContainer/>
          <UserProfileContainer
            name={this.state.loggedInName}
            username={this.state.loggedInUsername}
            email={this.state.loggedInUserEmail}
          /> 
          <Button
          id='logOutButton' 
          variant='contained'
          color='secondary'
          onClick={ this.logout}
        >
          Log-out
          </Button>
         
          </React.Fragment>
          :
          
          <React.Fragment>
          <p id='introQoute'><strong>"..Cain talked with Abel,his brother<br/>"Let's go out to the field." <br/>While they were in the field, Cain rose up against Abel and killed him." <br/>-Genesis 4:8</strong></p>
        
          <LoginRegisterForm
          register={this.register}
          />
          <LoginForm
          login={this.login}
          />
        </React.Fragment> 
      }
      </div>
    );
  }
}


