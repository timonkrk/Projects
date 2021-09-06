/// <reference types="cypress" />

context('As an admin I would like to add a new product to shopping list', () => {
before(() => {
  cy.window().then((win) => {win.sessionStorage.clear()})
  cy.clearLocalStorage()
  cy.clearCookies()
  cy.visit('https://demo.saleor.io/dashboard/')
})

it('DASH-01/02 Add a new product', () => {
 cy.get('[data-test=email]').clear()
      .get('[data-test=email]').type('admin@example.com')
    .get('[data-test=password]').clear()
      .get('[data-test=password]').type('admin')
    .get('[data-test=submit]').click()
    .get(':nth-child(3) > [data-test=menu-item-label] > .jss115').click()
      .get('[aria-label="products"]').click()
    .get('[data-test=add-product]').click()
//general
    .get('.MuiCardContent-root > .MuiTextField-root.MuiFormControl-fullWidth > .MuiInputBase-root > .MuiInputBase-input').clear()
      .get('.MuiCardContent-root > .MuiTextField-root.MuiFormControl-fullWidth > .MuiInputBase-root > .MuiInputBase-input').type('sample product')
    .get('.ce-paragraph').type('description of sample product')
    //.get('.jss244 > .MuiFormControl-root > .MuiInputBase-root > .MuiInputBase-input').clear()
      //.get('.jss268 > .MuiFormControl-root > .MuiInputBase-root > .MuiInputBase-input').type('2')
//organize
    .get('[data-test=product-type] > .MuiFormControl-root > .MuiInputBase-root > div > .MuiSvgIcon-root').click()
      .get('#downshift-0-item-3').click()
    .get('[data-test=category] > .MuiFormControl-root > .MuiInputBase-root > div > .MuiSvgIcon-root').click()
      .get('#downshift-1-item-7').click()
    //.get('[data-test=collections] > .MuiFormControl-root > .MuiInputBase-root > .MuiInputBase-input').click()
      .get('#downshift-2-item-0').click()
//attributes
    .get('[data-test=attribute-value] > .jss307 > .MuiFormControl-root > .MuiInputBase-root > .MuiInputBase-input').click()
      .get('#downshift-3-item-1').click()
    .get(':nth-child(8) > [data-test=attribute-selector] > [data-test=button-attribute-selector] > .MuiButton-label').click()
      .get(':nth-child(1) > .jss398 [type="checkbox"]').not('[disabled]').check().should('be.checked')
      .get(':nth-child(2) > .jss398 [type="checkbox"]').not('[disabled]').check().should('be.checked')
      .get(':nth-child(4) > .jss398 [type="checkbox"]').not('[disabled]').check().should('be.checked')
      .get(':nth-child(7) > .jss398 [type="checkbox"]').not('[disabled]').check().should('be.checked')
      .get(':nth-child(8) > .jss398 [type="checkbox"]').not('[disabled]').check().should('be.checked')
      .get(':nth-child(11) > .jss398 [type="checkbox"]').not('[disabled]').check().should('be.checked')
      .get(':nth-child(19) > .jss398 [type="checkbox"]').not('[disabled]').check().should('be.checked')
      .get(':nth-child(20) > .jss398 [type="checkbox"]').not('[disabled]').check().should('be.checked')
      .get(':nth-child(25) > .jss398 [type="checkbox"]').not('[disabled]').check().should('be.checked')
    .get('.MuiDialogActions-root > .MuiButton-contained > .MuiButton-label > .MuiSvgIcon-root').click()
    cy.get('[data-test=button-bar-confirm]').click()



      // .get(':nth-child(1) > .jss398').click()

  })
})
