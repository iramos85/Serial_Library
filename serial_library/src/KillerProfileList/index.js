import React, { useState } from 'react'

import { makeStyles } from '@material-ui/styles'
import Card from '@material-ui/core/Card'
import CardHeader from '@material-ui/core/CardHeader'
import CardContent from '@material-ui/core/CardContent'
import CardActions from '@material-ui/core/CardActions'
import Typography from '@material-ui/core/Typography'
import IconButton from '@material-ui/core/IconButton'
import CardMedia from '@material-ui/core/CardMedia'
import Collapse from '@material-ui/core/Collapse'
import ExpandLessIcon from '@material-ui/icons/ExpandLess'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'


export default class SerialProfileList extends Component {
  
  constructor(props) {
    super(props)
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
        killers: killersJson.data 
      })


    } catch(err) {
      console.log("Error getting Killer Profiles data.", err)
    }
  }

  useStyles = makeStyles(theme => ({
    card: {
      maxWidth: 400
    },
    expand: {
      marginLeft: 'auto'
    }
  }))

  ExpandIcon = ({ expanded }) =>
    expanded ? <ExpandLessIcon/> : <ExpandMoreIcon/>

  ExpandableCards() {
    const classes = useStyles()
    const [expanded, setExpanded] = useState (false)

    const toggleExpanded = () => {
      setExpanded(!expanded)
    }

  

  
    render() {
      return (
        <React.Fragment>
        <Card className={classes.card}>
          <CardHeader
            title='Ms. Test'
            subheader='text sub-header'
          />
          <CardContent>
            <Typography variant='caption'>Active: 1985-2020 in United States</Typography>
            <Typography>Elizabeth Bathory Countess Elizabeth Báthory de Ecsed a Hungarian noblewoman and serial killer from the Báthory family of nobility in the Kingdom of Hungary. She has been labelled by Guinness World Records as the most prolific female murderer, though the precise number of her victims is unknown. Báthory and four collaborators were accused of torturing and killing hundreds of young women between 1585 and 1609.</Typography>
          </CardContent>
          <CardActions disableActionspacing>
          <IconButton
            className={classes.expand}
            onClick={toggleExpanded}
          >
            <ExpandIcon expanded={expanded} />
          </IconButton> 
          </CardActions>
          <Collapse in={expanded}>
            <CardContent>
              <Typography>
                She is often compared with Vlad the Impaler of Wallachia (on whom the fictional Count Dracula is partly based), having contributed some of the mythos to the Dracula legend herself. Nicknames and literary epithets attributed to her include The Blood Countess and Countess Dracula.
              </Typography>
            </CardContent>
          </Collapse>
        </Card>
        </React.Fragment>
      )
    }
  }
}
