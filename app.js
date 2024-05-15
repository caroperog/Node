// instalar dependencias 
const express = require("express")
const app = express()
const port = 3000 


const books = [
    {id:1, title:"Matar a un Ruiseñor", author: "Harper Lee"},
    {id:2, title:"1984", author: "George Orwell"},
    {id:3, title:"Cronicas de una Muerte Anunciada", author: "Gabriel Garcia M."},

]

app.get("/api/books", (request, response) => {
    response.json(books)

})


// escuchando desde el puerto 3000
app.listen(port, () => { 
    console.log("servidor funcionando por el puerto " + port)

})