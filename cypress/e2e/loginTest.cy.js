import Login from "../pageObjectModels/loginPagePOM"


describe('Login Test', ()=>{

    beforeEach('Visit the page', ()=>{

        cy.visit('https://www.saucedemo.com/v1/')

    })

    it('Standard user credentials login test', ()=>{

        cy.fixture('credentials.json').then((data)=>{

            const login = new Login()

            login.setUsername(data.standardUsrnm)
            login.setPass(data.password)
            login.clickLogin()
            cy.url().should('eq','https://www.saucedemo.com/v1/inventory.html')

        })

    })

    it('Problem user credentials login test', ()=>{

        cy.fixture('credentials.json').then((data)=>{

            const login = new Login()

            login.setUsername(data.problemUsrnm)
            login.setPass(data.password)
            login.clickLogin()
            cy.url().should('eq','https://www.saucedemo.com/v1/inventory.html')

        })

    })

    it('Performance glitch user credentials login test', ()=>{

        cy.fixture('credentials.json').then((data)=>{

            const login = new Login()

            login.setUsername(data.perfGlitchUsrnm)
            login.setPass(data.password)
            login.clickLogin()
            cy.url().should('eq','https://www.saucedemo.com/v1/inventory.html')

        })

    })

    it('Locked out user credentials login test', ()=>{

        cy.fixture('credentials.json').then((data)=>{

            const login = new Login()

            login.setUsername(data.lockedOutUsrnm)
            login.setPass(data.password)
            login.clickLogin()
            cy.get('[data-test="error"]').should('contain', 'Epic sadface: ')

        })

    })

    it('Invalid username valid password login test', ()=>{

        cy.fixture('credentials.json').then((data)=>{

            const login = new Login()

            login.setUsername('username')
            login.setPass(data.password)
            login.clickLogin()
            cy.get('[data-test="error"]').should('contain', 'Username and password do not match')

        })
    })

    it('Valid username invalid password login test', ()=>{

        cy.fixture('credentials.json').then((data)=>{

            const login = new Login()

            login.setUsername(data.standardUsrnm)
            login.setPass('pass123')
            login.clickLogin()
            cy.get('[data-test="error"]').should('contain', 'Username and password do not match')

        })
    })

    it('Invalid username and invalid password login test', ()=>{

        cy.fixture('credentials.json').then((data)=>{

            const login = new Login()

            login.setUsername('username')
            login.setPass('pass123')
            login.clickLogin()
            cy.get('[data-test="error"]').should('contain', 'Username and password do not match')

        })
    })

    it('Empty username and password input', ()=>{

            cy.fixture('credentials.json').then((data)=>{

                const login = new Login()

                login.clickLogin()
                cy.get('[data-test="error"]').should('contain', 'Username is required')
                
            })
    })

    it('Empty username not empty password', ()=>{ 

        cy.fixture('credentials.json').then((data)=>{

            const login = new Login()

            login.setPass(data.password)
            login.clickLogin()
            cy.get('[data-test="error"]').should('contain', 'Username is required')
            
        })
    })

    it('Empty password not empty username', ()=>{ 

        cy.fixture('credentials.json').then((data)=>{

            const login = new Login()

            login.setUsername(data.standardUsrnm)
            login.clickLogin()
            cy.get('[data-test="error"]').should('contain', 'Password is required')
            
        })
    })

})