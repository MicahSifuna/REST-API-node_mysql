import axios from 'axios'
import React, { useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

const Update = () => {

      const [book, setBook] = useState({
            title: "",
            desc: "",
            price: "",
            cover: ""
      })

      const navigate = useNavigate();
      const location = useLocation();
      const bookId = location.pathname.split("/")[2];
      const handleChange = (e) => {
            setBook((prev) => ({...prev, [e.target]: e.target.value}))
            // console.log(book)
      }

      const handleClick = async (e) =>{
            e.preventDefault()
            try {
                  await axios.put("http://localhost:8100/books/" + bookId, book)
                  navigate("/")
            } catch (error) {
                  console.log(error)
            }
      }
  return (
    <div>
      <div className="form">
            <h1>Update the Book</h1>
            <input type="text" placeholder='title' onChange = {handleChange} name = "title" />
            <input type="text" placeholder='desc' onChange = {handleChange} name = "dsec"/>
            <input type="number" placeholder='price' onChange = {handleChange} name = "price"/>
            <input type="text" placeholder='cover' onChange = {handleChange} name = "cover"/>
            <button className='formButton' onClick={handleClick} >Update</button>
      </div>
    </div>
  )
}

export default Update