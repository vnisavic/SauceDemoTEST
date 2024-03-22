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

    it('Is twitter link visible', ()=>{
    
        cy.get(index.twitterLink).should('be.visible').and('exist')

    })

    it('Is facebook link visible', ()=>{
    
        cy.get(index.facebookLink).should('be.visible').and('exist')

    })

    it('Is linked in link visible', ()=>{
    
        cy.get(index.linkedInLink).should('be.visible').and('exist')

    })

    it('Is footer robot visible', ()=>{
    
        cy.get(index.footerRobotImg).should('be.visible').and('exist')

    })

    it('Is backpack price visible', ()=>{

        cy.get(index.backpackPrice).should('be.visible').and('exist')

    })

    it('Is bike light price visible', ()=>{

        cy.get(index.bikeLightPrice).should('be.visible').and('exist')
        
    })

    it('Is tshirt price visible', ()=>{

        cy.get(index.tShirtPrice).should('be.visible').and('exist')
        
    })

    it('Is jacket price visible', ()=>{

        cy.get(index.jacketPrice).should('be.visible').and('exist')
        
    })

    it('Is onesie price visible', ()=>{

        cy.get(index.onesiePrice).should('be.visible').and('exist')
        
    })

    it('Is red shirt price visible', ()=>{

        cy.get(index.redShirtPrice).should('be.visible').and('exist')
        
    })

    it('Is bike lighht name visible', ()=>{

        cy.get(index.bikeName).should('be.visible').and('exist')
        
    })

    it('Is backpack name visible', ()=>{

        cy.get(index.backpackName).should('be.visible').and('exist')
        
    })

    it('Is tshirt name visible', ()=>{

        cy.get(index.tshirtName).should('be.visible').and('exist')
        
    })

    it('Is jacket name visible', ()=>{

        cy.get(index.jacketName).should('be.visible').and('exist')
        
    })

    it('Is onesie name visible', ()=>{

        cy.get(index.onesieName).should('be.visible').and('exist')
        
    })

    it('Is red shirt name visible', ()=>{

        cy.get(index.redShirtName).should('be.visible').and('exist')
        
    })

    it('Is bike light desc visible', ()=>{

        cy.get(index.bikeDesc).should('be.visible').and('exist')
        
    })

    it('Is backpack desc visible', ()=>{

        cy.get(index.backpackDesc).should('be.visible').and('exist')
        
    })

    it('Is tshirt desc visible', ()=>{

        cy.get(index.tshirtDesc).should('be.visible').and('exist')
        
    })

    it('Is jacket desc visible', ()=>{

        cy.get(index.jacketDesc).should('be.visible').and('exist')
        
    })

    it('Is onesie desc visible', ()=>{

        cy.get(index.onesieDesc).should('be.visible').and('exist')
        
    })

    it('Is redshirt desc visible', ()=>{

        cy.get(index.redShirtDesc).should('be.visible').and('exist')
        
    })

    it('Is backpack add to cart button visible', ()=>{

        cy.get(index.cartBtnOne).should('be.visible').and('exist')
        
    })

    it('Is bike light add to cart button visible', ()=>{

        cy.get(index.cartBtnTwo).should('be.visible').and('exist')
        
    })

    it('Is tshirt add to cart button visible', ()=>{

        cy.get(index.cartBtnThree).should('be.visible').and('exist')
        
    })

    it('Is jacket add to cart button visible', ()=>{

        cy.get(index.cartBtnFour).should('be.visible').and('exist')
        
    })

    it('Is onesie add to cart button visible', ()=>{

        cy.get(index.cartBtnFive).should('be.visible').and('exist')
        
    })

    it('Is red shirt add to cart button visible', ()=>{

        cy.get(index.cartBtnSix).should('be.visible').and('exist')
        
    })

    it('Is footer text visible', ()=>{

        cy.get(index.footerText).should('be.visible').and('exist')
        
    })

})