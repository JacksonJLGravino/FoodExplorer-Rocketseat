# Food Explorer - Rocketseat

Este projeto foi desenvolvido como desafio final do curso Explorer da Rocketseat. Ele simula um sistema completo de cardápio digital para um restaurante, com uma interface para clientes e uma área administrativa para gerenciar pratos.

A ideia principal é unir front-end e back-end em uma aplicação funcional, com autenticação, cadastro de usuários, listagem de pratos, busca, upload de imagens e gerenciamento de itens do cardápio.

## O que o projeto faz

O Food Explorer permite:

- visualizar refeições, sobremesas e bebidas em uma interface moderna;
- buscar pratos;
- criar conta e fazer login;
- para administradores: adicionar, editar e excluir pratos;
- fazer upload de imagens para cada prato;
- consumir uma API própria para armazenar e retornar os dados.

## Tecnologias utilizadas

### Front-end

- React
- Vite
- React Router DOM
- Styled Components
- Axios
- Swiper

### Back-end

- Node.js
- Express
- Knex
- SQLite
- JWT para autenticação
- Bcrypt para criptografia de senhas
- Multer para upload de imagens
- CORS

## Estrutura do projeto

- FrontEnd: interface da aplicação
- BackEnd: API e banco de dados

## Como executar o projeto

### 1. Clone o repositório

```bash
git clone https://github.com/JacksonJLGravino/FoodExplorer-Rocketseat-main.git
cd FoodExplorer-Rocketseat-main
```

### 2. Backend

```bash
cd BackEnd
npm install
npm run migrate
npm run dev
```

A API ficará disponível em http://localhost:3333.

> Você pode criar um arquivo .env com as variáveis `SERVER_PORT` e `AUTH_SECRET` se quiser personalizar a configuração.

### 3. Frontend

```bash
cd ../FrontEnd
npm install
npm run dev
```
