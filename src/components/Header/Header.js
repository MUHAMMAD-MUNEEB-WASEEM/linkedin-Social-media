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
import { useDispatch } from 'react-redux';
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
                    onClick = {logoutToApp}
                    avatar="https://whatsapp-mern-fullstack.web.app/static/media/my%20image3jpg.f2592b34.jpg" 
                    title="me"/>
            </div>
        </div>
    )
}

export default Header
