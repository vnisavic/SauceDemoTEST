import Index from "../pageObjectModels/indexPOM"
var index = new Index()

describe('Index Page text proofing', ()=>{

    let user = "standard_user"
    let pass = "secret_sauce"
    let url = "https://www.saucedemo.com/v1/"
    
    beforeEach('Log In', ()=>{
        cy.logIn(url, user,pass)
    })

    it('Is backpack name correct', ()=>{

        cy.fixture('indexPageText.json').then((itemName)=>{

            cy.textProof(index.backPackItemName, itemName.backpackName)

        })
    })

    it('Is bike light name correct', ()=>{

        cy.fixture('indexPageText.json').then((itemName)=>{

            cy.textProof(index.bikeLightItemName, itemName.bikeLightName)
            
        })
    })

    it('Is tshirt name correct', ()=>{

        cy.fixture('indexPageText.json').then((itemName)=>{

            cy.textProof(index.tShirtItemName, itemName.tshirtName)
            
        })
    })

    it('Is jacket name correct', ()=>{

        cy.fixture('indexPageText.json').then((itemName)=>{

            cy.textProof(index.jacketItemName, itemName.jacketName)
            
        })
    })

    it('Is onesie name correct', ()=>{

        cy.fixture('indexPageText.json').then((itemName)=>{

            cy.textProof(index.onesieItemName, itemName.onesieName)
            
        })
    })

    it('Is red shirt name correct', ()=>{

        cy.fixture('indexPageText.json').then((itemName)=>{

            cy.textProof(index.redShirtItemName, itemName.redShirtName)
            
        })
    })
    
})