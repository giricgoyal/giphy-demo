/// <reference types="cypress" />

describe('Giphy Demo', () => {
    it('Pagination', () => {
        cy.visit('localhost:3001')
        cy.get('[data-testid="grid-item"]').should('have.length', 40)
        cy.screenshot()

        cy.scrollTo('bottom')
        cy.get('[data-testid="grid-item"]').should('have.length', 60)
        cy.screenshot()
    })

    describe('Search', () => {
        it('should show search results', () => {
            cy.visit('localhost:3001')
            cy.screenshot()
            cy.get('[data-testid="input"]').type('happy')
            cy.screenshot()
        })
    })

    describe('Renditions', () => {
        it('should show the renditions in the modal and should be able to browse through the renditions', () => {
            cy.visit('localhost:3001')
            cy.get('[data-testid="modal"]').should('have.length', 0)
            cy.screenshot()

            cy.get('[data-testid="grid-item"]').eq(0).click()
            cy.get('[data-testid="modal"]').should('be.visible')
            cy.get('[data-testid="sidebar-item"]').eq(0).should('have.class', 'active')
            cy.screenshot()

            cy.get('[data-testid="sidebar"]').scrollTo('bottom')
            cy.screenshot()

            cy.get('[data-testid="sidebar-item"]').eq(10).click()
            cy.get('[data-testid="sidebar-item"]').eq(0).should('not.have.class', 'active')
            cy.get('[data-testid="sidebar-item"]').eq(10).should('have.class', 'active')
            cy.screenshot()

            cy.get('[data-testid="modal-close"').click()
            cy.get('[data-testid="modal"]').should('have.length', 0)
            cy.screenshot()
        })
    })
})
