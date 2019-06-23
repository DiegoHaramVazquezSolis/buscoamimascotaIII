describe('Perdidas load complete information', function() {
    beforeEach(() => {
        cy.fixture('mascotasPerdidas').as('publicar');
    });
    it('Publish a mascota perdida', function() {
        cy.visit('/mascotas/perdidas');
        cy.wait(500);

        cy.contains('Garfield');
        cy.contains('Garfield es un gato gordo y naranja, le encanta la lasagna pero odia los lunes. Estamos muy preocupados y necesitamos encontrarlo, mi perro Odie lo extraña muchísimo.');
        cy.get('#Query')
            .should('have.value', 'Guadalajara, Jalisco, Mexico');
    });
});