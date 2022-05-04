import React, { useContext } from 'react'
import { Link } from "react-router-dom";
import context from '../../Context/Context';
import { Wrapper, Content } from './NavBar.styles'
import { useNavigate } from 'react-router-dom'

const NavBar = () => {
  const {user, dispatch} = useContext(context)
  const navigate = useNavigate()
  const handleLogOut = () => {
    console.log('logOut')
    dispatch({type: 'LOGOUT'})
    navigate('/login')
  }
  return (
    <>
      <Wrapper>
        <Content>
          <div className="left">
            <ul className="socials">
              <li>
                <i className="fab fa-facebook-square"></i>
              </li>
              <li>
                <i className="fab fa-instagram-square"></i>
              </li>
              <li>
               <i className="fab fa-pinterest-square"></i>
              </li>
              <li>
                <i className="fab fa-twitter-square"></i>
              </li>
            </ul>
          </div>
          <div className="center">
            <ul className="links">
              <li>
                <Link to ='/'>
                  home
                </Link>
              </li>
              <li>about</li>
              <li>contact</li>
              <li>
                <Link to ='/write'>
                  write
                </Link>
              </li>
              <li className='logOut' onClick={handleLogOut} >logout</li>
            </ul>

          </div>
          <div className="right">
            <Link to={'/settings'}>
              <img src = { user?.profilePic? user?.profilePic : 'https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png'} alt=''/>
            </Link>
            <i className="fas fa-search"></i>
          </div>
        </Content>
      </Wrapper>
    </>
  )
}

export default NavBar
