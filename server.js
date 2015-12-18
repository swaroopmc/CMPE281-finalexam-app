var express = require('express');
var mysql = require('mysql');
var http=require('http');
var con = mysql.createConnection({
  host     : '52.88.26.84',
  user     : 'root',
  password : 'swa',
  database : 'swa'
});

var app = express();

app.get('/', function (req, res) {
    
    con.connect();

    con.query('SELECT * from gumball', function(err, rows, fields) {
      if (err)
      {
        res.send("error in fetching data");
      }
      else
      {
        res.send("Hello AWS MySQL!<br/><br/>The Count of gumballs is: "+rows[0].count_gumballs+"<br/>The Gumball Machine Model is:  "+rows[0].model_number+"</br>The Gumball Machine Serial # is: "+ rows[0].serial_number);
        else
        console.log('Error while performing Query.');
      }
    
    });
    
    

});

app.listen( process.env.PORT );