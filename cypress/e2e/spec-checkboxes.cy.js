describe('Página de checkboxes', () => {
  
  // Objeto de seletores
  const listaSeletores = {
    campoCheckbox: "[type='checkbox']"
  }

  beforeEach(() => {
    cy.visit('/checkboxes') // acessa a página dos checkboxes
  });

  // CT01
  it('Selecionar o 1o checkbox da página', () => {    
    cy.get(listaSeletores.campoCheckbox).first().check().should('be.checked') // clica no 1o input checkbox da página e verifica se está selecionado
  });

  // CT02
  it('Desmarcar o 2o checkbox da página', () => {
    cy.get(listaSeletores.campoCheckbox).last().uncheck().should('not.be.checked') // desmarca o 2o input checkbox da página e verifica se não está selecionado
  });

});