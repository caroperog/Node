const express = require("express")
const app2 = express()
const port = 3000

app2.use(express.json());

// Datos de ejemplo (en la vida real, padrías usar una base de datos) 
const items = [
    { id: 1, name: 'producto 1' },
    { id: 2, name: 'producto 2' },
    { id: 3, name: 'producto 3' },

];

// Ruta GET para obtener todos los elementos

app2.get('/api/items', (req, res) => {
    res.json(items);
});

// Ruta get para obtener un elemento por su ID 
app2.get('/api/items/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const item = items.find(i => i.id === id);
    if (!item) {
        res.status(404).send('el elemento no se encontró');
    } else {
        res.json(item);
    }

})

// esuchando desde el puerto 3000
app2.listen(port, () => {
    console.log("servidor funcionando por el puerto " + port)
})
