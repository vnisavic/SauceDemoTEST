import Login from "../pageObjectModels/loginPagePOM"

describe('Visual tests', ()=>{

    beforeEach('Visit the page', ()=>{

        cy.visit('https://www.saucedemo.com/v1/')

    })

    it('Is header logo visible', ()=>{

        const login = new Login()

        login.checkVisibility(login.swagLogo)

    })

    it('Is username input visible', ()=>{

        const login = new Login()

        login.checkVisibility(login.usernameInput)

    })

    it('Is password input visible', ()=>{

        const login = new Login()

        login.checkVisibility(login.passwordInput)

    })

    it('Is login button visible', ()=>{

        const login = new Login()

        login.checkVisibility(login.loginBtn)
        
    })

    it('Is robot logo visible', ()=>{

        const login = new Login()

        login.checkVisibility(login.swagRobot)
        
    })
})