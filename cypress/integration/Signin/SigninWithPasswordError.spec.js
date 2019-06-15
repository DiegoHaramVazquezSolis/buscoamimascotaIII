describe('SignIn with short password', function() {
    beforeEach(() => {
        cy.fixture('signInUser').as('users');
    });
    it('Get an element', function() {
        cy.visit('/');
        cy.contains('Registrarse').click();
        cy.url()
            .should('include', '/signin');
        cy.get('#name')
            .type(this.users.userWithPasswordError.name)
            .should('have.value', this.users.userWithPasswordError.name);
        cy.get('#email')
            .type(this.users.userWithPasswordError.email)
            .should('have.value', this.users.userWithPasswordError.email);
        cy.get('#password')
            .type(this.users.userWithPasswordError.password)
            .should('have.value', this.users.userWithPasswordError.password);
        cy.get('#verify')
            .type(this.users.userWithPasswordError.verify)
            .should('have.value', this.users.userWithPasswordError.verify);
        cy.get('form').submit();
        cy.contains('La contraseña debe tener al menos seis caracteres de longitud');
    });
});