const express = require('express');
const app = express();
const mysql = require('mysql');

app.use(express.json());

const getData = (type, req, res) => {
    const conn = mysql.createConnection({
        host: 'localhost',
        database: 'app_shop',
        user: 'root',
        password: ''
    });

    conn.connect(err => {
        if (err) return err;
    });

    let query = `SELECT * FROM ${type}`;

    conn.query(query, (err, result) => {
        res.json(result);
    });

    conn.end(err => {
        if (err) return err;
    });
}

app.get('/navigation', (req, res) => {
    getData('navigation', req, res);
});

app.get('/goods', (req, res) => {
    getData('goods', req, res);
});

app.listen(3000, err => {
    if (err) return err;
});