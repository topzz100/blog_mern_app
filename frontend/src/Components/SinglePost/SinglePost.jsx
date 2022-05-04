import React, { useContext, useEffect, useState } from 'react'
import { Content, Wrapper } from './SinglePost.styles'
import axios from 'axios'
import context from '../../Context/Context'
import { useLocation } from 'react-router-dom'

const SinglePost = () => {
  const {user} = useContext(context)
   const location = useLocation()
   const path = location.pathname.split('/')[2]

  
   const [post, setPost] = useState([])
   const [title, setTitle] = useState('')
   const [desc, setDesc] = useState('')
   const [isUpdate , setIsUpdate] = useState(false)
   
   
 
   useEffect(() => {
      const fetchSinglePost = async() => {
       try{
          const res = await axios.get('/api/posts/'+ path)
            setPost(res.data);
            setTitle(res.data.title)
            setDesc(res.data.desc)
       }catch(err){
        console.log(err);
       }

     }
     fetchSinglePost()
   }, [path])

 

   const handleUpdate = async() => {
     try{
      await axios.put('/api/posts/'+ path, {
        username: user.username,
        title,
        desc
      })
      setIsUpdate(false)
     }catch(err){
       console.log(err);
     }

   }

  const handleDelete = async() => {
    try{
      await axios.delete('/api/posts/' + path, {data: {username: user.username}})
       window.location.replace( '/' )
    }catch(err){
      console.log(err)
    }
  } 
  return (
    <>
      <Wrapper>
        <Content>
          {
            post.photo && (<img src={ post.photo} alt="" />)
           
          }
           
          <div className="postTitle">
            {
              isUpdate? 
              <input type="text" value = {title} onChange = {(e) => { setTitle(e.target.value)}} autoFocus /> :
              <h4>{title}</h4>
            }
            
            {
              post.username === user?.username &&  
              ( !isUpdate && 
                <div className="edit">
                <span><i className="fas fa-edit" onClick = {() => {setIsUpdate(true)}}></i></span>
                <span><i className="far fa-trash-alt" onClick={handleDelete}></i></span>
            </div>
              )
              
            }
           
           
          </div>
          {
            !isUpdate && 
            <div className="author">
              <h4 className="name">
                  Author: <span>{post.username}</span>
              </h4>
              <span className='time'>{new Date(post.createdAt).toDateString()}</span>
            </div>
          }
          
          {
            isUpdate? 
            <textarea value = {desc} onChange = {(e)=>{ setDesc(e.target.value)}}></textarea> :
            <p className="postText" >{desc}</p>
          }
          {
            isUpdate && <button onClick = {handleUpdate}>Update</button>
          }
        </Content>
      </Wrapper>
    </>
  )
}

export default SinglePost
