const express = require('express')
const db = require("./models");

const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World 2!')
})

app.get('/getSample', async (req, res) => {    
  const value = await db.Main.findAll(
    {
      limit:1,
    }
  );
  console.log(value);    
  res.send(value);
});

app.get('/createSample', async (req, res) => {
  const sampleMains = await db.Main.create({ name: "sample test"});
  res.send(sampleMains.dataValues);
});

db.sequelize.sync({ force: false }).then(function () {
  app.listen(process.env.DB_PORT, function () {
    console.log("server is successfully running!");
  });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})