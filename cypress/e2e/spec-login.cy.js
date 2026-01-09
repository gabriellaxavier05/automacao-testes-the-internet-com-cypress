describe('template spec', () => {
  
  beforeEach(() => {
    cy.visit('/login') // acessa a página de login
  })

  // CT01
  it('Realizar login com sucesso', () => {
    cy.get("[name='username']").type("tomsmith") // preenche o campo username
    cy.get("[name='password']").type("SuperSecretPassword!") // preenche o campo password
    cy.get("button[type='submit']").click() // clica no botão de login
    cy.get("h2").contains('Secure Area') // verifica se está na página correta após o login verificando o texto do título
  })
})