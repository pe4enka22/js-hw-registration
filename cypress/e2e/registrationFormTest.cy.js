describe('register with valid data', () => {
  it('passes', () => {
    cy.log('Open registration form');
    cy.visit('https://automationteststore.com/')
    cy.get('#customer_menu_top').click();
    cy.get('[title=Continue]').click();

    cy.log('Fill in the fields Personal Details fields');
    cy.get('#AccountFrm_firstname').type('FirstName11');
    cy.get('#AccountFrm_firstname').should('have.prop', 'value', 'FirstName11');
    cy.get('#AccountFrm_lastname').type('LastName11');
    cy.get('#AccountFrm_lastname').should('have.prop', 'value', 'LastName11');
    cy.get('#AccountFrm_email').type('eMail251@test.test');
    cy.get('#AccountFrm_email').should('have.prop', 'value', 'eMail251@test.test');
    cy.get('#AccountFrm_telephone').type('2345678987697');
    cy.get('#AccountFrm_telephone').should('have.prop', 'value', '2345678987697');
    cy.get('#AccountFrm_fax').type('+1(234)5645445');
    cy.get('#AccountFrm_fax').should('have.prop', 'value', '+1(234)5645445');

    cy.log('Fill in the Your Address fields');
    cy.get('#AccountFrm_company').type('Company Test122');
    cy.get('#AccountFrm_company').should('have.prop', 'value', 'Company Test122');
    cy.get('#AccountFrm_address_1').type('Address111');
    cy.get('#AccountFrm_address_1').should('have.prop', 'value', 'Address111');
    cy.get('#AccountFrm_address_2').type('Address222');
    cy.get('#AccountFrm_address_2').should('have.prop', 'value', 'Address222');
    cy.get('#AccountFrm_city').type('Kyiv');
    cy.get('#AccountFrm_city').should('have.prop', 'value', 'Kyiv');
    cy.get('#AccountFrm_postcode').type('012347');
    cy.get('#AccountFrm_postcode').should('have.prop', 'value', '012347');
    cy.get('#AccountFrm_country_id').select('Ukraine');
    cy.get('#AccountFrm_country_id').should('have.prop', 'value', '220');
    cy.get('#AccountFrm_zone_id').select('Kyiv');
    cy.get('#AccountFrm_zone_id').should('have.prop', 'value', '3490');


    cy.log('Fill in the Login Details fields');
    cy.get('#AccountFrm_loginname').type('testikkk212');
    cy.get('#AccountFrm_loginname').should('have.prop', 'value', 'testikkk212');
    cy.get('#AccountFrm_password').type('Pass123');
    cy.get('#AccountFrm_password').should('have.prop', 'value', 'Pass123');
    cy.get('#AccountFrm_confirm').type('Pass123');
    cy.get('#AccountFrm_confirm').should('have.prop', 'value', 'Pass123');

    cy.log('Fill in the Newsletter');
    cy.get('#AccountFrm_newsletter0').click();
    cy.get('#AccountFrm_newsletter0').should('be.checked');
    cy.get('#AccountFrm_agree').check();
    cy.get('#AccountFrm_agree').should('be.checked');

    cy.log('Submit form and check results');
    cy.get('[title=Continue]').click();
    cy.get('.maintext').should('have.prop', 'textContent', ' Your Account Has Been Created!');
  })
})