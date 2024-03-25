import Index from "../pageObjectModels/indexPOM"
import indexPageText from "../fixtures/indexPageItemNames.json"
import itemPrice from "../fixtures/itemPrices.json"

var index = new Index()

describe('Index Page text proofing', ()=>{

    let user = "standard_user"
    let pass = "secret_sauce"
    let url = "https://www.saucedemo.com/v1/"
    
    beforeEach('Log In', ()=>{
        cy.logIn(url, user,pass)
    })

    it('Are item names correct', ()=>{

            cy.get('.inventory_item_name').each((item, index, list)=>{

            cy.wrap(item).should('have.text', indexPageText[index].elName)

         })

        // cy.proofTextForMultipleElems(index.allElementNames, indexPageText, indexPageText.elName) tried to make a function for this - failed, will try again later
            
    })

    it('Are item prices correct', ()=>{
       
        cy.get('.inventory_item_price').each((item, index, list)=>{
            cy.wrap(item).should('have.text', itemPrice[index].price)
        })
    })
         
})