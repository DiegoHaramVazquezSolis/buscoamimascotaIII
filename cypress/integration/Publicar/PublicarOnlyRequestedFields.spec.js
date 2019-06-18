describe('Publicar only with requested fields', function() {
    beforeEach(() => {
        cy.fixture('mascotasPerdidas').as('publicar');
    });
    it('Publish a mascota perdida', function() {
        cy.visit('/mascotas/publicar');
        cy.wait(500);

        cy.get('#name')
            .type(this.publicar.mascotaPerdidaCamposObligatorios.name)
            .should('have.value', this.publicar.mascotaPerdidaCamposObligatorios.name);
        
        cy.get('#specie')
            .select(this.publicar.mascotaPerdidaCamposObligatorios.specie)
            .should('have.value', this.publicar.mascotaPerdidaCamposObligatorios.specie);
        
        cy.get('#description')
            .type(this.publicar.mascotaPerdidaCamposObligatorios.description)
            .should('have.value', this.publicar.mascotaPerdidaCamposObligatorios.description);
        
        cy.get('#lastSeen')
            .type(this.publicar.mascotaPerdidaCamposObligatorios.lastSeen)
            .should('have.value', this.publicar.mascotaPerdidaCamposObligatorios.lastSeen);

        this.publicar.mascotaPerdidaCamposObligatorios.contact.map((contact, index) => {
            cy.get(`.${contact.type}-${index}`).click();
            cy.get(`#contact-${index}`)
                .type(contact.content)
                .should('have.value', contact.content);
            if (this.publicar.mascotaPerdidaCamposObligatorios.contact.length - 1 !== index) {
                cy.contains('Agregar otro').click();
            }
        });
    });
});