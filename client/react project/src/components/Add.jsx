import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Add = () => {

      const [book, setBook] = useState({
            title: "",
            desc: "",
            price: "",
            cover: ""
      })
      const navigate = useNavigate()
      const handleChange = (e) => {
            setBook((prev) => ({...prev, [e.target]: e.target.value}))
            // console.log(book)
      }

      const handleClick = async (e) =>{
            e.preventDefault()
            try {
                  await axios.post("http://localhost:8100/books", book)
                  navigate("/")
            } catch (error) {
                  console.log(error)
            }
      }
  return (
    <div>
      <div className="form">
            <h1>Add New Book</h1>
            <input type="text" placeholder='title' onChange = {handleChange} name = "title" />
            <input type="text" placeholder='desc' onChange = {handleChange} name = "dsec"/>
            <input type="number" placeholder='price' onChange = {handleChange} name = "price"/>
            <input type="text" placeholder='cover' onChange = {handleChange} name = "cover"/>
            <button className='formButton' onClick={handleClick} >Add</button>
      </div>
    </div>
  )
}

export default Add