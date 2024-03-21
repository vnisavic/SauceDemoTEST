class Login{

    usernameInput = cy.get('[data-test="username"]')
    passwordInput = cy.get('[data-test="password"]')
    loginBtn = cy.get('#login-button')
    swagLogo = cy.get('.login_logo')
    swagRobot = cy.get('.bot_column')

    setUsername(username){

        this.usernameInput.type(username)

    }

    setPass(pass){

        this.passwordInput.type(pass)

    }

    clickLogin(){

        this.loginBtn.click()

    }
    
}
export default Login;