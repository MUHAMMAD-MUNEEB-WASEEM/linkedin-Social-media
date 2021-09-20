import React from 'react'
import './HeaderOptions.css';
import { Avatar } from '@material-ui/core';

function HeaderOptions({Icon, title, avatar}) {
    return (
        <div className="headerOption">
            {Icon && <Icon className="headerOption__icon"/>}
            {avatar && <Avatar className="headerOption__icon" src={avatar}/>}
            <h3 className="headerOption__title">{title}</h3>
        </div>
    )
}

export default HeaderOptions
