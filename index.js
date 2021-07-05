const express = require("express")
const app = express()

//Puerto

const PORT = process.env.PORT || 3000

//middleware ayuda intermediario para configurr las insatcias del servidor
app.use(express.json())
app.use(express.urlencoded({extended: true}))

// CORS

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
});

//routes voy a tener varias rutas para interactuar con mi api
app.use(require("./routers/index"))


//Execution 
app.listen(PORT)
console.log("Server running in http://localhost:"+PORT)
