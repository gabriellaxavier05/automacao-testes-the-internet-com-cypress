describe('Página de checkboxes', () => {
  
  // CT01
  it('Selecionar o 1o checkbox da página', () => {
    cy.visit('https://the-internet.herokuapp.com/checkboxes') // acessa a página dos checkboxes
    cy.get("[type='checkbox']").first().check().should('be.checked') // clica no 1o input checkbox da página e verifica se está selecionado
  });
});