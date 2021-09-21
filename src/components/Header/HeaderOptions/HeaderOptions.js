import React from 'react'
import './HeaderOptions.css';
import { Avatar } from '@material-ui/core';
import { useSelector } from 'react-redux';

function HeaderOptions({Icon, title, avatar, onClick}) {
    
    const user = useSelector(state => state.user.user);

    return (
        <div onClick={onClick} className="headerOption">
            {Icon && <Icon className="headerOption__icon"/>}

            {avatar && 
                (user?.photourl ?
                 (<Avatar className="headerOption__icon" src={user?.photourl}/>)
                 :
                 (<Avatar className="headerOption__icon" >{user?.email[0]}</Avatar>)
                 
                 )}

            <h3 className="headerOption__title">{title}</h3>
        </div>
    )
}

export default HeaderOptions
