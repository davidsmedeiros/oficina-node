const express = require('express');
const db = require("./models");
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.send('Hello World 2!');
})

app.get('/getSample', async (req, res) => {    
  const lastSample = await db.Main.findOne({    
    order: [ [ 'createdAt', 'DESC' ]],
    raw: true,
  });

  console.log(`latest id ${lastSample.id}`);  

  res.send(lastSample);
});

app.get('/createSample', async (req, res) => {
  const sampleMains = await db.Main.create({ name: "sample test"});
  res.send(sampleMains.dataValues);
});

app.get('/fillDatabase', async (req, res) => {  
  var qtdSamples = parseInt(req.query.qtdSamples, 10);

  const latestSample = await db.Main.findOne({    
    order: [ [ 'createdAt', 'DESC' ]],
    raw: true,
  });

  let sampleMain = latestSample == null ? 0 : latestSample.id;

  for (let sample = 1; sample < qtdSamples + 1; sample++) {
    try{
      sampleMain = await db.Main.create({ name: `sample ${sample}`});
      console.log(sampleMain.dataValues);      
    }catch(err){
      console.log(err);
    }    
  }  
  res.send(sampleMain.dataValues);
});

app.post('/eval', async (req, res) => {
  /*
    THIS IS NOT RECOMENDED FOR PRODUCTION.
    THE GOAL HERE IS MAINLY FOR TESTING PURPOSES.
  */
  console.log(req.body)
  const result = await eval(req.body.query);  
  res.json({ status: "running" });
});

db.sequelize.sync({ force: false }).then(function () {
  app.listen(process.env.DB_PORT, function () {
    console.log("server is successfully running!");
  });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
})