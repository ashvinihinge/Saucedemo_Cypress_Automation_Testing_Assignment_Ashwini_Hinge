describe('Login Tests', () => {

  beforeEach(() => {
    cy.visit('/');
  });

  it('Valid Login', () => {
    cy.get('#user-name').type('standard_user');
    cy.get('#password').type('secret_sauce');
    cy.get('#login-button').click();
    cy.url().should('include', 'inventory');
  });

  it('Invalid Username and Invalid Password', () => {
    cy.get('#user-name').type('wrong_user');
    cy.get('#password').type('wrong_pass');
    cy.get('#login-button').click();
    cy.get('[data-test="error"]').should('be.visible');
  });

it('Invalid Username', () => {
    cy.get('#user-name').type('invalid_user');
    cy.get('#password').type('secret_sauce');
    cy.get('#login-button').click();
    cy.get('[data-test="error"]').should('be.visible');
  });

  it('Invalid Password', () => {
    cy.get('#user-name').type('standard_user');
    cy.get('#password').type('wrong123');
    cy.get('#login-button').click();
    cy.get('[data-test="error"]').should('be.visible');
  });


  it('Both username and password are empty', () => {

    cy.get('#login-button').click();

       cy.get('[data-test="error"]')
      .should('be.visible')
      .and('contain', 'Username is required');

  });

});
