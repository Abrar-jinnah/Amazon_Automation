/// <reference types="cypress" />
import AmazonElements from "../support/AmazonElements"
const amazonElemets = new AmazonElements()

describe('Automate Amazon web application to add to cart and delete', function () {

    //Load test data from fixture
    before(function(){
        cy.fixture('Amazon_Automation').then(function(data){
            this.data=data

        })
    })

    it('Verify the product add to cart and delete', function () {

        // Visit the Amazon website
        cy.visit('/')
        // Select the Books tab from the dropdown
        cy.get('select').select('Books', { force: true })

        // Enter "Automation" in the search bar and press enter (Read data from fixtre file)
        amazonElemets.getSearchbar().type(this.data.search+'{enter}')

        // Click 4 stars & up checkbox
        amazonElemets.get4StarRating().click()

        //Get the second item name
        amazonElemets.getSecondItem().invoke('text').as('secondItemName')
        cy.get('@secondItemName').then((text) => {
            cy.log(`The name of the second item is "${text}"`)
        })

        //Select the 2nd item
        amazonElemets.getSecondItem().click()

        //get the unit price
        cy.get('span[data-a-color="price"] span').eq(1).invoke('text').then((unitPrice) => {
            cy.log(`The unit price is "${unitPrice}"`)
        })

        //Compare the title
        amazonElemets.getProductTitle().invoke('text').then((bookTitle) => {
            expect(bookTitle.trim()).to.equal(this.secondItemName.trim());
        });

        // Click on the dropdown label
        amazonElemets.getDropdown().click()
        // Select the second option in the dropdown
        amazonElemets.getSecondQuantity().eq(1).click()
        //click on add to cart button
        amazonElemets.getClickOnAddToCart().click()
        //// Click 'Proceed to Checkout' button
        amazonElemets.getProceedToCheckout().click()

        //Check the book tiitle is equal
        amazonElemets.getBookTitleInCheckout().invoke('text').then((bookTitleInProceed) => {
            expect(bookTitleInProceed.trim()).to.equal(this.secondItemName.trim());
        });

        //Check the quantity is 2
        amazonElemets.geQtyInCheckout().should('have.text', '2')

        // Check the subtotal amount is correct
        amazonElemets.getUnitPriceOnProceed().invoke('text').then((unitPrice) => {
            const Totalprice = parseFloat(unitPrice.replace('$', '')) * 2;
            amazonElemets.getSubTotal().should('have.text', '$' + Totalprice)
        })

        // Click the delete button
        amazonElemets.getDeleteButton().click()
        //Check that the subtotal amount is now equal to $0.00
        amazonElemets.getSubTotal().should('have.text', '$0.00')

    })

})