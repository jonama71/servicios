const pgPromise = require("pg-promise")
const config ={
    host:"localhost",
    port:"5432",
    database:"turismo",
    user:"postgres",
    password:"1996"
}

const pgp = pgPromise({})
const db= pgp(config)

//db.any("select * from servicios").then(res=>{console.log(res)})

exports.db = db