/// <reference types="cypress"/>

describe('Criando o cenário de teste para o site globalsqa',( ) => {

    it.skip('Caso de teste: Logando um usuário que acabou de ser registrado no site com sucesso.', () => {
        let info = criarUsuario()

        cy.get('.borderM > :nth-child(1) > .btn').click()
        cy.get('#userSelect').select(6)
        cy.get('form.ng-valid > .btn').click()
        cy.get('.fontBig').should('contain.text', info[0])
        
      })

      it.skip('Caso de teste: Verificando no banco de dados se o usuário foi registrado.', () => {
        let info = criarUsuario()

        cy.get(':nth-child(3) > .btn').click()
        cy.get('[ng-class="btnClass3"]').click()
        cy.get(':nth-child(6) > :nth-child(1)').should('contain.text', info[0])
        
      })

      it('Caso de teste: Tentando abrir uma conta de um usuário sem selecionar (NEGATIVO).', () => {
        
        cy.visit('https://www.globalsqa.com/angularJs-protractor/BankingProject/#/login')
        cy.get(':nth-child(3) > .btn').click()
        cy.get('[ng-class="btnClass2"]').click()
        cy.get('form.ng-pristine > button').click()
        cy.wait(3000)
        cy.get('form.ng-pristine > button').click()
      })

})

function criarUsuario(){

    let horas = new Date().getHours().toString();
    let minutos = new Date().getMinutes().toString();
    let segundos = new Date().getSeconds().toString();
    let nome = horas + minutos + segundos + 'Nome'
    let sobrenome = horas + minutos + segundos + 'Sobrenome'
    let cep = horas + minutos + segundos + 'CEP'
    let userInfo = [nome, sobrenome, cep]
    

    cy.visit('https://www.globalsqa.com/angularJs-protractor/BankingProject/#/login')
    cy.get(':nth-child(3) > .btn').click()
    cy.get('[ng-class="btnClass1"]').click()
    cy.get(':nth-child(1) > .form-control').type(nome)
    cy.get(':nth-child(2) > .form-control').type(sobrenome)
    cy.get(':nth-child(3) > .form-control').type(cep)
    cy.get('form.ng-dirty > .btn').click()
    cy.get('.home').click()

    return userInfo
}