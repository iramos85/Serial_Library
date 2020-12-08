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
import LibraryAddIcon from '@material-ui/icons/LibraryAdd';
import LibraryAddCheckIcon from '@material-ui/icons/LibraryAddCheck';


export default function KillerProfileList(props) {

  const useStyles = makeStyles(theme => ({
    card: {
      maxWidth: 400
    },
    expand: {
      marginLeft: 'auto'
    }
  }))

  const ExpandIcon = ({ expanded }) =>
    expanded ? <ExpandLessIcon/> : <ExpandMoreIcon/>

  const ExpandableCards = () => {
  const classes = useStyles()
  const [expanded, setExpanded] = useState (false)
  
  const profiles = props.profiles.map(profile => {

    const toggleExpanded = () => {
      setExpanded(!expanded)
    }
      return (
        <React.Fragment>
        <Card className={classes.card}>
          <CardHeader
            title={profile.name}
            subheader={profile.active}
          />
          <CardContent>
            <Typography variant='caption'>Active: {profile.active}</Typography>
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
              {profile.summary}
              </Typography>
            </CardContent>
          </Collapse>
          {this.state.action === "Added"
          ?
          <LibraryAddIcon/>
          :
          <LibraryAddCheckIcon/>
          }
        </Card>
        </React.Fragment>
      )
    })

    return(
      <Card.Group>
        {profiles}
      </Card.Group>
    )
  }
}
