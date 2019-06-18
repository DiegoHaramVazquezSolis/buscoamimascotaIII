describe('Publicar complete', function() {
    beforeEach(() => {
        cy.fixture('mascotasPerdidas').as('publicar');
    });
    it('Publish a mascota perdida', function() {
        cy.visit('/mascotas/publicar');
        cy.wait(500);

        cy.get('#name')
            .type(this.publicar.mascotaPerdidaCompleta.name)
            .should('have.value', this.publicar.mascotaPerdidaCompleta.name);
        
        cy.get('#specie')
            .select(this.publicar.mascotaPerdidaCompleta.specie)
            .should('have.value', this.publicar.mascotaPerdidaCompleta.specie);
        
        cy.get(`#${this.publicar.mascotaPerdidaCompleta.sex}`).check({ force: true });

        cy.get('#description')
            .type(this.publicar.mascotaPerdidaCompleta.description)
            .should('have.value', this.publicar.mascotaPerdidaCompleta.description);
        
        cy.get('#lastSeen')
            .type(this.publicar.mascotaPerdidaCompleta.lastSeen)
            .should('have.value', this.publicar.mascotaPerdidaCompleta.lastSeen);

        if (this.publicar.mascotaPerdidaCompleta.haveId) {
            cy.get('#haveId').check({force: true});
        }

        this.publicar.mascotaPerdidaCompleta.contact.map((contact, index) => {
            cy.get(`.${contact.type}-${index}`).click();
            cy.get(`#contact-${index}`)
                .type(contact.content)
                .should('have.value', contact.content);
            if (this.publicar.mascotaPerdidaCompleta.contact.length - 1 !== index) {
                cy.contains('Agregar otro').click();
            }
        });
    });
});