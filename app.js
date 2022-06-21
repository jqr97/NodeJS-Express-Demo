const express = require('express')
var mysql = require('mysql'); 
const port = 3000
const app = express()

//listen to the localhost port 3000
app.listen(port, () => console.log(`Hello world app listening on port ${port}!`))

// create a bridge of connectinng the database in TiDB cloud
var con = mysql.createConnection({
    host: "tidb.c1882c39.b431ac50.us-west-2.prod.aws.tidbcloud.com",
    user: "demo_client",
    port: 4000,
    password: "123",
    database: "demo"
  });


//  Connect to the database 
con.connect(err => {
    if (err){
        throw err;
    }
    console.log("MySql Connected");
  });



// Read operation
app.get('/',(req,res) => {
    con.query('select * from fruit',(err, result, fields)=>{
        if (err){
            throw err;
        }
        console.log(result);
        res.send(result);
    })
})


