import React from 'react'
import { Link } from "react-router-dom";
import { Wrapper, Content } from './Post.styles'

const Post = ({post}) => {
  return (
    <>
      <Wrapper>
        <Content>
           {post.photo &&
            (<img src={post.photo} alt="" />)
          } 
         
          <div className="categories">
             {post.categories && (post.categories.map(cat => {
              return <span>{cat}</span>
            }))} 
            {/* <span>Music</span><span>Life</span> */}
          </div>
          <h4 className="title">
            <Link to = {`/post/${post._id}`}>
              {post.title}
            </Link>
            </h4>
          <span className='time'>{new Date(post.createdAt).toDateString()}</span>
          <p>{post.desc}</p>
        </Content>  
      </Wrapper> 
    </>
  )
}

export default Post
