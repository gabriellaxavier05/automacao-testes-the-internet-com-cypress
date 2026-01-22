// Importações
import dadosLoginUsuario from '../fixtures/dadosLoginUsuario.json' // dados para serem usados nos logins
import LoginPage from '../pages/loginPage'

describe('Fluxo de Login', () => {
 
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
    LoginPage.loginComUsuario(dadosLoginUsuario.usuarioSucesso.username, dadosLoginUsuario.usuarioSucesso.password)
    cy.get("h2").contains('Secure Area') // verifica se está na página correta após o login verificando o texto do título
  })

  // CT02
  it('Tentar realizar login com usuário inválido', () => {
    LoginPage.loginComUsuario(dadosLoginUsuario.usuarioFalha.username, dadosLoginUsuario.usuarioSucesso.password)
    cy.get(listaSeletores.alertaErroLogin).contains("Your username is invalid!")
  })

  // CT03
  it('Tentar realizar login com senha inválida', () => {
    LoginPage.loginComUsuario(dadosLoginUsuario.usuarioSucesso.username, dadosLoginUsuario.usuarioFalha.password)
    cy.get(listaSeletores.alertaErroLogin).contains("Your password is invalid!")
  })

  // CT04 
  it.only('Tentar realizar login com usuário e senha invalídos', () => {
    LoginPage.loginComUsuario(dadosLoginUsuario.usuarioFalha.username, dadosLoginUsuario.usuarioFalha.password)
    cy.get(listaSeletores.alertaErroLogin).contains("Your username is invalid!")
  })

})