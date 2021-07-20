import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import './Header.css'
import SearchIcon from '@material-ui/icons/Search'
import LinkedInIcon from '@material-ui/icons/LinkedIn'
import HeaderOption from './HeaderOption'
import HomeIcon from '@material-ui/icons/Home'
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount'
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter'
import ChatIcon from '@material-ui/icons/Chat'
import NotificationsIcon from '@material-ui/icons/Notifications'
// import AccountCircleIcon from '@material-ui/icons/AccountCircle'
import { useDispatch, useSelector } from 'react-redux'
import { logout, selectUser } from './features/userSlice'
import { auth } from './firebase'

const useStyles = makeStyles({
  root: {
    objectFit: 'contain',
    height: '40px',
    marginRight: '10px',
  },
})

function Header() {
  const classes = useStyles()
  const dispatch = useDispatch()
  const user = useSelector(selectUser)
  const logoutOfApp = () => {
    dispatch(logout())
    auth.signOut()
  }
  return (
    <div className='header'>
      <div className='header__left'>
        <LinkedInIcon className={classes.root} />
        <div className='header__search'>
          <SearchIcon />
          <input placeholder='Search' type='text' />
        </div>
      </div>
      <div className='header__right'>
        <HeaderOption Icon={HomeIcon} title='Home' />
        <HeaderOption Icon={SupervisorAccountIcon} title='My Network' />
        <HeaderOption Icon={BusinessCenterIcon} title='Jobs' />
        <HeaderOption Icon={ChatIcon} title='Messaging' />
        <HeaderOption Icon={NotificationsIcon} title='Notifications' />
        <HeaderOption avatar={true} title='ME' onClick={logoutOfApp} />
      </div>
    </div>
  )
}

export default Header
