//importar a conexao BD
const knex = require('../config/data')

class PemissonService{

    //criar um metodo para buscar todos os usuarios do banco
    async findAll(){
        try {
            let roles = await knex.select(["id","name","description"]).table('roles')
            console.log(roles)
        } catch (error) {
            console.log(error)
        }
    }

}

module.exports = new PemissonService()