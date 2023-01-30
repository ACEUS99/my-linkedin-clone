import { Avatar } from '@mui/material'
import React from 'react'
import { useSelector } from 'react-redux'
import { selectUser } from '../features/counter/userSlice'
import './Sidebar.css'

export default function Sidebar() {

    const user = useSelector(selectUser)


  return (
    <div className='sidebar'>
        <div className='sidebar--top'>
            <img src="https://images.unsplash.com/photo-1656274404460-14427bdd5fff?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=996&q=80" alt=""/>
            <Avatar src="" className='sidebar--avatar'></Avatar>
            <h2>{user.displayName}</h2>
            {user.displayName==="Aaman Kudhail" && <p>Junior Frontend Developer</p>}
        </div>
        <div className='sidebar--stats'>
            <div className='sidebar--stat'>
                <p>Who's viewed your profile</p>
                <p className='stat--number'>100</p>

            </div>
            <div className='sidebar--stat'>
                <p>Connections</p>
                <p className='stat--number'>146</p>

            </div>

        </div>

        <div className='sidebar--bottom'>
            <p>Recent</p>
            <p className='hashtag'>#startups</p>
            <p className='hashtag'>#entrepreneurship</p>
            <p className='hashtag'>#openai </p>
            <p className='hashtag'>#federalreserve </p>
        </div>
    </div>
  )
}
