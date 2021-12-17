// get the client
const mysql = require('mysql2');
const { promisify } = require('util')


// Create the connection pool. The pool-specific settings are the defaults
const pool = mysql.createPool({
  host: 'mysql-62093-0.cloudclusters.net',
  port:12250,
  user: 'admin',
 password:'Mt0q6FEM',
  database: 'socketchat',
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
}).on("connection",()=>{
    console.log("Connected With Mysql")
})

const query = promisify(pool.query).bind(pool);

module.exports=query


