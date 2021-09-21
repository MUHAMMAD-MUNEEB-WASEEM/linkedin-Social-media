import React, { forwardRef } from 'react'
import InputOptions from '../InputOptions/InputOptions'
import './Post.css'

//material-ui
import ThumbUpAltOutlinedIcon from '@material-ui/icons/ThumbUpAltOutlined';
import ChatOutlinedIcon from '@material-ui/icons/ChatOutlined';
import ShareOutlinedIcon from '@material-ui/icons/ShareOutlined';
import SendOutlinedIcon from '@material-ui/icons/SendOutlined';
import { Avatar } from '@material-ui/core'

const Post = forwardRef(({ name, description, message, photourl }, ref) =>  {
    return (
        <div ref={ref} className="post">

            <div className="post__header">
                
                
                <Avatar src={photourl} alt="photo">{name[0]}</Avatar>
                <div className="post__info">
                    <h2>{name}</h2>
                    <p>{description}</p>

                </div>
                
            </div>

            <div className="post__body">
                <p>{message}</p>
            </div>

            <div className="post__button">
                <InputOptions Icon={ThumbUpAltOutlinedIcon} title="Like" color="gray" />
                <InputOptions Icon={ChatOutlinedIcon} title="Comment" color="gray" />
                <InputOptions Icon={ShareOutlinedIcon} title="Share" color="gray" />
                <InputOptions Icon={SendOutlinedIcon} title="Send" color="gray" />
            </div>

        </div>
    )
})

export default Post
