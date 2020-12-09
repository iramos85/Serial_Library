import React, { Component } from 'react';
import KillerContainer from './KillerContainer'
import LoginRegisterForm from './RegisterDialog'
import LoginForm from './LoginDialog'
import Header from './Header'
import { IconButton } from '@material-ui/core';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import Button from '@material-ui/core/Button'
import './App.css';


export default class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      loggedIn: false,
      loggedInUsername: ''
    }
  }

  register = async (registerInfo) => {
    console.log("register() in App.js called with the following info", registerInfo);
    const url = process.env.REACT_APP_API_URL + "/api/v1/users/register"
    console.log(url)
    console.log('im in the register function')
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
      console.log("registerJson", registerJson);
  
      if(registerResponse.status === 201) {
        this.setState({
          loggedIn: true,
          loggedInUserEmail: registerJson.data.email
        })
      }
   } catch(err) {
     console.error("Error trying to register with API")
     console.error(err)
   }
 }
 
 login = async (loginInfo) => {
   console.log("login() in App.js called with the following info", loginInfo);
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
     console.log("loginResponse", loginResponse);
     const loginJson = await loginResponse.json()
     console.log("loginJson", loginJson);
 
     if(loginResponse.status === 200) {
         this.setState({
           loggedIn: true,
           loggedInUsername: loginJson.data.username
         })
       }
   } catch(error) {
     console.error("Error trying to log in")
     console.error(error)
   }
 }
 
 logout = async () => {
   try {
     const url = process.env.REACT_APP_API_URL + "/api/v1/users/logout"
 
     const logoutResponse = await fetch(url, {
       credentials: 'include'
     })
     console.log("logoutResponse", logoutResponse);
     const logoutJson = await logoutResponse.json()
     console.log("logoutJson", logoutJson);
 
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
        { 
          this.state.loggedIn
          ?
          <React.Fragment>
           <Button 
           variant='contained'
           color='primary'
           onClick={ this.logout}
          >
            Log-out
            </Button>
            <KillerContainer/>
           </React.Fragment>
           :
          <React.Fragment>
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

