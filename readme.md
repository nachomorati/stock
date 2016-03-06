#Sistema de Control de Stock

##Creando el proyecto

En el ejemplo el proyecto se llamara `stock`

Cree un directorio con el nombre del proyecto e ingrese al mismo
```
mkdir stock && cd stock
```
Ejecute el comando:
```
npm init

```
Esto creara el archivo `package.json`, Complete los datos, o bien presione `ENTER` para asignar el valor por omisión.
##Instalando dependencias

###Express

Es un framework para servidores de aplicaciones web.

Instalar express, ejecutar el comando:
```
npm install --save express
```
##Creando un servidor minimo
En el directorio raiz del proyecto creamos un archivo `server.js`

añadimos la dependecia al archivo server.js para indicar que utilizaremos express para crear el servidor web.

```
// Añade la dependencia a express
var express=require('express');
var app = express();

app.listen(3000, function() {
  console.log('Servidor iniciado en http://localhost:3000');
});

```
##Agregando Rutas
creamos una carpeta llamado `routes`
abrimos un archivo `index.js`, este se encarga de manejar las rutas que no necesitan autenticion para ser accedidas.
Dentro del archivo `index.js` declaramos lo que es la estructura basica de un enrutador de express.
```
// Enrutador en express
var express = require('express');
var router = express.Router();

module.export = router;
```

Para indicar que deseamos utilizar este enrutador en la aplicacion, primero agregamos el modulo de rutas a la aplicacion.
```
var express = require('express');
var index = require('./routes/index');    // Nueva line
...
var app
app.set('view engine', 'jade');
```

##Crear la pagina de inicio
Para poder visualizar la pagina de inicio de la aplicacion reemplazaremos el motor de vistas de express por un motor de vistas de jade

###Agregando la dependencia de jade
para instalar el motor de vistas de jade ejecutar el siguiente comando
```
npm install --save jade
```
una vez instalada la dependencia debemos declarar que deseamos utilizar este motor de vistas

en el archivo `server.js` agregar la siguiente linea
```
app.set('view engine', 'jade');
```