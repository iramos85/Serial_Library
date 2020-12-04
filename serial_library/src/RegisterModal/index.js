
import React, { Fragment, useState } from 'react'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import Dialog from '@material-ui/core/Dialog'
import DialogActions from '@material-ui/core/DialogActions'
import DialogContent from '@material-ui/core/DialogContent'
import DialogTitle from '@material-ui/core/DialogTitle'
import Snackbar from '@material-ui/core/Snackbar'
import '../index.css'

export default function CollectingFormInput() {

  const [dialogOpen, setDialogOpen] = useState(false);
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState('');
  const [name, setName] = useState('');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');

  // constructor() {
  //   super()

  //   this.state = {
  //     email: '',
  //     password: '',
  //     username: '',
  //     action: 'Login' // this will track whether we are logging in or registering
  //   }
  // }

// switchForm = () => {
//   if(this.state.action === "Login") {
//     this.setState({ action: "Register" })
//   } else {
//     this.setState({ action: "Login" })
//   }
// }

// handleChange = (event) => {
//   this.setState({
//     [event.target.name]: event.target.value
//   })
// }

// handleSubmit = (event) => {
//    event.preventDefault()
//    console.log(`You are trying to ${this.state.action.toLowerCase()} with the following credentials`)
//    console.log(this.state);
//    // Extra challenge: Validate the form!
//    // Such as...
//    // Highlight blank fields fields with errors in red
//    // show the errors under or next to the field
//    // make sure password is certain length, strength,
//    // make sure PW includes certain characters (use RegExp)
//    if(this.state.action === "Register") {
//       this.props.register(this.state)
//     } else {
//       this.props.login(this.state)
//     }
//  }

const onDialogOpen = () => {
  setDialogOpen(true);
}

const onDialogClose = () => {
  setDialogOpen(false)
}

const onSnackbarClose = (e, reason) => {
  if (reason === 'clickaway'){
    return
  }
  setSnackbarOpen (false)
  setSnackbarMessage('')
}

const onCreate = () => {
  setSnackbarOpen(true)
  setSnackbarMessage('${username} created')
  onDialogClose()
}



  // render() {
    return (
      <React.Fragment>
        <Button color='primary' onClick={onDialogOpen}>
          New User
        </Button>
        <Dialog open={dialogOpen} onClose={onDialogClose}>
          <DialogTitle>New User</DialogTitle>
          <DialogContent>
          <TextField
            margin='normal'
            label='Name'
            InputProps={{ name: 'name'}}
            onChange ={e => setName(e.target.value)}
            value={name}
            fullWidth
            />
            <TextField
            margin='normal'
            label='Username'
            InputProps={{ name: 'username'}}
            onChange ={e => setUsername(e.target.value)}
            value={username}
            fullWidth
            />
            <TextField
            margin='normal'
            label='Email Address'
            type='email'
            InputProps={{ name: 'email'}}
            onChange ={e => setEmail(e.target.value)}
            value={email}
            fullWidth
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={onDialogClose} color='primary'>
              Cancel
            </Button>
            <Button
            variant='contained'
            onClick={onCreate}
            color='primary'
            >
              Create
            </Button>
          </DialogActions>
          <Snackbar
            open={snackbarOpen}
            message={snackbarMessage}
            onClose={onSnackbarClose}
            autoHideDuration={4000}
            />
        </Dialog>
      </React.Fragment>
    )
  }
// }

// render() {
//   return (
//     <React.Fragment>
//       <h2>{this.state.action} here</h2>
//       <Form onSubmit={this.handleSubmit}>
//       {
//        // only show username field if they are registering
//        // because our login process just uses email
//        this.state.action === "Register"
//        &&
//        <React.Fragment>
//          <Label>Username:</Label>
//          <Form.Input
//            type="text"
//            name="username"
//            placeholder="Enter a username"
//            value={this.state.username}
//            onChange={this.handleChange}
//          />
//        </React.Fragment>
//       }
//         <Label>Email:</Label>
//         <Form.Input
//           type="email"
//           name="email"
//           placeholder="Enter a email"
//           value={this.state.email}
//           onChange={this.handleChange}
//         />
//         <Label>Password:</Label>
//         <Form.Input
//           type="password"
//           name="password"
//           placeholder="Enter a password"
//           value={this.state.password}
//           onChange={this.handleChange}
//         />
//         <Button type="Submit">
//           { this.state.action === "Login" ? "Log in" : "Sign up"}
//         </Button>
//       </Form>
//       {
//         this.state.action === "Login"
//         ?
//         <p>
//           Need an account? Sign up <span className="fake-link" onClick={this.switchForm}>here</span>.
//         </p>
//         :
//         <p>
//           Already have an account? Log in <span className="fake-link" onClick={this.switchForm}>here</span>.
//         </p>

//       }
//     </React.Fragment>
//   )
// }