beforeEach(() => {
    cy.visit('cypress/fixtures/registration_form_3.html')
})

/*
BONUS TASK: add visual tests for registration form 3
Task list:
* Create test suite for visual tests for registration form 3 (describe block)
* Create tests to verify visual parts of the page:
    * radio buttons and its content
    * dropdown and dependencies between 2 dropdowns:
        * list of cities changes depending on the choice of country
        * if city is already chosen and country is updated, then city choice should be removed
    * checkboxes, their content and links
    * email format
 */

describe('Section 2: Visual tests', () => {
    // Radio buttons and its content
    it('Check that news letter fresuqncy list is correct', () => {
        // Array of found elements with given selector has 4 elements in total
        cy.get('input[type="radio"]').should('have.length', 4)

        // Verify labels of the radio buttons
        cy.get('input[type="radio"]').next().eq(0).should('have.text', 'Daily')
        cy.get('input[type="radio"]').next().eq(1).should('have.text', 'Weekly')
        cy.get('input[type="radio"]').next().eq(2).should('have.text', 'Monthly')
        cy.get('input[type="radio"]').next().eq(3).should('have.text', 'Never')

        //Verify default state of radio buttons
        cy.get('input[type="radio"]').eq(0).should('not.be.checked')
        cy.get('input[type="radio"]').eq(1).should('not.be.checked')
        cy.get('input[type="radio"]').eq(2).should('not.be.checked')
        cy.get('input[type="radio"]').eq(3).should('not.be.checked')

        // Selecting one will remove selection from the other radio button
        cy.get('input[type="radio"]').eq(0).check().should('be.checked')
        cy.get('input[type="radio"]').eq(1).check().should('be.checked')
        cy.get('input[type="radio"]').eq(0).should('not.be.checked')
    })

    // Checkboxes, their content
    it('Check that Accept checkbox is correct', () => {

        cy.get('input[type="checkbox"]').should('have.length', 2)

        cy.get('input[type="checkbox"]').next().eq(0).should('have.text', 'Accept our privacy policy')
        cy.get('input[type="checkbox"]').next().eq(1).should('have.text', 'Accept our cookie policy')

        cy.get('input[type="checkbox"]').eq(0).should('not.be.checked')
        cy.get('input[type="checkbox"]').eq(1).should('not.be.checked')

        //Selecting the second checkbox will not remove selection from the first checkbox
        cy.get('input[type="checkbox"').eq(0).check().should('be.checked')
        cy.get('input[type="checkbox"').eq(1).check().should('be.checked')
        cy.get('input[type="checkbox"').eq(0).should('be.checked')
    })

    // links
    it('Check that Cookie policy link is correct', () => {
   
        cy.get('input[href="cookiePolicy.html"]').should('have.text', 'Accept our cookie policy')  
        cy.get('input[href="cookiePolicy.html"]').check().should('be.checked')
        // What code for moving to link
    })

    // email format
    it('Check that email format is correct', () => {
   
        // What code for validating email format
        
    })


    //list of cities changes depending on the choice of country
    //if city is already chosen and country is updated, then city choice should be removed
    it('Check that cities list is correct', () => {
   
        // What code for validating cities
    })

})    
    

/*
BONUS TASK: add functional tests for registration form 3
Task list:
* Create second test suite for functional tests
* Create tests to verify logic of the page:
    * all fields are filled in + corresponding assertions
    * only mandatory fields are filled in + corresponding assertions
    * mandatory fields are absent + corresponding assertions (try using function)
    * add file functionlity(google yourself for solution!)
 */