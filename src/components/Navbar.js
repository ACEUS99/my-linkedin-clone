import React from 'react'
import './Navbar.css'
import SearchIcon from '@mui/icons-material/Search';
import NavbarIcon from './NavbarIcon';
import Home from '@mui/icons-material/Home';
import MyNetwork from '@mui/icons-material/SupervisorAccount';
import BusinessCenter from '@mui/icons-material/BusinessCenter';
import Chat from '@mui/icons-material/Chat';
import  Notifications  from '@mui/icons-material/Notifications';
import { auth } from '../Firebase';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../features/counter/userSlice';
import { selectUser } from '../features/counter/userSlice';



export default function Navbar() {

  const user = useSelector(selectUser);

  

  

  const dispatch = useDispatch()

  function logOutofApp(){
    dispatch(logout())
    auth.signOut()
  }

  return (
    <div className='navbar'>

      <div className='navbar--left'>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSr3_ijsHy7asI734QY6ixc9B-W_i28--VPQ&usqp=CAU" alt=""></img>

        <div className='navbar--left_search'>
          <div className='navbar--left_search_text'>
            <SearchIcon className='navbar--left_search_icon'/>
            <h3 className='search--text'>Search</h3> 
          </div>
          <input type="text" placeholder='Search'></input>
        </div>
      </div>
      <div className='navbar--right'>

        <NavbarIcon Icon={Home} title="Home" />
        <NavbarIcon Icon={MyNetwork} title="My Network" />
        <NavbarIcon Icon={BusinessCenter} title="Jobs" />
        <NavbarIcon Icon={Chat} title="Messaging" />
        <NavbarIcon Icon={Notifications} title="Notifications" />
        {user && <NavbarIcon avatar={true} title="Exit" onClick={logOutofApp}/>}
        

      </div>

    
    </div>
  )
}
