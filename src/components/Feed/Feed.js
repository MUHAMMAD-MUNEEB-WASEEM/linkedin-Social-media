import React,  { useState } from 'react'
import './Feed.css'
import InputOptions from './InputOptions/InputOptions'

//material ui
import CreateIcon from '@material-ui/icons/Create'
import ImageIcon from '@material-ui/icons/Image';
import SubscriptionsIcon from '@material-ui/icons/Subscriptions';
import EventNoteIcon from '@material-ui/icons/EventNote';
import CalendarViewDayIcon from '@material-ui/icons/CalendarViewDay';
import Post from './Post/Post';

function Feed() {

    const [posts, setPosts] = useState([]);

    const sendPost = (e) => {
        e.preventDefault()
    }

    return (
        <div className="feed">

            <div className="feed__inputContainer">

                <div className="feed__input">
                    <CreateIcon/>
                    <form>
                        <input type="text"/>
                        <button onClick={sendPost} type="submit">Send</button>
                    </form>
                </div>

                <div className="feed__inputOptions">
                    <InputOptions Icon={ImageIcon} title="Photo" color="#70b5f9" />
                    <InputOptions Icon={SubscriptionsIcon} title="Video" color="#E7A33E" />
                    <InputOptions Icon={EventNoteIcon} title="Event" color="#C0CBCD" />
                    <InputOptions Icon={CalendarViewDayIcon} title="Write article" color="#7FC15E" />
                </div>
            
            </div>
            {posts.map((post)=>{
                <Post/>
            })}
            <Post 
                name="Muneeb" 
                description="This is a test" 
                message="This works!"
                photourl=""
            />

        </div>
    )
}

export default Feed
