const {db}= require("../conexion")

const getTurismo = async(req, res) => {
    const response = await db.any("select * from servicios order by registro")
    res.json(response)
}
const getTurismoName = async(req, res) => {
    const name = req.params.name
    const response = await db.any("select * from servicios WHERE name = $1 order by nombre desc;", [name])
    res.json(response)

}

module.exports={
    getTurismo,
    getTurismoName
}