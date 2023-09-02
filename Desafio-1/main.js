class ProductManager {
  constructor() {
      this.products = []
  }

  //Metodo Add Product
  addProduct(product, title, description, price, thumbnail, code, stock) {
      // Validar que no se repita el campo "code"
      const prod = this.products.find(prod => prod.code === product.code)
      // Validar campos obligatorios
      if (!title || !description || !price || !thumbnail || !code || !stock) {
          console.log("Error: Todos los campos son obligatorios.");
          return;
        }
      if (prod) {
          console.log(`Error: El código '${code}' ya está en uso.`)
      } else {
          this.products.push(product)
      }
  }

  //Metodo Get Products
  getProducts() {
      console.log(this.products)
  }

  getProductById(id) {
      const prod = this.products.find(prod => prod.id === id)

      if (prod) {
          console.log(prod)
      } else {
          console.log("Producto no encontrado")
      }
  }
}

class Product {
  constructor(title, description, price, code, stock, thumbnail) {
      this.title = title
      this.description = description
      this.price = price
      this.code = code
      this.stock = stock
      this.thumbnail = thumbnail
      this.id = Product.incrementarId() 
  }

  //Incremento del id
  static incrementarId() {
      if (this.idIncrement) {
          this.idIncrement++
      } else {
          this.idIncrement = 1
      }
      return this.idIncrement
  }
}

const producto1 = new Product("Remera", "Comoda", 12000, "REMERA1", 20, [])
const producto2 = new Product("Campera", "Abrigada", 40250, "CAMPERA1", 20, [])
const producto3 = new Product("Pantalon", "Joggin", 18000, "PANTALON1", 20, [])

// Ejemplo de uso

const productManager = new ProductManager()

productManager.addProduct(producto1)
productManager.addProduct(producto2)
productManager.addProduct(producto3)

productManager.getProducts()

productManager.getProductById(2)