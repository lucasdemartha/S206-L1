Feature: Testando API Pokemon (Prova Karate).

Background: Executa antes de cada teste
    * def url_base = 'https://pokeapi.co/api/v2/'

Scenario: Testando retorno charmander.
        Given url url_base
        And path 'pokemon/charmander'
        When method get
        Then status 200
Scenario: Testando retorno de onde encontrar charmander.
        Given url url_base
        And path 'pokemon/4/encounters'
        When method get
        Then status 200
        And response.name == "pallet-town-area" //local onde acha o pokemon

Scenario: Testando retorno do tipo do pokemon charmander.
        Given url url_base
        And path '/type/10/'
        When method get
        Then status 200
        And response.name == "fire" //tipo do pokemon

Scenario: Testando retorno people/1/ com informações inválidas (NEGATIVO).
        Given url url_base
        And path '/pokemon/Agumon'
        When method get
        Then status 404
        
Scenario: Testando retorno dragonite e verificando o JSON.
        Given url url_base
        And path '/pokemon/dragonite'
        When method get
        Then status 200
        And match response.name == "dragonite" //nome do pokemon
        And match response.id == 149 //id do pokemon
        And match response.height == 22 //altura em metros

Scenario: Verificar a disponibilidade do endpoint de Pokémon.
        Given url url_base
        And path '/pokemon'
        When method HEAD
        Then status 200

Scenario: Testando retorno pokemon Blue entrando em um dos elementos do array de idiomas e testando retorno JSON.
        Given url url_base
        And path '/version/1/'
        When method get
        Then status 200
        And def idioma = $.names[7].language.url //definindo a variavel idioma
        And print idioma
        And url idioma
        When method get
        Then status 200
        And match response.name == "en" //idioma ingles
        And match response.id == 9 //id do idioma ingles
