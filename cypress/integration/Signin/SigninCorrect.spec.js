describe('SignIn with correct data', function() {
    beforeEach(() => {
        cy.fixture('signInUser').as('users');
    });
    it('Get an element', function() {
        cy.visit('/');
        cy.contains('Registrarse').click();
        cy.url()
            .should('include', '/signin');
        cy.get('#name')
            .type(this.users.userWithCorrectData.name)
            .should('have.value', this.users.userWithCorrectData.name);
        cy.get('#email')
            .type(this.users.userWithCorrectData.email)
            .should('have.value', this.users.userWithCorrectData.email);
        cy.get('#password')
            .type(this.users.userWithCorrectData.password)
            .should('have.value', this.users.userWithCorrectData.password);
        cy.get('#verify')
            .type(this.users.userWithCorrectData.verify)
            .should('have.value', this.users.userWithCorrectData.verify);
        cy.get('form').submit();
        cy.wait(1000);
        cy.get('.alert').should('not.exist');
    });
});