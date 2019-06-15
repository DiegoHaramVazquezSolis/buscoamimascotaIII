describe('SignIn with different passwords', function() {
    beforeEach(() => {
        cy.fixture('signInUser').as('users');
    });
    it('Get an element', function() {
        cy.visit('/');
        cy.contains('Registrarse').click();
        cy.url()
            .should('include', '/signin');
        cy.get('#name')
            .type(this.users.userWithVerifyError.name)
            .should('have.value', this.users.userWithVerifyError.name);
        cy.get('#email')
            .type(this.users.userWithVerifyError.email)
            .should('have.value', this.users.userWithVerifyError.email);
        cy.get('#password')
            .type(this.users.userWithVerifyError.password)
            .should('have.value', this.users.userWithVerifyError.password);
        cy.get('#verify')
            .type(this.users.userWithVerifyError.verify)
            .should('have.value', this.users.userWithVerifyError.verify);
        cy.get('form').submit();
        cy.contains('Las contraseñas no coinciden');
    });
});