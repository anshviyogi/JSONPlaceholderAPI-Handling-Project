import React, { useEffect, useState } from 'react'
import {Link} from 'react-router-dom'

function Home({userData}) {
    const[searchedItems,setSearchedItems] = useState(userData)
    const[search,setSearch] = useState('')

    useEffect(()=>{
        const filteredData = userData.filter(item =>{
            return item.name.toLowerCase().includes(search)
        })

        setSearchedItems(filteredData)
    },[search])
    
  return (
    <>
    <div className='m-20 items-center justify-center flex'>

        {/* Input - Search Fields */}
        <input type='text' className='border border-gray-800 outline-none p-3 w-full text-xl rounded-md' placeholder='Search by Name' onChange={e => setSearch(e.target.value)}/>

    </div>

        {/* User Data */}
        <div className='mt-20 ml-28'>

        {
            searchedItems.map((list,index) =>(
                <>
                <Link to={`user/${list.id}`}>
                    <li key={index} className='list-none p-3 cursor-pointer'>{list.name}</li>
                </Link>
                </>
            ))
        }

        </div>

    
    </>
  )
}

export default Home
