import React, { useContext, useState } from 'react'
import { Content, Wrapper, Main } from './Settings.styles'
import NavBar from '../../Components/NavBar/NavBar'
import SideBar from '../../Components/SideBar/SideBar'
import context from '../../Context/Context'
import axios from 'axios'
import MediaNav from '../../Components/MediaNav/MediaNav'
import MediaSide from '../../Components/MediaSide/MediaSide'
import { storage } from '../../firebase'
import { ref, getDownloadURL, uploadBytesResumable } from 'firebase/storage'
import { useNavigate } from 'react-router-dom'


const Settings = () => {
    const {user, dispatch, show } = useContext(context)
  const [file, setFile] = useState(null)
  const[username, setUsername] = useState(user.username)
  const[email, setEmail] = useState(user.email)
  const[password, setPassword] = useState('')
  const navigate = useNavigate()
 

    const filename = Date.now() + file?.name
   const handleUpdate = async(e) => {
    e.preventDefault()
    dispatch({type: 'UPDATE_START'})
    const updatedUser = {
      userId: user._id,
      username,
      password,
      email
    };
    if(file){
       const storageRef = ref(storage, 'images/'+filename);

      const uploadTask = uploadBytesResumable(storageRef, file);

      uploadTask.on('state_changed', 
        (snapshot) => {
          
          const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          console.log('Upload is ' + progress + '% done');

        }, 
        (error) => {
          console.log(error)
        }, 
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            console.log('File available at', downloadURL);
            updatedUser.profilePic = downloadURL
            updateUser(updatedUser)
          })
          .catch(err => {
            console.log(err);
          });
        }
      );


    }
  }
  const updateUser = async(upload)=> {
    try{
      const res = await axios.put('/api/users/' + user._id, upload)
      dispatch({type: 'UPDATE_SUCCESS', payload: res.data})
      res.data && window.location.replace('/')
    }catch(err){
      dispatch({type: 'UPDATE_FAILURE'})
      console.log(err);
    }

  }
  const handleDelete = async() => {
    try{
      axios.delete('/api/users/' + user._id)
      dispatch({type: 'LOGOUT'})
      navigate('/login')
    }catch(err){
      console.log(err);
    }
  }
  //  const handleUpdate = async(e) => {
  //   e.preventDefault()
  //   dispatch({type: 'UPDATE_START'})
  //   const updatedUser = {
  //     userId: user._id,
  //     username,
  //     password,
  //     email
  //   };
  //   if(file){
  //     const data = new FormData()
      
  //     data.append('name', filename)
  //     data.append('file', file)
  //     updatedUser.profilePic = filename
  //     try{
  //       await axios.post('http://127.0.0.1:5500/api/upload', data)
  //     }catch(err){
  //       console.log(err);
  //     }
  //   }
  //   try{
  //     const res = await axios.put('http://127.0.0.1:5500/api/users/' + user._id, updatedUser)
  //     dispatch({type: 'UPDATE_SUCCESS', payload: res.data})
  //     res.data && window.location.replace('/')
  //   }catch(err){
  //     dispatch({type: 'UPDATE_FAILURE'})
  //     console.log(err);
  //   }
  // }

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
         <Main>
           <div className="settingsTitle">
            <span className="update">Update Your Account</span>
            <span className="del" onClick = {handleDelete}>Delete Account</span>
          </div>
          <form action="" onSubmit={handleUpdate}>
            <label htmlFor="">Profile Picture</label>
            <div className="profilePic">
              {
                file? 
                <img src={URL.createObjectURL(file)} alt="" />:
                // 
                <img src={user?.profilePic} alt="" />
              }
              
              <label htmlFor="addImg">
                <i className="fas fa-user-circle"></i>
              </label>
              <input type="file" id='addImg' style={{display : "none"}} onChange = {(e) => {setFile(e.target.files[0])}}/>
            </div>
            <label htmlFor="">Username</label>
            <input type="text" placeholder={username}  onChange ={(e) => {setUsername(e.target.value)}}/>
            <label htmlFor="">Email</label>
            <input type="email" placeholder={email} onChange ={(e) => {setEmail(e.target.value)}}/>
            <label htmlFor="">Password</label>
            <input type="password" placeholder='Password' onChange ={(e) => {setPassword(e.target.value)}} />
            <button type="submit" >Update</button>
          </form>
      
          {/* <div className="settingsTitle">
            <span className="update">Update Your Account</span>
            <span className="del">Delete Account</span>
          </div>
          <form action="">
            <label htmlFor="">Profile Picture</label>
            <div className="profilePic">
              <img src="https://images.pexels.com/photos/1167355/pexels-photo-1167355.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="" />
              <label htmlFor="addImg">
                <i class="fas fa-user-circle"></i>
              </label>
              <input type="file" id='addImg' style={{display : "none"}}/>
            </div>
            <label htmlFor="">Username</label>
            <input type="text" placeholder='Smith' />
            <label htmlFor="">Email</label>
            <input type="email" placeholder='Smith@mail.com' />
            <label htmlFor="">Password</label>
            <input type="password" placeholder='Password' />
            <button type="submit">Update</button>
          </form> */}
         </Main>
         <div className="sideBar">
           <SideBar/>
         </div>
       </Content>
      </Wrapper> 
    </>
  )
}

export default Settings
