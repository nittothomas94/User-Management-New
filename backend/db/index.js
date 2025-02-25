const mongoose = require('mongoose');

mongoose
  .connect('mongodb://nittothomas94:Nitto123@cluster0-shard-00-00.guv3w.mongodb.net:27017,cluster0-shard-00-01.guv3w.mongodb.net:27017,cluster0-shard-00-02.guv3w.mongodb.net:27017/?replicaSet=atlas-at15e4-shard-0&ssl=true&authSource=admin&retryWrites=true&w=majority&appName=Cluster0')
  .then(() => {
    console.log('DB Connected');
  })
  .catch(e => {
    console.log(e);
  });

module.exports = mongoose;
