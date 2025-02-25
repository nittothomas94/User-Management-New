const mongoose = require('mongoose');

const mongoURI = process.env.MONGO_URI || 'mongodb+srv://nittothomas94:Nitto123@cluster0.guv3w.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0' 

mongoose 
  .connect(mongoURI)
  .then(() => {
    console.log('DB Connected');
  })
  .catch(e => {
    console.log('DB Connection Error',e);
  });

module.exports = mongoose;
