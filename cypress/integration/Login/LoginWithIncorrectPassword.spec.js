describe('LogIn with incorrect password', function() {
    beforeEach(() => {
        cy.fixture('logInUser').as('users');
    });
    it('Get an element', function() {
        cy.visit('/');
        cy.contains('Iniciar sesion').click();
        cy.url()
            .should('include', '/login');
        cy.get('#email')
            .type(this.users.incorrectPasswordUser.email)
            .should('have.value', this.users.incorrectPasswordUser.email);
        cy.get('#password')
            .type(this.users.incorrectPasswordUser.password)
            .should('have.value', this.users.incorrectPasswordUser.password);
        cy.get('form').submit();
        cy.contains('Contraseña incorrecta');
    });
});