import React, { useEffect } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Feed from './components/Feed';
import Widgets from './components/Widgets';
import Login from './components/Login'
import { useDispatch, useSelector } from 'react-redux';
import { selectUser } from './features/counter/userSlice';
import { auth } from './Firebase';
import { login, logout } from './features/counter/userSlice';



function App() {
  const user = useSelector(selectUser)
  const dispatch = useDispatch()

  useEffect(() => {
    auth.onAuthStateChanged(userAuth => {
      if (userAuth) {
        dispatch(login({
          email: userAuth.email,
          uid: userAuth.uid,
          displayName: userAuth.displayName,
          photoUrl: userAuth.photoURL
        }))

      } else {

        dispatch(logout())

      }
    })
  }, [])


  return (
    <div className="app">

      {/* Header */}
      <Navbar />

      {!user ? (<Login />) : (

        <div className='app--body'>
          <Sidebar />
          <Feed />
          <Widgets />
          {/* Widgets */}
        </div>

      )}


      {/* App Body */}



    </div>
  );
}

export default App;
