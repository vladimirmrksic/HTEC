class LoginPage
{

getUsernameInput()
{
    return cy.get('input[placeholder="Enter your username"]')
}

getPasswordInput()
{
    return cy.get('input[placeholder="Enter your password"]')

}
getSubmit()
{
  return  cy.get('button.Button__button___vS7Mv')
}



}

export default LoginPage;
