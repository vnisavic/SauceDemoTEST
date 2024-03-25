
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

   it('Testing item images visibility', ()=>{

       cy.get('.inventory_item_img').each((image, index, list)=>{
          cy.wrap(image).should('be.visible').and('exist')
       })
   })

    it('Is products header visible', ()=>{
    
        cy.get(index.productsHeader).should('be.visible').and('exist')

    })

    it('Is filter icon visible', ()=>{
    
        cy.get(index.filterIcon).should('be.visible').and('exist')

    })

    it('Testing footer links visibility', ()=>{

        cy.get('.social > li').each((listItem, index, list)=>{

            cy.wrap(listItem).should('be.visible').and('exist')
        })
    })

    it('Is footer robot visible', ()=>{
    
        cy.get(index.footerRobotImg).should('be.visible').and('exist')

    })

    it('Testing item prices visibility', ()=>{

        cy.get('.inventory_item_price').each((itemPrice, index, list)=>{

            cy.wrap(itemPrice).should('be.visible').and('exist')

        })
    })

    it('Testing item names visibility', ()=>{

        cy.get('.inventory_item_name').each((itemName, index, list)=>{

            cy.wrap(itemName).should('be.visible').and('exist')

        })
    })

    it('Testing add to cart buttons visibility', ()=>{

        cy.get('.btn_primary').each((btn, index, list)=>{

            cy.wrap(btn).should('be.visible').and('exist')
        })
    })

    it('Is footer text visible', ()=>{

        cy.get(index.footerText).should('be.visible').and('exist')
        
    })

    it('Test item descriptions visibility', ()=>{

        cy.get('.inventory_item_desc').each((desc, index, list)=>{

            cy.wrap(desc).should('be.visible').and('exist')
        })
    })

})