const express = require('express');
const app = express();
const cors = require('cors');
const port= 3001;
const host= '127.0.0.1';
const mongoose = require('mongoose'); 
 

app.use(cors());
app.use(express.json());

const url ="mongodb+srv://msandaru:mr4UORjOgUphLxpV@cluster0.bzw47zp.mongodb.net/?appName=Cluster0";

const  connect = async () => {
    try{
      await mongoose.connect (url);
      console.log("connect to monogoDB Database")
    }
    catch(error)
    {
      console.log("Error : ERROR");
    }
}

connect();

const server = app.listen(port,host,  () => {
    console.log(`Node server is Listining to ${server.address().port}`);
});