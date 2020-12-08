import React, { Component, Fragment, } from 'react'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import Dialog from '@material-ui/core/Dialog'
import DialogActions from '@material-ui/core/DialogActions'
import DialogContent from '@material-ui/core/DialogContent'
import DialogTitle from '@material-ui/core/DialogTitle'
import Snackbar from '@material-ui/core/Snackbar'
import '../index.css'


export default class CollectingFormInput extends Component {

  constructor() {
    super()

    this.state = {
      dialogOpen:false, 
      setDialogOpen: false,
      snackbarOpen:false,
      setSnackbarOpen: false,
      snackbarMessage:'',
      setSnackbarMessage: '',
      name:'',
      setName: '',
      username:'',
      setUsername: '',
      email:'', 
      setEmail:'', 
      password:'',
      action: 'Login'
    }
  } 
  onDialogOpen = () => {
    this.setState.setDialogOpen=true;
    console.log(this.onDialogOpen)
  }

  onDialogClose = () => {
  this.setState.setDialogOpen=false
  }

  onSnackbarClose = (e, reason) => {
    if (reason === 'clickaway'){
      return
    }
    this.setState.setSnackbarOpen=false
    this.setState.setSnackbarMessage=''
  }

  onCreate = () => {
    this.setState.setSnackbarOpen=true
    this.setState.setSnackbarMessage= '${username} + created'
    this.setState.onDialogClose()
  }

  switchForm = () => {
    if(this.state.action === "Login") {
      this.state({ action: "Register" })
    } else {
      this.state({ action: "Login" })
    }
  }

  handleChange = (event) => {
    this.state({
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
  render() {
     return (

      <Fragment>
        <Button color='primary' onClick={this.onDialogOpen}>

          New User
        </Button>
        <Dialog open={this.dialogOpen} onClose={this.onDialogClose}>
          <DialogTitle>New User</DialogTitle>
          <DialogContent>
          <TextField
            margin='normal'
            label='Name'
            InputProps={{ name: 'name'}}
            onChange ={e => this.setName(e.target.value)}
            value={this.name}
            fullWidth
            />
            <TextField
            margin='normal'
            label='Username'
            InputProps={{ name: 'username'}}
            onChange ={e => this.setUsername(e.target.value)}
            value={this.username}
            fullWidth
            />
            <TextField
            margin='normal'
            label='Email Address'
            type='email'
            InputProps={{ name: 'email'}}
            onChange ={e => this.setEmail(e.target.value)}
            value={this.email}
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
            <Button onClick={this.onDialogClose} color='primary'>
              Cancel
            </Button>
            <Button
            variant='contained'
            onClick={this.onCreate}
            color='primary'
            >
              Create
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