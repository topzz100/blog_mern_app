import React from 'react'
import Post from '../Post/Post'
import { Content, Wrapper } from './Posts.styles'

const Posts = ({posts}) => {
  return (
    <>
      <Wrapper>
        <Content>
          {posts.map((post) => {
            return <Post post = {post} key={post._id}/>
          })}
        </Content>
      </Wrapper>
    </>
  )
}

export default Posts
