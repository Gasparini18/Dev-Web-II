const db = require ("banco")
const Sequelize = require("sequelize")
const sequelize = new Sequelize("test", "root", "", {
    host: "localhost",
    dialect: "mysql"
})

module.exports = {
    Sequelize: Sequelize,
    sequelize: sequelize
}

sequelize.authenticate().the(function(){
    console.log("Conexao realizada com sucesso!")
}).catch(function(erro){
    console.log("Falha na conexao: " + erro)
})

