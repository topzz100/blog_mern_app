import React, { useRef, useState } from 'react'
// import NavBar from '../../Components/NavBar/NavBar'
import { Content, Wrapper } from './Register.styles'
import axios from 'axios'
import { Link } from 'react-router-dom'

const Register = () => {
  const passwordRef = useRef()
  const usernameRef = useRef()
  const emailRef = useRef()
   const [isError, setIsError] = useState(false)

  const handleSubmit = async(e) => {
    e.preventDefault()
    setIsError(false)
    try{
       const res = await axios.post('/api/auth/register', {
        username: usernameRef.current.value,
        email: emailRef.current.value,
        password: passwordRef.current.value
      })
       res.data && window.location.replace('/login')
    }catch(err){
      setIsError(true)
      console.log(err);
    }
  }
  return (
    <>
      {/* <NavBar/> */}
      <Wrapper>
        <Content>
          <h4>Register</h4>
          <form action="">
            <label htmlFor="">Name</label>
            <input type="text" placeholder='username' ref={usernameRef}/>
            <label htmlFor="">Email</label>
            <input type="email" placeholder='Smith@mail.com'  ref={emailRef}/>
            <label htmlFor="">Password</label>
            <input type="password" placeholder='Password'  ref={passwordRef}/>
            <button type='submit' onClick={handleSubmit}>Register</button>
            
          </form>
          <Link to = '/login'>
             <button className='reg'>Login</button>
          </Link>
          {isError && <p style={{color: 'red'}}>something is wrong</p>}
        </Content> 
      </Wrapper> 
    </>
  )
}

export default Register
