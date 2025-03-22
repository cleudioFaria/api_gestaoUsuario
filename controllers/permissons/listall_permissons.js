const PermissonService = require('../../services/Permissons_Service')
//classe listar todos as permissoes
class ListAllPermisson{
    async listAll(req,res){
        let result = await PermissonService.findAll()
    }
}

module.exports = new ListAllPermisson()