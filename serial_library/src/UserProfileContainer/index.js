import React, { Component, Fragment, PropTypes } from 'react'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import Dialog from '@material-ui/core/Dialog'
import DialogActions from '@material-ui/core/DialogActions'
import DialogContent from '@material-ui/core/DialogContent'
import DialogTitle from '@material-ui/core/DialogTitle'
import Snackbar from '@material-ui/core/Snackbar'
import '../index.css'
import ProfileArea from '../UserProfilePage/ProfileArea';

class ProfilePage extends React.Component {
  
  
  render() {
    return (
      <div>
        <ProfileArea
          username="peter"
          emailAddress="peter@whatever.com"
        />
      </div>
    );
  }
}

ProfilePage.propTypes = {
};

export default ProfilePage;