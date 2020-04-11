/// <reference types="Cypress" />
import LoginPage from '../../support/pageObjects/LoginPage'
describe('Test', function() 
{

    before(function() {
        // runs once before all tests in the block
        cy.fixture('example').then(function(data)
        {
this.data=data
        })
      })



it('Login case',function() {
 
const loginPage=new LoginPage()
    cy.visit(Cypress.env('url'))

loginPage.getUsernameInput().type(this.data.username)
loginPage.getPasswordInput().type(this.data.password)
loginPage.getSubmit().click()


})
})
