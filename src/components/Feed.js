import { Avatar } from '@mui/material'
import React, { useEffect, useState } from 'react'
import './Feed.css'
import UploadOption from './UploadOption'
import ImageIcon from '@mui/icons-material/Image';
import SmartDisplayIcon from '@mui/icons-material/SmartDisplay';
import EventIcon from '@mui/icons-material/Event';
import NewspaperIcon from '@mui/icons-material/Newspaper';
import Post from './Post';
import { db } from '../Firebase';
import { collection, addDoc, onSnapshot} from "firebase/firestore"; 
import { useSelector } from 'react-redux';
import { selectUser } from '../features/counter/userSlice';






export default function Feed() {

    const [posts, setPosts] = useState([])
    const [input, setInput] = useState('')

    const user = useSelector(selectUser)
 



    useEffect(() => {

      const c = collection(db, "posts")

      
      onSnapshot(c ,(snapshot) => 
       
        setPosts(
            snapshot.docs.map((doc) => ({
                id: doc.id,
                data: doc.data()
            }))
        ))

       
        
        
        
    }, [])

    console.log("posts from outside function body: ", posts)


  
    const sendPost = async (e) =>{
        e.preventDefault(e)
        await addDoc(collection(db, 'posts'), {
            name: user.displayName,
            description: '',
            message: input,
            photoUrl: user.displayName[0],

      
            
           
          })

          setInput("")




    }

    function settingInput(e){
        setInput(e.target.value)
        
        document.getElementById('send-btn').style.display = "block";
        document.getElementById('send-btn').style.cursor = "pointer";


    }

   

  return (
    <div className='feed'>
        <div className='feed--input--container'>
            <div className='feed--input'>
                <Avatar src=""></Avatar>
                <form>
                    <input value={input} onChange={settingInput} type="text" placeholder='Start a post'></input>
                    <button id="send-btn" onClick={sendPost} type='submit'>Send</button>
                </form>
            </div>

            <div className='feed--input--options'>
                <UploadOption id="icon" title="Photo" Icon={ImageIcon} color="skyblue"/>
                <UploadOption id="icon" title="Video" Icon={SmartDisplayIcon} color="red"/>
                <UploadOption id="icon" title="Calendar" Icon={EventIcon} color="orange"/>
                <UploadOption id="icon" title="article" Icon={NewspaperIcon} color="black"/>
            </div>
        </div>

        {/* Posts */}

        

        {posts.map(({id, data: {name, description, message, photoUrl}}) => (

          
            <Post
             key={id}
             name={name}
             description={description}
             message={message}
             photoUrl={photoUrl}
             />

        ))}

    </div>
  )
}
