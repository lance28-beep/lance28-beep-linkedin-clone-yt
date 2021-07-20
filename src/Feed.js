import React, { useState, useEffect } from 'react'
import './Feed.css'
import CreateIcon from '@material-ui/icons/Create'
import InputOptions from './InputOptions'
import ImageIcon from '@material-ui/icons/Image'
import SubscriptionsIcon from '@material-ui/icons/Subscriptions'
import EventIcon from '@material-ui/icons/Event'
import CalendarViewDayIcon from '@material-ui/icons/CalendarViewDay'
import Post from './Post'
import { db } from './firebase'
import firebase from 'firebase'
import { useSelector } from 'react-redux'
import { selectUser } from './features/userSlice'
import FlipMove from 'react-flip-move'

function Feed() {
  const [input, setinput] = useState('')
  const [post, setpost] = useState([])
  const user = useSelector(selectUser)

  useEffect(() => {
    // effect
    db.collection('posts')
      .orderBy('timestamp', 'desc')
      .onSnapshot((snapshot) =>
        setpost(
          snapshot.docs.map((doc) => ({
            id: doc.id,
            data: doc.data(),
          }))
        )
      )
    return () => {
      // cleanup
    }
  }, [])

  const sendPost = (e) => {
    e.preventDefault()
    db.collection('posts').add({
      name: user.displayName,
      description: user.email,
      message: input,
      photoUrl: user.photoUrl || '',
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    })

    setinput('')
  }

  return (
    <div className='feed'>
      <div className='feed___inputContainer'>
        <div className='feed___input'>
          <CreateIcon />
          <form action=''>
            <input
              value={input}
              type='text'
              onChange={(e) => setinput(e.target.value)}
            />
            <button onClick={sendPost} type='submit'>
              Send
            </button>
          </form>
        </div>
        <div className='feed___inputOptions'>
          <InputOptions Icon={ImageIcon} title='Photo' color='#70b5f9' />
          <InputOptions
            Icon={SubscriptionsIcon}
            title='Video'
            color='#e7a33e'
          />
          <InputOptions Icon={EventIcon} title='Event' color='#c0cbcd' />
          <InputOptions
            Icon={CalendarViewDayIcon}
            title='Write Article'
            color='#7fclse'
          />
        </div>
      </div>
      {/* Post */}
      <FlipMove>
        {post.map(({ id, data: { name, description, message, photoUrl } }) => (
          <Post
            key={id}
            name={name}
            description={description}
            message={message}
            photoUrl={photoUrl}
          />
        ))}
      </FlipMove>
    </div>
  )
}

export default Feed
