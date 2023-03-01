/// <referebce type="cypress" />

context("funcionalidade login", () => {

    beforeEach(() => {

        cy.visit("https://www.netshoes.com.br/auth/login")

    })
    afterEach(() => {

        cy.screenshot()

    })


    
    it.only("nao deve fazer login", () => {


        cy.get("#user.base-input__input").type("aluno@hotmail.com")

        cy.get("#password.base-input__input").type("1234567890")

        cy.get(':nth-child(6) > .column > .form-group > [data-testid="submitButton"]').click()

        cy.get('.message').should("contain", "Usuário não encontrado");      
    })

    it("msg de erro usuário inválidos", () => {

        cy.get("#username").type("faker.internet.email()")

        cy.get("#senha").type("12345689")

        cy.get("#button").click()

        cy.get(".pag-title").should("contain", "msg de erro")

    })

    
    it("msg de senha inválidos", () => {

        cy.get("#username").type("nome@hotmail.com")

        cy.get("#senha").type("123")

        cy.get("#button").click()

        cy.get(".pag-title").should("contain", "msg de erro")

    })

})
