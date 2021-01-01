import React from 'react'
import Link from 'next/link'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import InfoIcon from '@material-ui/icons/Info'
import BuildIcon from '@material-ui/icons/Build'

export const mainListItems = (
  <div>
    <Link href='/about'>
      <ListItem button>
        <ListItemIcon>
          <InfoIcon />
        </ListItemIcon>
        <ListItemText primary="About" />
      </ListItem>
    </Link>
    <Link href='/api-info'>
      <ListItem button>
        <ListItemIcon>
          <BuildIcon />
        </ListItemIcon>
        <ListItemText primary="API" />
      </ListItem>
    </Link>
  </div>
);

