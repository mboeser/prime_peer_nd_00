var http = require('http');
//var rando = require('./randomNumber');
//var convert = require('./convertCurrency');
var balance = require('./accountBalance');

http.createServer(function(request, response){
    response.writeHead(200);
    response.write(balance.accountBalance() + balance.finalNumber(100,10000000));
    response.end();
}).listen(8000);
