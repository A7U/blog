const mysql = require('mysql');

let con = mysql.createPool({
    host: process.env.DB_HOST,
    database: process.env.DB_NAME,
    user: process.env.DB_USER,
    password: process.env.DB_PASS
});

export default (req, res) => {
    con.query(`SELECT * FROM posts ORDER BY date ASC`, async (err, rows) => {
        if(err) throw err;
        res.send(rows)
    })
}

export const config = {
    api: {
      externalResolver: true,
    },
  }