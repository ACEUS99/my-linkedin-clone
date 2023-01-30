import React from 'react'
import './NavbarIcon.css'
import { Avatar } from '@mui/material'
import { useSelector } from 'react-redux'
import { selectUser } from '../features/counter/userSlice'

export default function NavbarIcon({avatar, title, Icon, onClick}) {

  const user = useSelector(selectUser)

  return (
    <div onClick={onClick} className='navbar--icon'>
        {Icon && <Icon className="navbar--icon_individual"/>}
        {avatar && <Avatar src="" className="navbar--icon_individual avatar--icon"></Avatar>}
        <h3 className='navbar--icon_title'>{title}</h3>
    </div>
  )
}
