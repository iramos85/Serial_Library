import React, { Component, Fragment, } from 'react'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import Dialog from '@material-ui/core/Dialog'
import DialogActions from '@material-ui/core/DialogActions'
import DialogContent from '@material-ui/core/DialogContent'
import DialogTitle from '@material-ui/core/DialogTitle'
import Snackbar from '@material-ui/core/Snackbar'
import '../index.css'


export default class LoginForm extends Component {

  constructor(props) {
    super(props)

    this.state = {
      dialogOpen:false, 
      snackbarOpen:false,
      snackbarMessage:'',
      username:'',
      password:'',
      action: 'Login',
      loggedIn: false
    }
  } 
  toggleDialogBox = () => {
    this.setState({
      dialogOpen:!this.state.dialogOpen,
    })
    console.log(this.state)
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    console.log(`You are trying to ${this.state.action.toLowerCase()} with the following credentials`)
    console.log(this.state)

    this.props.login(this.state)
    this.setState({
      username:'',
      password:'',
      loggedIn: true
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
    this.setState({snackbarMessage: `${this.state.username} logged in`})
  }


  render() {
     return (

      <Fragment>
        <Button color='primary' onClick={this.toggleDialogBox}>
          Log-In
        </Button>
        <Dialog open={this.state.dialogOpen} onClose={this.toggleDialogBox}>
          <DialogTitle>Log-In</DialogTitle>
          <DialogContent>
          <form action={this.action} onSubmit={this.handleSubmit}>
            <TextField
            margin='normal'
            label='Username'
            InputProps={{ name: 'username'}}
            onChange = {this.handleChange}
            fullWidth
            />
             <TextField
            margin='normal'
            type='password'
            label='Password'
            InputProps={{ name: 'password' }}
            onChange ={this.handleChange}
            fullWidth
            />
            <Button onClick={this.toggleDialogBox}>
              <input type='submit' value='Submit'/>
            </Button> 
      
            </form>
          </DialogContent>
          <DialogActions>
            <Button onClick={this.toggleDialogBox} color='primary'>
              Cancel
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