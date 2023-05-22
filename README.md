# desafio-desenvolvedor-junior-3
Desafio para vaga de Desenvolvedor Junior 3 da SoftMakers. 

O objetivo é fazer um CRUD com postagens de usuários de um blog fictício.

## Funcionalidades

1. O usuário pode criar novos posts
2. Editar seus posts
3. Deletar seus posts
4. Visualizar todas a postagens, podendo filtrar apenas suas ou de todos
5. Pode ordenar as postagens por data
6. E Ver os detalhes de cada post

## Tecnologias

- Node.js (LTS)
- Nestjs
- Vite - React
- PrismaORM
- Docker

## Rodando o projeto na sua máquina

### Configurando o backend

- Faça o clone do repositório para sua máquina: `git clone git@github.com:thiagoleite92/desafio-desenvolvedor-junior-3.git`
- Na pasta raiz do projeto navegue até a pasta do backend: `cd backend`
- No terminal rode o comando: `npm i` para instalar as depêndecias do projeto
- Faça a configuração do arquivo docker-compose.yml definindo o admin, a senha e o nome do banco de dados.
- Ainda na pasta raiz do backend crie um arquivo .env com duas variáveis: DATABASE_URL e JWT_SECRET
- A DATABASE_URL deve seguir o padrão de conexão do banco de dados postgres `DATABASE_URL=postgresql://<user_name>:<user_password>@localhost:5432/<db_name>?schema=blog`
- JWT_SECRET da sua preferência, apenas para desenvolvimento
- Continue na pasta do backend, e rode no terminal: `docker-compose up -d`, para subir o docker com o banco de dados
- E depois rode o comando: `npm run start:dev`
- Por padrão o backend está rodando na porta 5200

<img src="https://github.com/thiagoleite92/desafio-desenvolvedor-junior-3/blob/master/images/backend.jpg?raw=true" width="800" height="400">

### Configurando o frontend

- Agora navegue para pasta do frontend: `cd ../frontend`
- crie o arquivo .env com a variável: `VITE_API_URL=http://localhost:5200`
- No terminal rode o comando: `npm i` para instalar as depêndecias do projeto
- Em seguida rode o comando: `npm run dev` para subir o frontend
- Acesse http://localhost:5173/ com o navegador de sua preferência.

<img src="https://github.com/thiagoleite92/desafio-desenvolvedor-junior-3/blob/master/images/frontend.jpg?raw=true" width="800" height="400">
