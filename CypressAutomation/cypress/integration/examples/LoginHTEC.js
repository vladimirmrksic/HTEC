/// <reference types="Cypress" />
import LoginPage from '../../support/pageObjects/LoginPageHTEC'
import Dashboard from '../../support/pageObjects/Dashboard'
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
const dashboard=new Dashboard()
    cy.visit(Cypress.env('urlHTEC'))

loginPage.getUsernameInputHTEC().type(this.data.usernameHTEC)
loginPage.getPasswordInputHTEC().type(this.data.passwordHTEC)
loginPage.getSubmitHTEC().click()

dashboard.getUseCase().click()
dashboard.getCreateUseCase().click()
for (var i = 0; i < 4; i++) {
dashboard.getInputTitle().type(this.data.Title1+Math.random())
dashboard.getExpectedResult().type(this.data.Exp_res1+Math.random())
dashboard.getCreateUseCaseStep1().type(this.data.Use_case1+Math.random())
dashboard.getsubmitUsecase().click()
dashboard.getCreateUseCase().click()
  }
  dashboard.getBack().click()

  
        dashboard.getEditUsecase().first().click()
        dashboard.getInputTitle().then(elem => {
            // elem is the underlying Javascript object targeted by the .get() command.
            const xyz = Cypress.$(elem).val();
            cy.log(xyz);
           const leng= xyz.length
            dashboard.getInputTitle().clear().type('This field previously had '+ leng + ' of characters in the previous string')
        });
        
        dashboard.getExpectedResult().then(elem => {
            // elem is the underlying Javascript object targeted by the .get() command.
            const xyz = Cypress.$(elem).val();
            cy.log(xyz);
           const leng= xyz.length
            dashboard.getExpectedResult().clear().type('This field previously had '+ leng + ' of characters in the previous string')
        });
        
        dashboard.getCreateUseCaseStep1().then(elem => {
            // elem is the underlying Javascript object targeted by the .get() command.
            const xyz = Cypress.$(elem).val();
            cy.log(xyz);
           const leng= xyz.length
            dashboard.getCreateUseCaseStep1().clear().type('This field previously had '+ leng + ' of characters in the previous string')
        });
            dashboard.getsubmitUsecase().click()
      
        
  
   
  


     
})
  })


