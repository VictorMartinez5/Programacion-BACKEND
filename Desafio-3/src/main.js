import express from "express";
import ProductManager from "./classes/ProductManager.js";


const manager = new ProductManager()
const getProducts = await manager.getProductos  // Retrorna todos los productos creados
const products = await getProducts() //Guarda los productos retornados en la variable products

// console.log(products)

//Generamos un Puerto
const PORT = 2023

// //Genero una instancia de express en app
const app = express()

app.use(express.json()) // Le decimos que la aplicacion conozca JSON


//req = request y res = response
app.get('/', (req, res) => {
    res.send("Hola Mundo")
})


//Retorna los productos en el endpoint seleccionado y con la query con un limite de cantidad de productos a mostrarno
app.get("/products", (req, res) => {
    const l = parseInt(req.query.l);

    if (!l) {
        res.send(products);
    } else {
        const productLimit = products.slice(0, l);
        res.send(productLimit);
    }
});

//Retorna el producto con el mismo id que en el endpoint
app.get('/products/:id', (req, res) => {
    const prod = products.find(prod => prod.id === parseInt(req.params.id))


    if (prod)
        res.send(prod)
    else
        res.send("This product is not found")
})


//Encender el servidor
app.listen(PORT, () => {
    console.log(`Server On http://localhost:${PORT}/`)
})
