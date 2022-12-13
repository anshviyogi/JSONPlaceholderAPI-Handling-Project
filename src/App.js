import React, { useState,useEffect } from 'react'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import Home from './Components/Home'
import UserPage from './Components/UserPage'

function App() {
  const[userData,setUserData] = useState([])
  const[postData,setPostData] = useState([])
  const[commentData,setCommentData] = useState([])

  useEffect(()=>{
    // User data
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(data => setUserData(data))

    // Post data
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.json())
        .then(data => setPostData(data))

    // Comments data
    fetch('https://jsonplaceholder.typicode.com/comments')
        .then(res => res.json())
        .then(data => setCommentData(data))
  },[])

  if(userData.length ===  0 || postData.length === 0 || commentData.length === 0){
    return <h1>Loading... </h1>
  }

  return (
    <Router>
      <Routes>

        <Route path='/' element={<Home userData={userData}/>}/>
        <Route path='/user/:id' element={<UserPage userData={userData} postData={postData} commentData={commentData}/>}/>

      </Routes>
    </Router>
  )
}

export default App