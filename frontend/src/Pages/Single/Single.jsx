import React, {useContext} from 'react'
import MediaNav from '../../Components/MediaNav/MediaNav'
import MediaSide from '../../Components/MediaSide/MediaSide'
import NavBar from '../../Components/NavBar/NavBar'
import SideBar from '../../Components/SideBar/SideBar'
import SinglePost from'../../Components/SinglePost/SinglePost'
import context from '../../Context/Context'
import { Content, Wrapper} from './Single.styles'

const Single = () => {
  const{ show } = useContext(context)
  return (
    <>
      <NavBar/>
       {
        show &&
        <div className="mediaSide" >
          <MediaSide/>
        </div>
      }
      <MediaNav/>
      <Wrapper>
        <Content>
          <SinglePost/>
          <div className="sideBar">
            <SideBar/>
          </div>
        </Content>
      </Wrapper>
    </>
  )
}

export default Single
