describe('User Publication render with correct data', function() {
    beforeEach(() => {
    });
    it('Get an element', function() {
        cy.visit('/');
        cy.contains('Mi cuenta').click();
        cy.contains('Mis publicaciones').click();
        cy.url()
            .should('include', '/usuario/publicaciones');
            cy.contains('Kenji');
    });
});