import React, { useEffect, useState } from 'react';
import axios from 'axios';


import { Link } from 'react-router-dom';

const Books = () => {

      const [books, setBooks] = useState([]);

      useEffect(() => {
            const fetchAllBooks = async () => {
                  try {
                        const res = await axios.get("http://localhost:8100/books")
                        setBooks(res.data)
                  } catch (error) {
                        console.log(error);
                  }
            }
            fetchAllBooks();
      },[])

      const handleDelete = async (id) =>{
            try {
                  await axios.delete("http://localhost:8100/books/"+id);
                  window.location.reload();
            } catch (error) {
                  console.log(error)
            }
      }

  return (
    <div>
      <h1>My BookShop</h1>
      <div className='books'>
            {books.map((books) => (
            <div className="book" key={books.id}>                 
                  {books.cover && <img src={books.cover} alt="" />}
                  <h4> {books.title} </h4>
                  <p> {books.desc} </p>
                  <span> {books.price} </span>
                  <button className="delete" onClick={() => {handleDelete(books.id)}} >Delete</button>
                  <button  className="update">
                        <Link to={`/update/${books.id}`} >Update</Link>
                  </button>
            </div>
            ))}
      </div>
      <button>
            <Link to="/add">
                  Add New Book
            </Link>
      </button>
    </div>
  )
}

export default Books