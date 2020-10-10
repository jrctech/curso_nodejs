//Requerir módulo HTTP:
const http = require('http');
//Requerir paquete adicional para utilizar colores en la consola: (instalar usando: npm install colors)
const colors = require('colors');

//  Función para manejar las peticiones: (puede tener cualquier nombre)
const handleServer = function(req,res){
    console.log(req.url);
    res.writeHead(200,{'Content-Type': 'text/html'});
    res.write('<h1>Hola desde Node.js!!</h1>');
    res.end();
};

//  Nueva instancia de <http.Server>:
const server = http.createServer(handleServer);
//  Escuchar en el puerto especificado:

//Puede ser así:
//server.listen(3000);
//O también incluyendo una fuención callback:

server.listen(3000, function (){
    console.log('Server listening on port 3000...'.green);
});
