const mysql = require('mysql');

let con = mysql.createPool({
    host: process.env.DB_HOST,
    database: process.env.DB_NAME,
    user: process.env.DB_USER,
    password: process.env.DB_PASS
});

export default (req, res) => {
    let { title } = req.query;
    con.query(`SELECT * FROM posts WHERE title = ?`, [title], (err, rows) => {
        if(err) console.error(err)
        res.send(rows)
    })
}

export const config = {
    api: {
      externalResolver: true,
    },
  }