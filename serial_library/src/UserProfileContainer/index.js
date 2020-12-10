import React, { Component } from 'react'
import UserProfile from '../UserProfilePage'

export default class UserProfileContainer extends Component {
  
  constructor(props) {
    super(props)

  }



  render(){
    return (
      <React.Fragment>
        <UserProfile
        name={this.props.name}
        username={this.props.username}
        email={this.props.email}
        />
        <p>{this.props.name}</p>
      </React.Fragment>
    )
  }
}