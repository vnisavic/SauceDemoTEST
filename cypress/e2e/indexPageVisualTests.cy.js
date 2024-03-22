import Index from "../pageObjectModels/indexPOM"
var index = new Index()

describe('Index page visual tests with standard user', ()=>{

    let user = "standard_user"
    let pass = "secret_sauce"
    let url = "https://www.saucedemo.com/v1/"
    
    beforeEach('Log In', ()=>{
        cy.logIn(url, user,pass)
    })

    it('Is header logo visible', ()=>{
        
        cy.get(index.swagLogo).should('be.visible').and('exist')

    })

    it('Is peek robot visible', ()=>{
        
        cy.get(index.peekRobot).should('be.visible').and('exist')

    })

    it('Is backpack image visible', ()=>{
        
        cy.get(index.backPackImG).should('be.visible').and('exist')

    })

    it('Is bike light image visible', ()=>{
        
        cy.get(index.bikeLightImg).should('be.visible').and('exist')

    })

    it('Is T-SHIRT image visible', ()=>{
        
        cy.get(index.tShirtImg).should('be.visible').and('exist')

    })

    
    it('Is jacket image visible', ()=>{
        
        cy.get(index.jacketImg).should('be.visible').and('exist')

    })

    it('Is onesie image visible', ()=>{
        
        cy.get(index.onesieImg).should('be.visible').and('exist')

    })

    it('Is red shirt image visible', ()=>{
    
        cy.get(index.redShirtImg).should('be.visible').and('exist')

    })

    it('Is products header visible', ()=>{
    
        cy.get(index.productsHeader).should('be.visible').and('exist')

    })

    it('Is filter icon visible', ()=>{
    
        cy.get(index.filterIcon).should('be.visible').and('exist')

    })

})