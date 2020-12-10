import React from 'react'
import LoginRegisterForm from '../RegisterDialog'
import LoginForm from '../LoginDialog'
import '../index.css'

export default function Header(props) {
  const headerStyle = {
    textAlign: "right",
    padding: "10px",
    backgroundColor: "#DDDDDD"
  }
  this.state = {
    loggedIn: false,
    loggedInUsername: ''
  }
  return(
    <nav style={headerStyle}>
      <React.Fragment>
        <LoginRegisterForm register={props.register}/>
        <LoginForm login={props.login}/>
      </React.Fragment>
      :
      <React.Fragment>
        {props.loggedIn === true}
      </React.Fragment>
      <p>Logged in as {props.loggedInUsername}.&nbsp;
        <span className="fake-link" onClick={props.logout}>(Log out)</span>
        </p>
    </nav>
  )
}