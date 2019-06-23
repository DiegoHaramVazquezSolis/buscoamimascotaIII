describe('Perdidas open contact modal with button', function() {
    beforeEach(() => {
        cy.fixture('mascotasPerdidas').as('publicar');
    });
    it('Publish a mascota perdida', function() {
        cy.visit('/mascotas/perdidas');
        cy.wait(2000);

        cy.contains('Contactar').click();
    });
});