require('dotenv').config();
const pool = require('./model');
const app = require('./app');
const port= 3001;
const host= '127.0.0.1';

const connect = async () => {
    try{
      const connection = await pool.getConnection();
      connection.release();
      console.log("connected to MySQL database")
    }
    catch(error)
    {
      console.log("Error connecting to MySQL:", error.message);
    }
}

connect();

const server = app.listen(port,host,  () => {
    console.log(`Node server is Listining to ${server.address().port}`);
});