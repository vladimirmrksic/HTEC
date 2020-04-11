class Dashboard
{

getUseCase()
{
    return cy.get('div.row div:nth-of-type(2) div:nth-of-type(1) a:nth-of-type(1) div:nth-of-type(1) span:nth-of-type(1) img:nth-of-type(1)')
}

getCreateUseCase()
{
    return cy.get('a.btn.mb-4.btn-primary.float-right')
}
getInputTitle()
{
    return cy.get('input[name=title]')
}
getExpectedResult()
{
    return cy.get('input[name=expected_result]')
}
getCreateUseCaseStep1()
{
    return cy.get('input[name=testStepId-0]')
}
getsubmitUsecase()
{
    return cy.get('button.btn.btn-primary.mt-4.float-right')
}
getBack()
{
    return cy.get('i.fa.fa-arrow-left')
}
getEditUsecase()
{
    return cy.get('a.list-group-item.list-group-item-action')
}

}

export default Dashboard;
