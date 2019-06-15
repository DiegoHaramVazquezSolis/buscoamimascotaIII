describe('LogIn with not existing user', function() {
    beforeEach(() => {
        cy.fixture('logInUser').as('users');
    });
    it('Get an element', function() {
        cy.visit('/');
        cy.contains('Iniciar sesion').click();
        cy.url()
            .should('include', '/login');
        cy.get('#email')
            .type(this.users.notExistingUser.email)
            .should('have.value', this.users.notExistingUser.email);
        cy.get('#password')
            .type(this.users.notExistingUser.password)
            .should('have.value', this.users.notExistingUser.password);
        cy.get('form').submit();
        cy.contains('No existe un usuario registrado con esa direccion de correo');
    });
});