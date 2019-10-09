/// <reference types="Cypress" />

describe('Widgets Testing > ', () => {
    beforeEach(() => {
      cy.visit('/')
    })

    it('Create new microblog', () => {
        cy.get('#microblog-text').type('Welcome Buddy!');
        cy.get('#submit-microblog').click();
    });

    it('Check the accordion functionality', () => {
        // collapse
        cy.get('#draggable-col_1-accordion').find('.header').click({ multiple: true });
    });

    it('Check the widget collapse and expand functionality', () => {
        // collapse
        cy.get('#draggable-col_1-events').find('.collapse-icon').click();
        // wait for a second
        cy.wait(1000);
        // expand it again
        cy.get('#draggable-col_1-events').find('.collapse-icon').click();
    });

    it('Check the widget hide functionality', () => {
        // make sure the widget is visible
        cy.get('#draggable-col_1-events').should('be.visible');

        // hide the widget
        cy.get('#draggable-col_1-events').find('.hide-icon').click();

        // make sure the widget is NOT visible
        cy.get('#draggable-col_1-events').should('not.visible');
    });
});