import { useContext } from 'react'
import { GlobalStyle } from "./GlobalStyles";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Login from "./Pages/Login/Login";
import Register from "./Pages/Register/Register";
import Settings from "./Pages/Settings/Settings";
import Single from "./Pages/Single/Single";
import Write from "./Pages/Write/Write";
import context from './Context/Context'
import SideBar from './Components/SideBar/SideBar';


function App() {
  const {user} = useContext(context)
  console.log(user)

  return (
    <>
      <GlobalStyle/>
      <Routes>
        <Route path="/" element={user? <Home /> : <Register/>} />
        <Route path="/post/:id" element={user? <Single/> : <Login/>} />
        <Route path="/write" element={user? <Write /> : <Login/>} />
        <Route path="/settings" element={user? <Settings /> : <Login/>} />
        <Route path="/login" element={user? <Home/> : <Login />} />
        <Route path="/register" element={user? <Home/> : <Register />} />
        <Route path="/about" element={user? <SideBar /> : <Login/>} />

        {/* <Route path="/" element={<Home />} />
        <Route path="/post" element={<Single/>} />
        <Route path="/write" element={<Write />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/single" element={<Single />} /> */}

      </Routes>
     
    </>
  );
}

export default App;
