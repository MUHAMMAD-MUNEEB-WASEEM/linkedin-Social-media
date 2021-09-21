import React from 'react'
import './Header.css'

import logo from '../images/linkedin.png'

//material ui
import SearchIcon from '@material-ui/icons/Search';
import HeaderOptions from './HeaderOptions/HeaderOptions';
import HomeIcon from '@material-ui/icons/Home';
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter';
import ChatIcon from '@material-ui/icons/Chat';
import NotificationsIcon from '@material-ui/icons/Notifications';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../../redux/userSlice';
import { auth } from '../../firebase';

function Header() {

    const dispatch = useDispatch();

    const logoutToApp = ()=>{
        dispatch(logout())
        auth.signOut()
    }
    return (
        <div className="header">

            <div className="header__left">
                
                <img src={logo} alt=""/>

                <div className="header__search">
                    <SearchIcon/>
                    <input placeholder="Search" type="text"/>
                </div>

            </div>
            <div className="header__right">
                <HeaderOptions Icon={HomeIcon} title="Home" />
                <HeaderOptions Icon={SupervisorAccountIcon} title="My Network" />
                <HeaderOptions Icon={BusinessCenterIcon} title="Jobs" />
                <HeaderOptions Icon={ChatIcon} title="Messaging" />
                <HeaderOptions Icon={NotificationsIcon} title="Notification" />
                <HeaderOptions 
                    avatar={true}
                    onClick = {logoutToApp}
                    title="me"/>
            </div>
        </div>
    )
}

export default Header
