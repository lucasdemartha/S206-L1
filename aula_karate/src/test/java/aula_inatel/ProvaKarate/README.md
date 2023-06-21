# AtividadeTesteKarateS206

Repositório para a entrega da prova de S206 sobre teste utilizando Karate.

Nome: Lucas Ribeiro de Martha

Curso: GES

Matrícula: 198

Link para o site utilizado: [Pokeapi](https://pokeapi.co/)


Utilizei o site pokeapi para a realização dos testes solicitados. O site trata-se de uma API de Pokemon.

- Primeiro caso de teste: Testando retorno charmander.

- Segundo caso de teste: Testando retorno de onde encontrar charmander.

- Terceiro caso de teste: Testando retorno do tipo do pokemon charmander.

- Quarto caso de teste: Testando retorno people/1/ com informações inválidas (NEGATIVO).

- Quinto caso de teste: Testando retorno dragonite e verificando o JSON.

- Sexto caso de teste: Verificar a disponibilidade do endpoint de Pokémon.

- Setimo caso de teste: Testando retorno pokemon Blue entrando em um dos elementos do array de idiomas e testando retorno JSON.
 
Para executar o projeto basta realizar a cópia do repositório para sua máquina, utilizar o comando mvn clean install para instalar as dependencias do projeto, acessá-lo utilizando o GIT BASH, e utilizar o comando mvn test –Dtest=ApiRunner para rodar os códigos. Já o relatório HTML é gerado automaticamente após a execução dos testes, basta abrir o link gerado no prompt.