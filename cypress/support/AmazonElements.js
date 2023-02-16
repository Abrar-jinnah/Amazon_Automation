class AmazonElements {

    getSearchbar(){
        return cy.get('#twotabsearchtextbox')
    }

    get4StarRating(){
        return cy.get('[aria-label="4 Stars & Up"]')
    }

    getSecondItem(){
        return cy.get('[data-component-type="s-search-result"]:nth-child(3) h2 a span')
    }
    getunitPrice(){
        return cy.get('span[data-a-color="price"] span')
    }
    getProductTitle(){
        return cy.get('#productTitle')
    }

    getDropdown(){
        return cy.get('span.a-dropdown-label')
    }
    getSecondQuantity(){
        return cy.get('a.a-dropdown-link')
    }
    getClickOnAddToCart(){
        return cy.get('input[name="submit.add-to-cart"]')
    }
    getProceedToCheckout(){
        return cy.get('a[data-csa-c-slot-id="sw-gtc"]')
    }

    getBookTitleInCheckout(){
        return cy.get('.a-size-base-plus .a-truncate .a-offscreen')
    }
    geQtyInCheckout(){
        return cy.get('.a-dropdown-prompt')
    }
    getSubTotal(){
        return  cy.get('span[id="sc-subtotal-amount-activecart"] span')
    }
    getDeleteButton(){
        return  cy.get('input[data-action="delete"]')
    }
    getUnitPriceOnProceed(){
        return cy.get('.sc-item-price-block > .a-spacing-mini > .a-size-medium')
    }


    




    
    
    
   

}

export default AmazonElements;