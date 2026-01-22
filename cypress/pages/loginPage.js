class LoginPage {

    listaSeletores() { // Objetos seletores em forma de função
        const seletores = {
            campoUsername: "[name='username']",
            campoSenha: "[name='password']",
            btnLogin: "button[type='submit']",
            alertaErroLogin: "[data-alert='']"
        }

        return seletores; // retorna o objeto de seletores
    }

    // Passos do teste
    loginComUsuario(usuario, senha){
        cy.get(this.listaSeletores().campoUsername).type(usuario) // preenche o campo com o usuário
        cy.get(this.listaSeletores().campoSenha).type(senha) // preenche o campo com a senha
        cy.get(this.listaSeletores().btnLogin).click() // clica no botão de login
    }

}

export default new LoginPage;