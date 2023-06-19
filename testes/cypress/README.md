# AtividadeTesteCypressS206

Repositório para a entrega da prova de S206 sobre teste utilizando cypress.

Nome: Lucas Ribeiro de Martha

Curso: GES

Matrícula: 198

Link para o site utilizado: [Globalsqa](https://www.globalsqa.com/angularJs-protractor/BankingProject/#/login)
Link para o site utilizado: [computer-database](https://computer-database.gatling.io/computers)


Utilizei o site Globalsqa para a realizar dois testes positivos de cypress com function. O site trata-se de um site de testes. Site criado justamente para realizar testes.
Utilizei o site computer-database para a realizar um teste negativo de cypress. O site trata-se de um site de testes. Site criado justamente para realizar testes.

- Primeiro caso de teste: Logando um usuário que acabou de ser registrado no site com sucesso. Realizei o login de um usuário que foi registrado atraves de uma function.

- Segundo caso de teste: Verificando no banco de dados se o usuário foi registrado. Realizei a busca de um usuário que acabou de ser registrado atraves de uma function.

- Terceiro caso de teste: Tentando adicionar um computador sem preencher nenhum campo (NEGATIVO). Tentei adicionar um novo computador no banco de dados sem preencher nenhum campo.
 
Para executar o projeto basta realizar a cópia do repositório para sua máquina, utilizar o comando npm install para instalar as dependencias do projeto, acessá-lo utilizando o GITBASH, e utilizar o comando ./node_modules/.bin/cypress open para abrir o cypress e executá-lo. Você pode também utilizar a linha de comando ./node_modules/.bin/cypress run --spec 'cypress/e2e/**/' para rodar no terminal.

Para gerar o relatório HTML basta segui os seguintes comandos:
`código inline`
```txt
1. Adicionando as dependências necessárias para gerar o reporte de testes:
npm i --save-dev cypress-mochawesome-reporter
	
2. Modificar o arquivo cypress.config.js:
const { defineConfig } = require('cypress');

module.exports = defineConfig({
  reporter: 'cypress-mochawesome-reporter',
  e2e: {
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);
    },
  },
});

3. Adicionar em cypress/support/e2e.js:
import 'cypress-mochawesome-reporter/register';

4. Rodar specs pela linha de comando:
./node_modules/.bin/cypress run --spec 'cypress/e2e/**/'