import company_registration from "../fixtures/company_registration.json"

it('Company Registration (General Information)', () => {
    company_registration.forEach((user) =>{
    cy.visit('http://172.27.1.149/login')
    //language change
    cy.get('.flex > .border-gray-300').click({force:true});
    cy.get("#username").type(user.loginUserCr,{delay:50})
    cy.get("#password").type(user.loginPasswordCr,{delay:50})
     cy.get(".rounded-sm").eq(4).click()
    cy.wait(2000)

    // // Email Verification 
    // cy.get(':nth-child(2) > .items-start > .rounded-sm > .flex').click({force:true})
    // cy.get('.p-6 > .text-white').click({force:true})
    // cy.get('.mt-3 > .rounded-sm').click({force:true})

    // companyregistration
    cy.get(':nth-child(2) > .items-start > .rounded-sm > .flex').click();
    cy.wait(2000)

    //  general_info
    cy.get(".rounded-sm").eq(1).click();

    // province
    cy.wait(500);
    cy.get('.css-2lg52e').eq(0).click({force:true})
    cy.wait(500);
    cy.get('#react-select-2-option-0').click();

    // district
    cy.get(':nth-child(2) > :nth-child(1) > .css-1ue3l7a-container > .css-2lg52e').click();
    cy.wait(500);
    cy.get('#react-select-3-option-4').click();
    cy.wait(500);

    // localbody
    cy.get(':nth-child(3) > :nth-child(1) > .css-1ue3l7a-container > .css-2lg52e > .css-xqn7vz').click();
    cy.wait(500);
    cy.get('#react-select-4-option-5').click();
    cy.wait(500);

    // ward
    cy.get(':nth-child(4) > :nth-child(1) > .css-1ue3l7a-container > .css-2lg52e > .css-xqn7vz').click();
    cy.wait(500);
    cy.get('#react-select-5-option-1').click();
    cy.wait(500);

    // tolestreet
    cy.get('.cursor-pointer').eq(3).click({force:true})
    cy.get('.reset').click({force:true});
    cy.get('.glass').type('Naxal');
    cy.wait(1000);
    cy.get('.results > div').click({force:true});
    cy.get('.items-center.justify-end > .flex > .text-white').click({force:true});
    cy.wait(1000);
    // addressline1
    cy.get('#addressLine1').type(user.addressLine1);
    cy.wait(100);
    // phonenumber
    cy.get('#phoneNumber').type(user.phoneNumber);
    cy.wait(100);
    // faxnumber
    cy.get('#faxNumber').type(user.faxNumber);
    cy.wait(100);
    // poboxnumber
    cy.get('#poBoxNumber').type(user.poBoxNumber);

    // email
    cy.get('#officeEmail').type(user.officeEmail);

    // website
    cy.get('#website').type(user.website);
    cy.wait(500);

    // Company Registered in Another Government Body ?
    cy.get('.mb-4 > .grid > :nth-child(1) > :nth-child(1) > .css-1ue3l7a-container > .css-2lg52e').click({force:true});
    cy.wait(500);
    cy.get('#react-select-6-option-3').click();
    cy.get('#anotherGovernmentbodyRegistrationNumber').type('69');
    cy.get(':nth-child(3) > .grid > :nth-child(1) > :nth-child(1) > .css-1ue3l7a-container > .css-2lg52e').click()
    cy.get('#react-select-7-option-6').click();
    cy.wait(2000);
    // cy.get('.justify-end > .px-3').eq(0).click({ multiple: true });

    
        
})
})