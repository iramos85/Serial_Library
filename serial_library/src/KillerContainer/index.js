import React, { Component } from 'react'
import KillerList from '../DogList'

export default class KillerContainer extends Component {

  constructor(props) {
    super(props)

    this.state = {
      dogs: [],
      idOfDogToEdit: -1
    }
  }

  componentDidMount() {
    // get the dogs when this component is first rendered
    this.getProfiles()
  }

  getProfiles = async () => {
    try {
    // load index route in our API
    // note: be sure to add a / to the end of this url
    // Flask/Flask-Cors expects this!!!
      const url = process.env.REACT_APP_API_URL + "/api/v1/profiles/"
      // console.log("about to fetch data from:")
      // console.log(url)
      const killersResponse = await fetch(url, {
        credentials: 'include'
      })
      // console.log()
      const killerProfiles = await killersResponse.json()
      // console.log()

      this.setState({
        profiles: dogsJson.data
      })


    } catch(err) {
      console.log("Error getting Profile data.", err)
    }
  }

//   closeModal = () => {
//    this.setState({
//      idOfDogToEdit: -1
//    })
//  }

  render() {
    
    return (
      <React.Fragment>
        <h2>See the Dogs</h2>
        <KillerList
          killer={this.state.killers}
        />
      </React.Fragment>
    )
  }
}
