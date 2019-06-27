describe('Publicar complete', function() {
    beforeEach(() => {
        cy.fixture('mascotasPerdidas').as('perdida');
    });
    it('Publish a mascota perdida', function() {
        cy.visit('/mascotas/perdidas');
        cy.wait(500);

        cy.contains('Ver mas').click();
        cy.wait(500);
        cy.reload();
        cy.contains(this.perdida.mascotaParaVerPerfil.name).click();
    });
});
