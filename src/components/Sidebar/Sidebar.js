import { Avatar } from '@material-ui/core'
import React from 'react'
import { useSelector } from 'react-redux'
import './Sidebar.css'

function Sidebar() {

    const user = useSelector(state => state.user.user);

    const recentItem = (topic) => (
        <div className="sidebar__recentItem">
            <span className="sidebar__hash">#</span>
            <p>{topic}</p>
        </div>
    )

    return (
        <div className="sidebar">

            <div className="sidebar__top">

                <img src="https://images.unsplash.com/photo-1560345573-9f453083c335?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxleHBsb3JlLWZlZWR8NjR8fHxlbnwwfHx8&auto=format&fit=crop&w=500&q=60" alt=""/>
                {user?.photourl ?
                 (<Avatar className="headerOption__icon" src={user?.photourl}/>)
                 :
                 (<Avatar className="headerOption__icon" >{user?.email[0]}</Avatar>)
                 
                 }
                <h2>{user.displayName}</h2>
                <h4>{user.email}</h4>

            </div>

            <div className="sidebar__stats">

                <div className="sidebar__stat">
                    <p>Who viewed you</p>
                    <p className="sidebar__statNumber">2,543</p>
                </div>
                
                <div className="sidebar__stat">
                    <p>Views on post</p>
                    <p className="sidebar__statNumber">2,448</p>
                </div>

            </div>

            <div className="sidebar__bottom">
                <p>Recent</p>
                {recentItem('reactjs')}
                {recentItem('programming')}
                {recentItem('fullstack')}
                {recentItem('design')}
                {recentItem('developer')}
            </div>

        </div>
    )
}


export default Sidebar
