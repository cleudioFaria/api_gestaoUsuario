//requerer express
const express = require('express')
//utilizar o metodo de rotas do express
const router = express.Router()
//requerer o metodo listar todos
const ListAllUser = require('../controllers/users/listall_users')

// constante que chama os usuarios e suas permissoes
const UserPermisson =require('../controllers/permissons/listall_permissons')

//rota url 
//rota de listar os usuarios
router.get('/users',ListAllUser.listAll)


//rota url 
//rota nova para  listar as permissoes dos usuarios
router.get('/roles',UserPermisson.listAll)

module.exports = router