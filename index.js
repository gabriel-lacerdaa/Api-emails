const express = require('express')
const bodyParser = require('body-parser');
const mysql = require('mysql');
require('dotenv').config();
const cors = require('cors')

const MYSQL_USER = process.env.MYSQL_USER
const MYSQL_PASSWORD = process.env.MYSQL_PASSWORD
const MYSQL_DATABASE = process.env.MYSQL_DATABASE
const MYSQL_HOST = process.env.MYSQL_HOST


const app = express();
const port = 5000;

app.use(cors())

const db = mysql.createConnection({
    host: MYSQL_HOST,
    user: MYSQL_USER,
    password: MYSQL_PASSWORD,
    database: MYSQL_DATABASE
})

db.connect((err) => {
    if (err){
        throw err
    }
})

app.use(bodyParser.json());

app.post('/email', (req, res) => {
    const { nome, email, telefone, mensagem } = req.body;
    console.log(nome, email, telefone, mensagem)
    const sql = 'INSERT INTO email (nome, email, telefone, mensagem) VALUES (?, ?, ?, ?)';
    const values = [nome, email, telefone, mensagem];
    db.query(sql, values, (err, result) => {
        if (err) {
          throw err;
        }
        console.log('Email salvo no banco de dados!');
        res.status(200).send("email salvo com sucesso!!");
      });
})


// Iniciar o servidor
app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
  });