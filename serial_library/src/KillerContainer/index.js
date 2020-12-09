import React, { Component } from 'react'
import KillerProfileList from '../KillerProfileList'

export default class KillerContainer extends Component {
  
  constructor(props) {
    super(props)

    this.state = {
      killers: [],
    }
  }

  componentDidMount() {
    this.getKillers()
  }

  getKillers = async () => {
    
    try {

      const url = process.env.REACT_APP_API_URL + "/api/v1/killers/"
      console.log("about to fetch data from:")
      console.log(url)
      const killersResponse = await fetch(url, {
        credentials: 'include'
      })
      console.log(killersResponse)
      const killersJson = await killersResponse.json()
      console.log(killersJson)

      this.setState({
        killers: killersJson.data.killers
      })

    } catch(err) {
      console.log("Error getting Killer Profiles data.", err)
    }
  }

  // randomKiller = () => {
  //    this.state.profiles[Math.floor(Math.random() * this.state.profiles.length)]
  // }


  render(){
    return (
      <React.Fragment>
        <h2>Infernal List</h2>
        <KillerProfileList
        killers={this.state.killers}
        />
      </React.Fragment>
    )
  }
}
