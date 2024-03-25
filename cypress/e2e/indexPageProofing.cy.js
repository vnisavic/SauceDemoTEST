import Index from "../pageObjectModels/indexPOM"
import indexPageText from "../fixtures/indexPageItemNames.json"
import itemPrice from "../fixtures/itemPrices.json"
import itemDesc from "../fixtures/itemDescriptions.json"
import imagesSrc from "../fixtures/itemImageSRC.json"

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

    it('Are item descriptions correct', ()=>{

        cy.get('.inventory_item_desc').each((item, index, list)=>{
            cy.wrap(item).should('have.text', itemDesc[index].desc)
        })
    })

    it('Are item images correct (does each img have a correct src property', ()=>{

        cy.get("img[class='inventory_item_img']").each((item, index, list)=>{
            cy.wrap(item).should('have.attr', 'src').should('eq', imagesSrc[index].src)
        })
    })

    it('Checking if add to cart buttons have the correct text', ()=>{

        cy.get('.btn_primary').each((btn, index, list)=>{

            cy.wrap(btn).should('have.text', 'ADD TO CART')
        })
    })
         
})