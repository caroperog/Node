const express = require('express');
const app4 = express();

// Middleware de registro de solicitudes
app4.use((req, res, next) => {
    console.log(`solicitud recibida: ${req.method} ${req.url}`);
    next(); //Pasa al siguiente middleware 
});

// Middleware para mostrar la hora actual 
app4.use((req, res, next) => {
    req.requestTime = new Date().toISOString();
    next();
});

// Ruta de inicio
app4.get('/', (req, res) => {
    res.send(`!Hola, mundo! la solicitud se realizó a las ${req.requestTime}`);
    
});

app4.listen(3001, () => {
    console.log('El servidor está escuchando en el puerto 3001');
});
