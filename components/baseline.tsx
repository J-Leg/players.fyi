import React, { useState } from 'react'
import clsx from 'clsx'
import Image from 'next/image'
import { useRouter } from 'next/router';

import { fade, makeStyles } from '@material-ui/core/styles'
import { AppBar, Badge, Button, Divider, Drawer, IconButton, InputBase, Link, List, Toolbar, Tooltip, Typography } from '@material-ui/core'
import BugReportIcon from '@material-ui/icons/BugReport'
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft'
import GitHubIcon from '@material-ui/icons/GitHub'
import MenuIcon from '@material-ui/icons/Menu'
import SearchIcon from '@material-ui/icons/Search'

import { mainListItems } from './listItems';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  toolbar: {
    paddingRight: 24,
  },
  toolbarIcon: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: '0 8px',
    ...theme.mixins.toolbar,
  },
  appBar: {
    backgroundColor: theme.palette.background.default,
    height: 0
  },
  titleButton: {
    textTransform: 'none',
    font: 'inherit'
  },
  menuButton: {
    marginRight: 36,
  },
  menuButtonHidden: {
    display: 'none',
  },
  title: {
    flexGrow: 1
  },
  drawerPaper: {
    position: 'relative',
    whiteSpace: 'nowrap',
    width: 200,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerPaperClose: {
    overflowX: 'hidden',
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    width: theme.spacing(7),
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing(9),
    },
  },
  paper: {
    padding: theme.spacing(2),
    display: 'flex',
    overflow: 'auto',
    flexDirection: 'column',
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    marginRight: theme.spacing(2),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      width: 'auto',
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: theme.palette.secondary.dark,
  },
  inputRoot: {
    color: theme.palette.text.primary,
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
  miscIcon: {
    color: theme.palette.text.primary,
  }
}));

const iconSize = 30
const leftBrace = "{"
const rightBrace = "}"

/**
 * Base component used to display everything on the peripherals (Used on all pages)
 * E.g. Appbar, Searchbar, Side-bar, etc...
 *
 * @Component
 */
function Baseline() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false)

  const handleDrawerOpen = () => { setOpen(true) }
  const handleDrawerClose = () => { setOpen(false) }

  const router = useRouter()
  const [query, setQuery] = useState('')
  const handleInput = setValue => e => setValue(e.target.value)

  const preventDefault = f => e => {
    e.preventDefault()
    f(e)
  }
  const handleSubmit = preventDefault(() => {
    router.push({
      pathname: '/search',
      query: {q: query},
    })
  })


  return (
    <div className={classes.root}>
      <AppBar elevation={0} position="sticky" className={classes.appBar}>
        <Toolbar className={classes.toolbar}>
          <IconButton
            edge="start"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            className={clsx(classes.menuButton, open && classes.menuButtonHidden)}>
            <MenuIcon />
          </IconButton>
          <div className={classes.title}>
            <Typography component={'span'}>
              <Button href="/" className={classes.titleButton}>
                {leftBrace}
                <Image src="/quelling_blade_invert.svg" width={iconSize} height={iconSize}/>
                {rightBrace}
              </Button>
            </Typography>
          </div>
          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <form onSubmit={handleSubmit}>
              <InputBase
                placeholder="Search"
                classes={{
                  root: classes.inputRoot,
                  input: classes.inputInput,
                }}
                onChange={handleInput(setQuery)}
                inputProps={{ 'aria-label': 'search' }}/>
            </form>
          </div>
          <Tooltip title="GitHub Repo">
            <IconButton>
                <Link target="_blank" href="https://github.com/J-Leg/players.fyi">
                  <GitHubIcon className={classes.miscIcon}/>
                </Link>
            </IconButton>
          </Tooltip>
          <Tooltip title="Found a bug?">
            <IconButton>
              <Badge>
                <Link target="_blank" href="https://github.com/J-Leg/players.fyi/issues/new">
                  <BugReportIcon className={classes.miscIcon}/>
                </Link>
              </Badge>
            </IconButton>
          </Tooltip>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="temporary"
        classes={{
          paper: clsx(classes.drawerPaper, !open && classes.drawerPaperClose),
        }}
        open={open}>
        <div className={classes.toolbarIcon}>
          <IconButton onClick={handleDrawerClose}>
            <ChevronLeftIcon />
          </IconButton>
        </div>
        <Divider />
        <List>{mainListItems}</List>
      </Drawer>
    </div>
  );
}

export default Baseline;
