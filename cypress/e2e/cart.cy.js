describe('Cart Tests', () => {

  beforeEach(() => {
    cy.visit('/');
    cy.get('#user-name').type('standard_user');
    cy.get('#password').type('secret_sauce');
    cy.get('#login-button').click();
  });

  it('Add Product to Cart', () => {
    cy.get('.inventory_item button').first().click();
    cy.get('.shopping_cart_badge').should('contain', '1');
  });


  it('Add multiple products to the cart', () => {
    
    // Add first product
    cy.get('.inventory_item button').eq(0).click();

    // Add second product
    cy.get('.inventory_item button').eq(1).click();

    // Add third product
    cy.get('.inventory_item button').eq(2).click();

    // Verify cart badge shows 3 items
    cy.get('.shopping_cart_badge')
      .should('be.visible')
      .and('contain', '3');
  });



  it('Remove Product from Cart', () => {
    cy.get('.inventory_item button').first().click();
    cy.get('.shopping_cart_link').click();
    cy.get('.cart_button').click();
    cy.get('.cart_item').should('not.exist');
  });

});
