# Consulta CNPJ

API desenvolvida com **Node.js e Express** para consulta de informações de empresas a partir do CNPJ.

Este projeto foi desenvolvido como uma prática de integração com API externa, organização de rotas, validação de dados e desenvolvimento de aplicações web com Node.js.

> **⚠️ Ambiente de teste:** esta versão será utilizada para testes de hospedagem e funcionamento no Render. A versão definitiva do projeto da empresa será publicada posteriormente.

## 🚀 Tecnologias

* Node.js
* Express
* JavaScript
* HTML5
* CSS3
* API externa para consulta de CNPJ

## 📁 Estrutura do projeto

```text
API-CNPJ/
├── public/
│   └── consulta.html
├── routes/
│   └── rotas.js
├── validator/
│   └── API.js
├── index.js
├── package.json
└── README.md
```

### Principais arquivos

**`index.js`**

Arquivo responsável pela inicialização do servidor Express e configuração principal da aplicação.

**`routes/rotas.js`**

Contém as rotas utilizadas pela aplicação e direciona as requisições para suas respectivas funcionalidades.

**`validator/API.js`**

Responsável pela comunicação com a API externa utilizada para realizar a consulta do CNPJ.

**`public/consulta.html`**

Interface web utilizada para realizar a consulta e apresentar os dados retornados.

## ⚙️ Instalação

Clone o repositório:

```bash
git clone git@github.com:Yzk157/Consulta--CNPJ.git
```

Entre na pasta:

```bash
cd Consulta--CNPJ
```

Instale as dependências:

```bash
npm install
```

## ▶️ Executando localmente

Inicie a aplicação:

```bash
node index.js
```

Caso o projeto possua um script de desenvolvimento configurado no `package.json`, também pode ser utilizado:

```bash
npm run dev
```

Após iniciar o servidor, acesse:

```text
http://localhost:3000
```

## ☁️ Deploy

O projeto será utilizado inicialmente para testes de hospedagem no **Render**.

Após a validação do funcionamento em produção, uma versão específica será preparada para o ambiente definitivo da empresa.

## 🔄 Fluxo da aplicação

```text
Usuário
   ↓
Interface HTML
   ↓
Rota Express
   ↓
Validação / processamento
   ↓
API externa
   ↓
Dados da empresa
   ↓
Resposta para o usuário
```

## 🎯 Objetivo

O projeto tem como objetivo praticar:

* Desenvolvimento de APIs com Node.js
* Express
* Organização de projetos
* Criação e utilização de rotas
* Consumo de APIs externas
* Validação de dados
* Integração entre frontend e backend
* Deploy de aplicações Node.js

## 📌 Status

**Versão de testes**

O projeto está sendo utilizado para testes de funcionamento e hospedagem. A versão definitiva destinada à empresa será disponibilizada posteriormente.
