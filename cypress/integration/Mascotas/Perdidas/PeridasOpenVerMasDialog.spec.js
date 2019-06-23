describe('Perdidas open ver mas modal with button', function() {
    beforeEach(() => {
        cy.fixture('mascotasPerdidas').as('publicar');
    });
    it('Publish a mascota perdida', function() {
        cy.visit('/mascotas/perdidas');
        cy.wait(2000);

        cy.contains('Ver mas').click();
        cy.contains('Visto por ultima vez');
        cy.contains('Tiene placa de identificación');
    });
});