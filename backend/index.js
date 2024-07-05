const express = require('express');
const mysql = require('mysql');
const cors = require('cors');

const app = express();

const port = 8100;

const db = mysql.createConnection({
      host: 'localhost',
      user: 'root',
      password: 'password',
      database: 'web_app',
})

app.use(express.json());
app.use(cors())

app.get('/', (req, res) => {
      res.json("Hello is the backend server")
})

app.get("/books", (req, res) => {
      const sql_query = "SELECT * FROM books"
      db.query(sql_query, (err, data) => {
            if(err) return res.json(err)
            return res.json(data);
      })
})

app.post("/books", (req, res) => {
      const sql_query = "INSERT INTO books (`title`, `desc`, `price`, `cover`) VALUES (?)"
      const Values = [
            req.body.title,
            req.body.desc,
            req.body.price,
            req.body.cover,
      ];
      db.query(sql_query, [Values], (err, data) => {
            if(err) return res.json(err);
            return res.json("Book created Successfully");
      })
})

app.delete('/books:id', (req, res) => {
      const bookId = req.params.id;
      const sql_query = "DELETE FROM books WHERE id = ?"
      db.query(sql_query, [bookId], (err, data) => {
            if(err) return res.json(err);
            return res.json("Book deleted Successfully");
      })
})

app.put("/books", (req, res) => {
      const sql_query = "INSERT INTO books (`title = ?`, `desc = ?`, `price = ?`, `cover = ?`) WHERE `id = ?`";
      const Values = [
            req.body.title,
            req.body.desc,
            req.body.price,
            req.body.cover,
      ];
      db.query(sql_query, [...Values, bookId], (err, data) => {
            if(err) return res.json(err);
            return res.json("Book updated Successfully");
      })
})

app.listen(port, () => {
      console.log("Server listening on port " + port)
})



