const fs = require('fs');

/*Node.js utiliza un callback (función que se ejecuta cuando termina de crear el archivo)
ya que esta tarea no es propia de Node.js, sino del sistema operativo, por tanto
Node.js da la instrucción al so para crear el archivo y continúa ejecutando código.
Al terminar de crearlo, el so informa a Node.js y este ejecuta el callback especificado.
Por esa razón al ejecutar este script, puede verse en la consola el siguiente mensaje de console.log()
antes del mensaje 'Archivo creado!'

Esta funcionalidad impide que Node.js tenga que esperar a que termine la instrucción de crear el archivo,
(lo que es llamado código bloqueante) y en lugar de esto pueda delegar esta tarea y seguir ejecutando el programa.
*/

fs.writeFile('./texto.txt', 'linea uno', function (err){
	if(err){
		console.log(err);
	}
	else
		console.log('Archivo creado!');
});

console.log('Siguiente línea de código...');

fs.readFile('./texto.txt', function (err, data){
	if(err) {
		console.log(err);
	}
	else
		console.log(data.toString());
});
