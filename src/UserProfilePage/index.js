import React, { Component, Fragment, PropTypes } from 'react'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import Dialog from '@material-ui/core/Dialog'
import DialogActions from '@material-ui/core/DialogActions'
import DialogContent from '@material-ui/core/DialogContent'
import DialogContentText from '@material-ui/core/DialogContentText';
import Typography from '@material-ui/core/Typography'
import DialogTitle from '@material-ui/core/DialogTitle'
import Snackbar from '@material-ui/core/Snackbar'
import '../index.css'

export default class UserProfile extends Component {

  constructor(props) {
    super(props)

    this.state = {
      dialogOpen:false, 
      snackbarOpen:false,
      snackbarMessage:'',
      // name: props.name,
      // username:'username',
      // email: 'email',
      // aboutMe: '',
      // action: 'Update',
      loggedIn: true
    }
  } 

  // handleChange = (event) => {
  //   this.setState({
  //     [event.target.name]: event.target.value
  //   })
  // }

  // handleSubmit = (event) => {
  //   event.preventDefault()
  //   console.log(`You are trying to ${this.state.action.toLowerCase()} with the following credentials`, this.state)

  //   this.props.update(this.state)
  //   this.setState({
  //     aboutMe: '',
  //     loggedIn: true
  //   })
  //   console.log(this.state)
  // }

  toggleDialogBox = () => {
    this.setState({
      dialogOpen:!this.state.dialogOpen,
    })
    console.log(this.props)
  }

  onSnackbarClose = (e, reason) => {
    if (reason === 'clickaway'){
      return
    }
    this.setState({snackbarOpen:false})
    this.setState({snackbarMessage:''})
  }

  onCreate = () => {
    this.setState({snackbarOpen:true})
    this.setState({snackbarMessage: `${this.state.username} updated`})
  }

  // ValidationFIeld = props 

  render() {
     return (

      <Fragment>
        <Button id='userProfileButton' variant='contained' color='primary' onClick={this.toggleDialogBox}>
          User Profile
        </Button>
        <Dialog open={this.state.dialogOpen} onClose={this.toggleDialogBox}>
          <DialogTitle>{this.props.username}</DialogTitle>
          <DialogContent>
            <Typography variant="caption" display="block" gutterBottom>
                Name
            </Typography>
            <Typography variant="h6" component="h6" gutterBottom>
              {this.props.name}
            </Typography>
            <Typography variant="caption" display="block" gutterBottom>
              Email
            </Typography>
            <Typography variant="subtitle2" gutterBottom>
              {this.props.email}
            </Typography>
            {/* <Typography variant="h5" component="h5">
              About Me
            </Typography> */}
            {/* <Typography variant="body1" >
              {this.state.aboutMe}
            </Typography> */}
          </DialogContent>
          <DialogActions>
            <Button onClick={this.toggleDialogBox} color='primary'>
              Close
            </Button>
         {/* <Button
            variant='contained'
            onClick={this.onCreate}
            color='primary'
            type='Submit'
            >
              Create
            </Button> */}
          </DialogActions>
          <Snackbar
            open={this.snackbarOpen}
            message={this.snackbarMessage}
            onClose={this.onSnackbarClose}
            autoHideDuration={4000}
            />
        </Dialog>
      </Fragment>
    )
  }
}