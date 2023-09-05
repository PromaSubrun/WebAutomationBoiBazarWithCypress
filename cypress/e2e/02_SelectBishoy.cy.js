/// <reference types ="cypress"/>

it('SiteVisit', function(){

    cy.visit('https://www.boibazar.com/')
    cy.get('.nav > :nth-child(1) > .dropdown-toggle').trigger('mouseover')
    })