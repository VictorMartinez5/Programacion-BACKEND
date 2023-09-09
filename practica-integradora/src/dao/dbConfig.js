import mongoose from "mongoose"

const URI="mongodb+srv://victormartinez:OPJEkjycQWliLgGG@0.gnuezfq.mongodb.net/?retryWrites=true&w=majority"
await mongoose.connect(URI,{
    serverSelectionTimeoutMS:5000,
})
console.log("Base de datos conectada....")


