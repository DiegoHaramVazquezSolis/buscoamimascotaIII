describe('SignIn with invalid email', function() {
    beforeEach(() => {
        cy.fixture('signInUser').as('users');
    });
    it('Get an element', function() {
        cy.visit('/');
        cy.contains('Registrarse').click();
        cy.url()
            .should('include', '/signin');
        cy.get('#name')
            .type(this.users.userWithEmailError.name)
            .should('have.value', this.users.userWithEmailError.name);
        cy.get('#email')
            .type(this.users.userWithEmailError.email)
            .should('have.value', this.users.userWithEmailError.email);
        cy.get('#password')
            .type(this.users.userWithEmailError.password)
            .should('have.value', this.users.userWithEmailError.password);
        cy.get('#verify')
            .type(this.users.userWithEmailError.verify)
            .should('have.value', this.users.userWithEmailError.verify);
        cy.get('form').submit();
        cy.contains('La direccion de correo proporcionada no es valida');
    });
});