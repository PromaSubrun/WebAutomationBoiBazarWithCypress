/// <reference types ="cypress"/>

it('SiteVisit', function(){

    cy.visit('https://www.boibazar.com/')
    cy.get('.col-md-2 > .dropdown > .btn').trigger('mouseover')
    cy.get('.authorIDs > a > span').click()
    cy.get('.col-xs-7').type('মুহম্মদ জাফর ইকবাল{enter}')
    cy.get('.btn > a > img').click()
    
    })














    //nmm init -y
    //npm install cypress
    //npx cypress open
    //npx cypress run --reporter mochawesome
