import Index from "../pageObjectModels/indexPOM"


describe('Index page visual tests with standard user', ()=>{

    let user = "standard_user"
    let pass = "secret_sauce"
    let url = "https://www.saucedemo.com/v1/"
    

    beforeEach('Log In', ()=>{
        cy.logIn(url, user,pass)
    })


    it('Is header logo visible', ()=>{
        
        const index = new Index()
        cy.isVisible(index.swagLogo)

    })

    it('Is peek robot visible', ()=>{
        
        const index = new Index()
        cy.isVisible(index.peekRobot)

    })

    it('Is backpack image visible', ()=>{
        
        const index = new Index()
        cy.isVisible(index.backPackImG)

    })

    it('Is bike light image visible', ()=>{
        
        const index = new Index()
        cy.isVisible(index.bikeLightImg)

    })

    it('Is T-SHIRT image visible', ()=>{
        
        const index = new Index()
        cy.isVisible(index.tShirtImg)

    })

    
    it('Is jacket image visible', ()=>{
        
        const index = new Index()
        cy.isVisible(index.jacketImg)

    })

    it('Is onesie image visible', ()=>{
        
        const index = new Index()
        cy.isVisible(index.onesieImg)

    })

    it('Is red shirt image visible', ()=>{
        
        const index = new Index()
        cy.isVisible(index.redShirtImg)

    })

    

})