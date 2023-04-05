const db = require ("./banco")
const Agendamentos = sequelize.define("agendamentos",{
    nome:{
        type: db.Sequelize.STRING
    },
    endereco:{
        type: db.Sequelize.STRING
    },
    bairro:{
        type: db.Sequelize.STRING
    },
    cep:{
        type: db.Sequelize.INTEGER
    },
    cidade:{
        type: db.Sequelize.STRING
    },
    estado:{
        type: db.Sequelize.STRING
    },
    observacao:{
        type: db.Sequelize.STRING
    }
})

//Agendamentos.sync({force: true})

/*Agendamentos.create({
    nome: "Jeferson Roberto de Lima",
    endereco: "Av Aguia de Haia",
    bairro: "Jd São Nicolau",
    cep: 08390123,
    cidade: "São Paulo",
    estado: "SP"
})*/