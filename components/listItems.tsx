import React from 'react'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import InfoIcon from '@material-ui/icons/Info'
import BuildIcon from '@material-ui/icons/Build'

export const mainListItems = (
  <div>
    <ListItem button href="/about">
      <ListItemIcon>
        <InfoIcon />
      </ListItemIcon>
      <ListItemText primary="About" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <BuildIcon />
      </ListItemIcon>
      <ListItemText primary="API" />
    </ListItem>
  </div>
);

