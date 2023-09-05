/// <reference types ="cypress"/>

it('SiteVisit', function(){

    cy.visit('https://www.boibazar.com/')
    cy.get(':nth-child(2) > .dropdown-toggle').trigger('mouseover')
    cy.contains('হুমায়ূন আহমেদ').click()
    cy.get('#internal_search').type('মিসির আলি{enter}')
    cy.wait(6000)
    cy.get('.col-sm-12 > .fa')
    cy.wait(6000)
    cy.get('#addbtn757').click()


    })