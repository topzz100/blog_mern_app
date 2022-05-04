import axios from 'axios'
import React, { useContext, useRef } from 'react'
import { Link } from 'react-router-dom'
// import NavBar from '../../Components/NavBar/NavBar'
import context from '../../Context/Context'
import { Content, Wrapper } from './Login.styles'
import { CircularProgress } from "@material-ui/core";

const Login = () => {
    const passwordRef = useRef()
  const emailRef = useRef()
  //  const [isError, setIsError] = useState(false)
  const{ dispatch, isFetching} = useContext(context)

  const handleSubmit = async(e) => {
    e.preventDefault()
    dispatch({type: "LOGIN_START"})
    try{
        const res = await axios.post('/api/auth/login', 
      {
        email: emailRef.current.value,
        password: passwordRef.current.value
      })
      dispatch({type: "LOGIN_SUCCESS", payload: res.data})
    }catch(err){
      dispatch({type: "LOGIN_FAILURE"})
      console.log(err);
    }
  }
  return (
    <>
      {/* <NavBar/> */}
      <Wrapper>
        <Content>
          <h4>Login</h4>
          <form action="">
            
            <label htmlFor="">Email</label>
            <input type="email" placeholder='Smith@mail.com' ref = {emailRef}/>
            <label htmlFor="">Password</label>
            <input type="password" placeholder='Password' ref={passwordRef}/>
            <button type='submit' onClick={handleSubmit}>
               {isFetching ? (
                <CircularProgress color="white" size="20px" />
              ) : (
                "Log In"
              )}
            </button>
            
          </form>
          <Link to={'/register'}>
            <button className='reg'>Register</button>
          </Link>
        </Content> 
      </Wrapper> 
    </>
  )
}

export default Login
