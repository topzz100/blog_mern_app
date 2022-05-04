
import React, { useContext} from 'react'
import { Link } from "react-router-dom";
import context from '../../Context/Context';
import { Content, Wrapper } from './MediaSide.styles';
import { useNavigate } from 'react-router-dom'

const MediaSide = () => {
   const {dispatch, show, setShow} = useContext(context) 
   const navigate = useNavigate()
   const handleLogOut = () => {
    console.log('logOut')
    dispatch({type: 'LOGOUT'})
     setShow(!show)
     navigate('/login')
  }
   
  return <>
  <Wrapper>
    <Content>
       <ul className="links">
              <li onClick = {() => setShow(!show)}>
                <Link to ='/'>
                  home
                </Link>
              </li>
              <li onClick = {() => setShow(!show)}>
                <Link to ='/about'>
                  about
                </Link>
               </li>
              <li onClick = {() => setShow(!show)}>contact</li>
              <li onClick = {() => setShow(!show)}>
                <Link to ='/write'>
                  write
                </Link>
              </li>
             <li className='logOut' onClick={handleLogOut} >logout</li>
              <li onClick = {() => setShow(!show)}>
                <ul className="socials">
                  <li onClick = {() => setShow(!show)}>
                    <i className="fab fa-facebook-square"></i>
                  </li>
                  <li onClick = {() => setShow(!show)}>
                    <i className="fab fa-instagram-square"></i>
                  </li>
                  <li onClick = {() => setShow(!show)}>
                  <i className="fab fa-pinterest-square"></i>
                  </li>
                  <li onClick = {() => setShow(!show)}>
                    <i className="fab fa-twitter-square"></i>
                  </li>
            </ul>
              </li>
            </ul>
    </Content>
  </Wrapper>
  </>;
};

export default MediaSide;
