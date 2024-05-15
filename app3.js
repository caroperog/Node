const express = require("express")
const app3 = express()
const port = 3001

app3.use(express.json());

//instalando body-parser: npm i body-parser --save
var bodyParser = require("body-parser")
app3.use(bodyParser.json())
app3.use(bodyParser.urlencoded({ extended: true }))



// Datos de ejemplo (en la vida real, padrías usar una base de datos) 
const items = [
    { id: 1, name: 'producto 1' },
    { id: 2, name: 'producto 2' },
    { id: 3, name: 'producto 3' },

];

// creando la petición tipo post y recibiendo datos del cliente
app3.post("/items/agregar", function(req, res) {
    var nombreitem = req.body.nombreitem
    items.push({ id: items.length + 1, name: nombreitem})
    res.json({ state: true, mensaje: "Se ha agregado un item nuevo" })
})

//listar los items creados
app3.get("/items/listar", function(req, res) {
    res.json(items)
})

// esuchando desde el puerto 3001
app3.listen(port, () => {
    console.log("servidor funcionando por el puerto " + port)
})
