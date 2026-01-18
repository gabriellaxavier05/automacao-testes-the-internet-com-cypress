// Importações
import dadosLoginUsuario from '../fixtures/dadosLoginUsuario.json' // dados para serem usados nos logins


describe('template spec', () => {
 
  // Objetos de seletores
  const listaSeletores = {
    campoUsername: "[name='username']",
    campoSenha: "[name='password']",
    btnLogin: "button[type='submit']",
    alertaErroLogin: "[data-alert='']"
  }


  beforeEach(() => {
    cy.clearAllLocalStorage()
    cy.visit('/login') // acessa a página de login
  })

  // CT01
  it('Realizar login com sucesso', () => {
    cy.get(listaSeletores.campoUsername).type(dadosLoginUsuario.usuarioSucesso.username) // preenche o campo username
    cy.get(listaSeletores.campoSenha).type(dadosLoginUsuario.usuarioSucesso.password) // preenche o campo password
    cy.get(listaSeletores.btnLogin).click() // clica no botão de login
    cy.get("h2").contains('Secure Area') // verifica se está na página correta após o login verificando o texto do título
  })

  // CT02
  it('Tentar realizar login com usuário inválido', () => {
    cy.get(listaSeletores.campoUsername).type(dadosLoginUsuario.usuarioFalha.username) // preenche o campo username com usuário inválido
    cy.get(listaSeletores.campoSenha).type(dadosLoginUsuario.usuarioSucesso.password) // preenche o campo password
    cy.get(listaSeletores.btnLogin).click() // clica no botão de login
    cy.get(listaSeletores.alertaErroLogin).contains("Your username is invalid!")
  })

  // CT03
  it('Tentar realizar login com senha inválida', () => {
    cy.get(listaSeletores.campoUsername).type(dadosLoginUsuario.usuarioSucesso.username) // preenche o campo username
    cy.get(listaSeletores.campoSenha).type(dadosLoginUsuario.usuarioFalha.password) // preenche o campo password com senha inválida
    cy.get(listaSeletores.btnLogin).click() // clica no botão de login
    cy.get(listaSeletores.alertaErroLogin).contains("Your password is invalid!")
  })

  // CT04 
  it.only('Tentar realizar login com usuário e senha invalídos', () => {
    cy.get(listaSeletores.campoUsername).type(dadosLoginUsuario.usuarioFalha.username) // preenche o campo username inválido
    cy.get(listaSeletores.campoSenha).type(dadosLoginUsuario.usuarioFalha.password) // preenche o campo password com senha inválida
    cy.get(listaSeletores.btnLogin).click() // clica no botão de login
    cy.get(listaSeletores.alertaErroLogin).contains("Your username is invalid!")
  })

})