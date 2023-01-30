import React from 'react'
import './Post.css'
import { Avatar } from '@mui/material'
import UploadOption from './UploadOption'
import ThumbUpOutlinedIcon from '@mui/icons-material/ThumbUpOutlined';
import CommentOutlinedIcon from '@mui/icons-material/CommentOutlined';
import ShareOutlinedIcon from '@mui/icons-material/ShareOutlined';
import SendOutlinedIcon from '@mui/icons-material/SendOutlined';
import { useSelector } from 'react-redux';
import { selectUser } from '../features/counter/userSlice';

export default function Post({name, message, photoUrl}) {

    const user = useSelector(selectUser)
   
  return (
    <div className='post'>
     
        <div className='post--header'>
            <Avatar src=""></Avatar>
            <div className='post--info'>
                <h2>{name}</h2>
                <p>New User</p>
            </div>
        </div>

        <div className='post--body'>
            <p id='post--body--message'>{message}</p>
        </div>

        <div className='post--buttons'>
            <UploadOption Icon={ThumbUpOutlinedIcon} title="Like"/>
            <UploadOption Icon={CommentOutlinedIcon} title="Comment"/>
            <UploadOption Icon={ShareOutlinedIcon} title="Share"/>
            <UploadOption Icon={SendOutlinedIcon} title="Send"/>
        </div>

    </div>
  )
}
