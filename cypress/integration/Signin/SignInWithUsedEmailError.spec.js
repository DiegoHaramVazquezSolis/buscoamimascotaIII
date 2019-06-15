describe('SignIn with used email', function() {
    beforeEach(() => {
        cy.fixture('signInUser').as('users');
    });
    it('Get an element', function() {
        cy.visit('/');
        cy.contains('Registrarse').click();
        cy.url()
            .should('include', '/signin');
        cy.get('#name')
            .type(this.users.userWithUsedEmailError.name)
            .should('have.value', this.users.userWithUsedEmailError.name);
        cy.get('#email')
            .type(this.users.userWithUsedEmailError.email)
            .should('have.value', this.users.userWithUsedEmailError.email);
        cy.get('#password')
            .type(this.users.userWithUsedEmailError.password)
            .should('have.value', this.users.userWithUsedEmailError.password);
        cy.get('#verify')
            .type(this.users.userWithUsedEmailError.verify)
            .should('have.value', this.users.userWithUsedEmailError.verify);
        cy.get('form').submit();
        cy.contains('Esta direccion de correo ya esta en uso');
    });
});