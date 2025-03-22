//importar a conexao BD
const knex = require('../config/data')

class UsersService{

    //criar um metodo para buscar todos os usuarios do banco
    async findAll(){
        try {
            let users = await knex.select(["id","name","email"]).table('users')
            console.log(users)
        } catch (error) {
            console.log(error)
        }
    }

}

module.exports = new UsersService()