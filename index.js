const express = require('express')
const { Pool, Client } = require('pg');

const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World 2!')
})

app.get('/testDB', (req, res) => {    
    client.query('SELECT NOW()', (err, resp) => {
        console.log("Error or response:: ", err, resp)     
        res.send(resp)
      });
});

const client = new Client({
  user: 'user',
  host: 'postgres',
  database: 'db',
  password: 'pass',
  port: 5432,
});
client.connect()

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})