import React,  { useState, useEffect } from 'react'
import './Feed.css'
import InputOptions from './InputOptions/InputOptions'
import Post from './Post/Post';
import firebase from 'firebase';
import { db } from '../../firebase';
import FlipMove from 'react-flip-move';

//material ui
import CreateIcon from '@material-ui/icons/Create'
import ImageIcon from '@material-ui/icons/Image';
import SubscriptionsIcon from '@material-ui/icons/Subscriptions';
import EventNoteIcon from '@material-ui/icons/EventNote';
import CalendarViewDayIcon from '@material-ui/icons/CalendarViewDay';
import { useSelector } from 'react-redux';


function Feed() {

    const user = useSelector(state => state.user.user);

    const [input, setInput] = useState('')
    const [posts, setPosts] = useState([]);

    //firebase database

    useEffect(()=>{
        db.collection('posts').orderBy('timestamp', 'desc').onSnapshot(snapshot=> {
            setPosts(snapshot.docs.map(doc=>(
                {
                    id: doc.id,
                    data: doc.data()
                }
            )))
        })
    }, [])


    const sendPost = (e) => {
        e.preventDefault()

        db.collection('posts').add({
            name: user.displayName,
            description: user.email,
            message: input,
            photourl: user.photourl || "",
            timestamp: firebase.firestore.FieldValue.serverTimestamp(),
        })

        setInput('');
    }

    return (
        <div className="feed">

            <div className="feed__inputContainer">

                <div className="feed__input">
                    <CreateIcon/>
                    <form>
                        <input value={input} type="text" onChange={(e)=> setInput(e.target.value)}/>
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
            <FlipMove>
                {posts.map( ({ id, data: { name, description, message, photourl }} )=>(
                    <Post
                        key= {id}                 
                        name={name}
                        description={description} 
                        message={message}
                        photourl={photourl}
                    />
                ))}
            </FlipMove>
        </div>
    )
}

export default Feed
