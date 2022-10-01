var fs = require('fs');
 

fs.appendFile('welcome.txt', 'Hello Node', function (err) {
  if (err) throw err;

  var data = fs.readFileSync('welcome.txt');
   console.log(data.toString());

});

