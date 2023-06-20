const express = require('express')
const bodyParser = require('body-parser');
const mysql = require('mysql');
require('dotenv').config();

const MYSQL_USER = process.env.MYSQL_USER

const app = express();
const port = 5000;

const db = mysql.createConnection({
    host: 'localhost',
    user: MYSQL_USER,
    password: 'soft1973824650',
    database: 'emails'
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