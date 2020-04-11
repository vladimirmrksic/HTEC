class LoginPageHTEC
{

getUsernameInputHTEC()
{
    return cy.get('input[placeholder="Email Address"]')
}

getPasswordInputHTEC()
{
    return cy.get('input[placeholder=Password]')

}
getSubmitHTEC()
{
  return  cy.get('button.btn.btn-primary.btn-block.mt-4')
}



}

export default LoginPageHTEC;
