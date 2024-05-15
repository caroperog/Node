// dependencias 
const express = require("express");
const actividad4 = express();
const port = 3003

actividad4.use(express.json());

//instalando body-parser: npm i body-parser --save
var bodyParser = require("body-parser")
actividad4.use(bodyParser.json())
actividad4.use(bodyParser.urlencoded({ extended: true }))

//Arrays de almacenamiento por categorias y productos
const categorias = [
    {cod_cat:"00001", nombre:"medicamentos", estado: true },
    {cod_cat:"00002", nombre:"granos", estado: true },
    {cod_cat:"00003", nombre:"carnicos", estado: true },
    {cod_cat:"00004", nombre:"condimentos", estado: true },

];

const productos = [
    {cod_cat:1, cod_producto:"001", nombre:"noraver"},
    {cod_cat:1, cod_producto:"002", nombre:"dolex"},
    {cod_cat:2, cod_producto:"003", nombre:"arroz"},
    {cod_cat:2, cod_producto:"004", nombre:"lenteja"},
    {cod_cat:3, cod_producto:"005", nombre:"res"},
    {cod_cat:3, cod_producto:"006", nombre:"pollo"},
    {cod_cat:4, cod_producto:"007", nombre:"pimienta"},
    {cod_cat:4, cod_producto:"008", nombre:"comino"},

];


// API guardar por categorias
actividad4.post("/categorias/save", function(req, res) {
    var { cod_cat, nombre, estado} = req.body;
        
/*  if(!cod_cat || !nombre || typeof estado !=='boolean'){
        return res.status(400).send('El elemento cod_cat, nombre y estado son obligatorios');
    }
    if(cod_cat.lenght >=5 || isNaN(cod_cat)){ 
        return res.status(400).send('cod_cat no cumple con las condiciones de longitud')
    }
    if(nombre.length >= 3 || nombre.length <= 50) {
        return res.status(400).send('el campo nombre no cumple con las condiciones de longitud')
    } */

    categorias.push({cod_cat, nombre, estado });
    res.json({state: true, mensaje: "se ha guardado la categoria"});
});


 // API guardar por productos
actividad4.post("/productos/save", function(req, res) {
    const { cod_cat, cod_producto, nombre} = req.body;
   

/*     if(!cod_cat || !cod_producto || !nombre){
        return res.status(400).send('Todos los campos son obligatorios');
    }
    if(cod_producto.length > 15 || !/^[a-zA-Z0-9]+$/.test(cod_producto)){
        return res.status(400).send('cod_producto no cumple con las condiciones de longitud')
    }
    if(nombre.length < 4 || nombre.length > 50) {
        return res.status(400).send('el campo nombre no cumple con las condiciones de longitud')
    } */

    productos.push({ cod_cat, cod_producto, nombre});
    res.json({state: true, mensaje: "Se ha guardado el producto"});
    
});
function productoExistente(cod_producto) {
    return productos.some(producto => producto.cod_producto === cod_producto);
}
// Consultar la lista de productos
actividad4.get("/productos/listar", function(req, res){
    res.json(productos);
})

// Consultar la lista de categorias
actividad4.get("/categorias/listar", function(req, res){
    res.json(categorias);
})

actividad4.listen(port, () => {
    console.log(`Servidor escuchando en el puerto ${port}`);
});



