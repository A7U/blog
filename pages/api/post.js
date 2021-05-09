const mysql = require('mysql');

let con = mysql.createPool({
    host: process.env.DB_HOST,
    database: process.env.DB_NAME,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    charset: 'utf8mb4'
});

import moment from 'moment';


export default (req, res) => {
    let { username, title, message } = req.body;
    let img = req.body.img
    let fixedTitle = title.replace(/ +/g, '-')
    let date = moment(new Date).format('YYYY-DD-MM')
    if(req.method === 'POST') {
        try {
            con.query(`SELECT * FROM posts WHERE title = ?`, [fixedTitle], async (err, rows) => {
                if(err) console.log(err)
                if(rows.length < 1) {
                    await con.query(`INSERT INTO posts (poster, title, message, img, date) VALUES (?, ?, ?, ?, ?)`, [username, fixedTitle, message, `/images/${img}`, date], (err, rows) => {
                        if(err) return console.log(err);
                        res.redirect(`/post/${fixedTitle}`)
                    });
                } else {
                    res.redirect('/post/create')
                }
            })
        } catch (err) {
            console.log(err)
        }
    } else {
        res.redirect('/')
    }
}

export const config = {
    api: {
      externalResolver: true,
    },
  }