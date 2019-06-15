describe('LogIn with invalid email', function() {
    beforeEach(() => {
        cy.fixture('logInUser').as('users');
    });
    it('Get an element', function() {
        cy.visit('/');
        cy.contains('Iniciar sesion').click();
        cy.url()
            .should('include', '/login');
        cy.get('#email')
            .type(this.users.invalidEmailUser.email+' ')
            .should('have.value', this.users.invalidEmailUser.email);
        cy.get('#password')
            .type(this.users.invalidEmailUser.password)
            .should('have.value', this.users.invalidEmailUser.password);
        cy.get('form').submit();
        cy.contains('La direccion de correo proporcionada no es valida');
    });
});