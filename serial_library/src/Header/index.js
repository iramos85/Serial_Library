import React from 'react'
import CollectingFormInput from '../RegisterModal'
import LoginForm from '../LoginModal'
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
      <CollectingFormInput/>
      <LoginForm/>
      </React.Fragment>
      <p>Logged in as {props.email}.&nbsp;
        <span className="fake-link" onClick={props.logout}>(Log out)</span>
      </p>
    </nav>
  )
}