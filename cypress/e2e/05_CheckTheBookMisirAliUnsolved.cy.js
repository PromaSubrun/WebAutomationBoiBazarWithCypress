/// <reference types ="cypress"/>

it('SiteVisit', function(){

    cy.visit('https://www.boibazar.com/')
    cy.get(':nth-child(2) > .dropdown-toggle').trigger('mouseover')
    cy.contains('হুমায়ূন আহমেদ').click()
    cy.get('#internal_search').type('মিসির আলি{enter}')
    cy.get('.col-sm-12 > .fa')
    cy.get('[href="https://www.boibazar.com/book/misir-ali-unsolved"] > .fixed-container-book > .group').click()


    })