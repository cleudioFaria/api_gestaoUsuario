# api_gestaoUsuario
## API para rotas criada em aula na faculdade com Professor e Mestre Nivaldo 


# 📌 README.md - Projeto de Teste de Rotas GET e POST
md
Copiar
Editar
# 🚀 Teste de Rotas com Node.js

Este projeto foi criado para praticar e testar rotas **GET** e **POST** em um servidor Node.js utilizando **Express.js**.

## 📂 Estrutura do Projeto

/meu-projeto │── /node_modules │── /src │ ├── index.js │ ├── routes.js │── .gitignore │── package.json │── README.md

bash
Copiar
Editar

## 📦 Instalação

1. Clone o repositório:
   ```bash
   git clone https://github.com/seu-usuario/meu-projeto.git
   cd meu-projeto
Instale as dependências:
bash
Copiar
Editar
npm install

# ▶️ Como Executar
Para rodar o servidor, use o comando:

bash
Copiar
Editar
node src/index.js
Ou, se estiver usando nodemon (recomendado para desenvolvimento):

bash
Copiar
Editar
npx nodemon src/index.js

# 🌍 Rotas Disponíveis
Método	Rota	Descrição
GET	/	Retorna uma mensagem de boas-vindas.
GET	/users	Lista todos os usuários.
POST	/users	Adiciona um novo usuário.
## 🔹 Exemplo de Requisição GET
http
Copiar
Editar
GET http://localhost:3000/users
Resposta esperada:

json
Copiar
Editar
[
  {
    "id": 1,
    "nome": "João"
  },
  {
    "id": 2,
    "nome": "Maria"
  }
]
##🔹 Exemplo de Requisição POST
http
Copiar
Editar
POST http://localhost:3000/users
Content-Type: application/json
Body:

json
Copiar
Editar
{
  "id": 3,
  "nome": "Carlos"
}
🛠 Tecnologias Utilizadas
Node.js
Express.js
# 📝 Licença
Este projeto é apenas para fins de aprendizado.
