describe('Checkout Test', () => {

  it('Complete Checkout', () => {

    cy.visit('/');
    cy.get('#user-name').type('standard_user');
    cy.get('#password').type('secret_sauce');
    cy.get('#login-button').click();

    cy.get('.inventory_item button').first().click();
    cy.get('.shopping_cart_link').click();
    cy.get('#checkout').click();

    cy.get('#first-name').type('Ashwini');
    cy.get('#last-name').type('Hinge');
    cy.get('#postal-code').type('411001');

    cy.get('#continue').click();
    cy.get('#finish').click();

    cy.get('.complete-header')
      .should('contain', 'Thank you for your order');

      
      
  });

   
});
