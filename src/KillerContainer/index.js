import React, { Component } from 'react'
import KillerProfileList from '../KillerProfileList'

export default class KillerContainer extends Component {
  
  constructor(props) {
    super(props)

    this.state = {
      killer: []
    }
  }

  componentDidMount() {
    this.getKillers()
  }

  // componentDidUpdate(){
  // console.log('this is the data for this.state.killers:', this.state.killers)
  // }

  getKillers = async () => {

    try {

      const url = process.env.REACT_APP_API_URL + "/api/v1/killers/random"
      console.log("about to fetch data from:")
      console.log(url)
      const killersResponse = await fetch(url, {
        credentials: 'include'
      })
      console.log(killersResponse)
      const killersJson = await killersResponse.json()
      console.log(killersJson)

      this.setState({
        killers: killersJson.data
      })
      console.log('state', Array.isArray(this.state.killers))
    } catch(err) {
      console.log("Error getting Killer Profiles data.", err)
    }
  }


  render(){
    return (
      <React.Fragment>
        <h2>Infernal List</h2>
        <KillerProfileList
        killer={this.state.killers}
        />
      </React.Fragment>
    )
  }
}
      //   <KillerProfileList
      //     killer={this.state.killers}
      //  /> 