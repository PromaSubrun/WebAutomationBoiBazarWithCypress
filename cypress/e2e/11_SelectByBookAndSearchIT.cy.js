/// <reference types ="cypress"/>

it('SiteVisit', function(){

    cy.visit('https://www.boibazar.com/')
    cy.get('.col-xs-7').type('ম্যাসেজ{enter}')
    cy.wait(6000)
    cy.get('.outer-div > .col-md-4 > .search1 > a > .row').click()
    

    })
