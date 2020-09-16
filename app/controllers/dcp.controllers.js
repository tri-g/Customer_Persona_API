var mysql      = require('mysql2');
var connection = mysql.createConnection({
host     : 'localhost', 
  user     : 'root', 
  password : 'MySQL@123', 
  database : 'mypersonadb'
  });
  connection.connect(function(err) {
  if (err) throw err
  console.log('You are now connected...')
})
  
exports.listall = (req, res) => {
connection.query('select * from persona_demographics', function (error, results, fields) {
    if (error) throw error;
    res.end(JSON.stringify(results));
  });
};

exports.listbyid = (req, res) => {
 console.log(req);
   connection.query('select * from persona_demographics where client_id=?', [req.params.client_id], function (error, results, fields) {
    if (error) throw error;
    res.end(JSON.stringify(results));
  });
};

exports.listcid = (req, res) => {
   connection.query('select client_id,first,last,email from persona_demographics',function (error, results, fields) {
    if (error) throw error;
    res.end(JSON.stringify(results));
  });
};
exports.cid = (req, res) => {
   connection.query('select client_id from persona_demographics where client_id=?', [req.params.client_id],function (error, results, fields) {
    if (error) throw error;
    res.end(JSON.stringify(results));
  });
};
exports.login = async function(req,res){
connection.query('select client_id,first,last,email from persona_demographics',function (error, results, fields) {
    if (error) throw error;
    res.end(JSON.stringify(results));
  });
};


exports.getmapdetails = (req, res) => {
  connection.query('SELECT TRANS_LATITUDE,TRANS_LONGITUDE,CATEGORY FROM mypersonadb.persona_weighted_transaction limit 50',function (error, results, fields) {
   if (error) throw error;
   res.end(JSON.stringify(results));
 });
};
