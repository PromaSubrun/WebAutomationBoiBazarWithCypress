/// <reference types ="cypress"/>

it('SiteVisit', function(){

    cy.visit('https://www.boibazar.com/')
    cy.get(':nth-child(2) > .dropdown-toggle').trigger('mouseover')

    })