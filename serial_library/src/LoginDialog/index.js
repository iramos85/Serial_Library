import React, { Component, Fragment, } from 'react'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import Dialog from '@material-ui/core/Dialog'
import DialogActions from '@material-ui/core/DialogActions'
import DialogContent from '@material-ui/core/DialogContent'
import DialogTitle from '@material-ui/core/DialogTitle'
import Snackbar from '@material-ui/core/Snackbar'
import '../index.css'


export default class RegisterForm extends Component {

  constructor() {
    super()

    this.state = {
      dialogOpen:false, 
      snackbarOpen:false,
      snackbarMessage:'',
      username:'',
      password:'',
      action: 'Login'
    }
  } 

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    console.log(`You are trying to ${this.state.action.toLowerCase()} with the following credentials`)
    console.log(this.state);

    if(this.state.action === "Register") {
        this.props.register(this.state)
      } else {
        this.props.login(this.state)
      }
  }

  toggleDialogBox = () => {
    this.setState({
      dialogOpen:!this.state.dialogOpen,
    })
    console.log(this.state)
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
    this.setState({snackbarMessage: `${this.state.username} created`})
    this.toggleDialogBox()
  }


  render() {
     return (

      <Fragment>
        <Button color='primary' onClick={this.toggleDialogBox}>
          Log-In
        </Button>
        ?
        <Button color='primary' onClick={this.toggleDialogBox}>
          Logout
        </Button>
        <Dialog open={this.state.dialogOpen} onClose={this.toggleDialogBox}>
          <DialogTitle>New User</DialogTitle>
          <DialogContent>
            <TextField
            margin='normal'
            label='Username'
            InputProps={{ name: 'username'}}
            onChange = {this.handleChange}
            value={this.username}
            fullWidth
            />
             <TextField
            margin='normal'
            type='password'
            label='Password'
            onChange ={this.onChange}
            value={this.password}
            fullWidth
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={this.toggleDialogBox} color='primary'>
              Cancel
            </Button>
            <Button
            variant='contained'
            onClick={this.onCreate}
            color='primary'
            >
      
            </Button>
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