import React from 'react'
import RegisterForm from '../RegisterDialog'
import LoginForm from '../LoginDialog'
import '../index.css'

export default function Header(props) {
  const headerStyle = {
    textAlign: "right",
    padding: "10px",
    backgroundColor: "#DDDDDD"
  }
  return(
    <nav style={headerStyle}>
      <React.Fragment>
        
      <RegisterForm/>
      <LoginForm/>
      </React.Fragment>
    </nav>
  )
}