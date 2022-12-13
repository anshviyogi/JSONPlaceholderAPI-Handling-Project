import React,{useState,useEffect} from 'react'
import {useParams} from 'react-router-dom'

function UserPage({userData,postData,commentData}) {
    const[user,setUser] = useState([])
    const[post,setPost] = useState([])

    const {id} = useParams()

    useEffect(()=>{
        // Filtering users
        userData.map(data =>{
            if(data.id == id){
                setUser(data)
            }
        })

        // Filtering posts
        postData.map(data => {
            if(data.userId == id){
                post.push(data)
            }
        })
    },[])

    if(user.address === undefined){
        return
    }

    console.log("Comments >>> ",commentData)
    console.log("Post >>> ",post)

  return (
    <>
    {/* User details */}
    <div className='m-20 flex'>
      <div>
      <h1 className='font-bold text-xl p-2'>{user.name} <span className='font-normal'>{"(" + user.username  + ")"}</span></h1>
      <p className='p-2'>Email : {user.email}</p>
      <p className='p-2'>Phone : {user.phone}</p>
      <p className='p-2'>Portfolio : <a href='#'>{user.website}</a></p>
      </div>

      <div className='ml-96'>
        <h1 className='font-bold p-2'>Address</h1>
        <p className='p-2'>{user.address.suite}, {user.address.street}{"(" + user.address.city + ")"} </p>
        <p className='p-2 font-medium'>{"("+user.address.zipcode + ")"}</p>
      </div>

      <div className='ml-96'>
        <h1 className='font-bold p-2'>Company</h1>
        <p className='p-2'>{user.company.name}</p>
        <p className='p-2'>{"("+user.company.catchPhrase+")"}</p>
      </div>
    </div>

    {/* Products */}
    <h1 className='text-center font-bold text-2xl'>POSTS</h1>
    {
        post.map(data =>(
            <div className='p-5'>
            <h1 className='font-medium'>Title: {data.title}</h1>
            <h1>Body: {data.body}</h1>

            {/* Comments */}

            <h1 className='font-semibold text-xl p-3'>Comments</h1>
            {
                commentData.filter(commentData => commentData.postId == data.id).map(list =>(
                    <div className='p-3'>
                    <h1>Name: {list.name}</h1>
                    <h1>Body: {list.body}</h1>
                    <h1>Email: {list.email}</h1>
                    </div>
                ))
            }
            </div>
        ))
    }
    </>
  )
}

export default UserPage