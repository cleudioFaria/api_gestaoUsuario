//requerer express
const express = require('express')
//atribuir a uma const o objeto express
const api = express()
//requerer as rotas
const routers = require('./routers/routers')

//informar que API podera utlizar urls 
api.use(express.urlencoded({extended:false}))
//informar que API ira utilizar json
api.use(express.json())

//utilizar as rotas
api.use('/',routers)


module.exports = api