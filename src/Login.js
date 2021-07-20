import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import './Login.css'
import { auth } from './firebase'
import { login } from './features/userSlice'

function Login() {
  const [email, setemail] = useState('')
  const [password, setpassword] = useState('')
  const [name, setname] = useState('')
  const [profilePicture, setprofilePicture] = useState('')
  const dispatch = useDispatch()

  const register = () => {
    if (!name) {
      return alert('Please enter a full name')
    }
    auth.createUserWithEmailAndPassword(email, password).then((userAuth) => {
      userAuth.user
        .updateProfile({
          displayName: name,
          photoUrl: profilePicture,
        })
        .then(() => {
          dispatch(
            login({
              email: userAuth.user.email,
              uid: userAuth.user.uid,
              displayName: name,
              photoUrl: profilePicture,
            })
          )
        })
        .catch((error) => alert(error))
    })
  }

  const logInApp = (e) => {
    e.preventDefault()

    auth
      .signInWithEmailAndPassword(email, password)
      .then((userAuth) => {
        dispatch(
          login({
            email: userAuth.user.email,
            uid: userAuth.user.uid,
            displayName: userAuth.user.displayName,
            photoUrl: userAuth.user.photoURL,
          })
        )
      })
      .catch((error) => alert(error))
  }

  return (
    <div className='login'>
      <img
        src='https://upload.wikimedia.org/wikipedia/commons/thumb/8/80/LinkedIn_Logo_2013.svg/1024px-LinkedIn_Logo_2013.svg.png'
        alt=''
      />
      <form method='get'>
        <input
          value={name}
          onChange={(e) => setname(e.target.value)}
          placeholder='Full name (required if registering)'
          type='text'
        />
        <input
          value={profilePicture}
          onChange={(e) => setprofilePicture(e.target.value)}
          placeholder='Profile pic URL (optional)'
          type='text'
        />
        <input
          value={email}
          onChange={(e) => setemail(e.target.value)}
          placeholder='Email'
          type='text'
        />
        <input
          value={password}
          onChange={(e) => setpassword(e.target.value)}
          placeholder='Password'
          type='password'
        />
        <button type='submit' onClick={logInApp}>
          Sign In
        </button>
      </form>
      <p>
        Not a member?
        <span className='login___register' onClick={register}>
          Register Now
        </span>
      </p>
    </div>
  )
}

export default Login
