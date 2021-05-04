const mysql = require('mysql');

let con = mysql.createPool({
    host: process.env.DB_HOST,
    database: process.env.DB_NAME,
    user: process.env.DB_USER,
    password: process.env.DB_PASS
});

import moment from 'moment';


export default (req, res) => {
    let { username, title, message } = req.body;
    let img = req.body.img
    let fixedTitle = title.replace(' ', '-')
    let date = moment(new Date).format('YYYY-DD-MM')
    if(req.method === 'POST') {
        con.query(`SELECT * FROM posts WHERE title = ?`, [fixedTitle], async (err, rows) => {
            if(err) throw err;
            if(rows.length < 1) {
                await con.query(`INSERT INTO posts (poster, title, message, img, date) VALUES (?, ?, ?, ?, ?)`, [username, fixedTitle, message, `/images/${img}`, date])
                res.redirect(`/post/${fixedTitle}`)
            } else {
                res.redirect('/post/create')
            }
        })
    } else {
        res.redirect('/')
    }
}

export const config = {
    api: {
      externalResolver: true,
    },
  }