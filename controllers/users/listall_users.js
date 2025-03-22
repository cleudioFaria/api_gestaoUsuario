const UsersService = require('../../services/Users_Service')
//classe listar todos os usuarios
class ListAllUsers{
    async listAll(req,res){
        let result = await UsersService.findAll()
    }
}

module.exports = new ListAllUsers()