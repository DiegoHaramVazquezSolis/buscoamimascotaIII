describe('Publicar incomplete', function() {
    beforeEach(() => {
        cy.fixture('mascotasPerdidas').as('publicar');
    });
    it('Publish a mascota perdida', function() {
        cy.visit('/mascotas/publicar');
        cy.wait(500);
        
        cy.get('#specie')
            .select(this.publicar.mascotaPerdidaSinCamposObligatorios.specie)
            .should('have.value', this.publicar.mascotaPerdidaSinCamposObligatorios.specie);
        
        cy.get('#description')
            .type(this.publicar.mascotaPerdidaSinCamposObligatorios.description)
            .should('have.value', this.publicar.mascotaPerdidaSinCamposObligatorios.description);
        
        cy.get('#lastSeen')
            .type(this.publicar.mascotaPerdidaSinCamposObligatorios.lastSeen)
            .should('have.value', this.publicar.mascotaPerdidaSinCamposObligatorios.lastSeen);

        this.publicar.mascotaPerdidaSinCamposObligatorios.contact.map((contact, index) => {
            cy.get(`.${contact.type}-${index}`).click();
            cy.get(`#contact-${index}`)
                .type(contact.content)
                .should('have.value', contact.content);
            if (this.publicar.mascotaPerdidaSinCamposObligatorios.contact.length - 1 !== index) {
                cy.contains('Agregar otro').click();
            }
        });
    });
});