import React from 'react'
import Card from '@material-ui/core/Card'
import CardHeader from '@material-ui/core/CardHeader'
import CardContent from '@material-ui/core/CardContent'
import Favorite from '@material-ui/icons/Favorite';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FavoriteBorder from '@material-ui/icons/FavoriteBorder';
import Checkbox from '@material-ui/core/Checkbox';
import Typography from '@material-ui/core/Typography'




export default function KillerProfileList(props) {
  console.log("Here is the props in ProfileList:", props.killer)
      return(
        <React.Fragment>
        {
          props.killer != undefined
          &&
        <Card key={props.killer.id}>
            <CardHeader
              title={props.killer.name}
              subheader={props.active}
            />
          <CardContent>
          <Typography variant='caption'>{props.killer.active}</Typography>
          </CardContent>
          <CardContent>
            <Typography>
              {props.killer.summary}
            </Typography>
          </CardContent>
          {/* <FormControlLabel
        control={<Checkbox icon={<FavoriteBorder />} checkedIcon={<Favorite />} name="checkedH" />}
        label="Add to Reading List" 
        //onClick={}  currentUser.readinglist.push(event.currentTarget)
      /> */}
        </Card>
        }
      </React.Fragment>
      )
  return(
    <Card>
      {KillerProfileList}
    </Card>
  )
}

