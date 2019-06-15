describe('LogIn with correct data', function() {
    beforeEach(() => {
        cy.fixture('logInUser').as('users');
    });
    it('Get an element', function() {
        cy.visit('/');
        cy.contains('Iniciar sesion').click();
        cy.url()
            .should('include', '/login');
        cy.get('#email')
            .type(this.users.correctUser.email)
            .should('have.value', this.users.correctUser.email);
        cy.get('#password')
            .type(this.users.correctUser.password)
            .should('have.value', this.users.correctUser.password);
        cy.get('form').submit();
        cy.wait(1000);
        cy.get('.alert').should('not.exist');
    });
});