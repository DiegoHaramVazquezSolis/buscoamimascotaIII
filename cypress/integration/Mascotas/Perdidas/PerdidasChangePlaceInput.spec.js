describe('Perdidas change search place', function() {
    beforeEach(() => {
        cy.fixture('mascotasPerdidas').as('publicar');
    });
    it('Publish a mascota perdida', function() {
        cy.visit('/mascotas/perdidas');
        cy.wait(1000);

        cy.get('#Query')
            .clear()
            .type('Zapopan, Jalisco, Mexico')
            .should('have.value', 'Zapopan, Jalisco, Mexico');
        cy.contains('Kenji de Zapopan');
        cy.contains('Es igual a Kenji pero este es de Zapopan');
    });
});