// var i = 0;
// for (i = 0; i < 3 ; i++) {  
//     let found = false
//     const timeout = 10000
//     for(let i = 0; i<timeout && !found;i++){
//           if(
  
describe('template spec', () => {
  it('passes', () => {
    cy.visit('http://172.27.1.149/login')

     // language change
     cy.get('.flex > .border-gray-300').click({force:true});

    // login
    cy.get("#username").type("kuul")
    cy.get("#password").type("Test@1234")
    cy.get(".rounded-sm").eq(4).click()
    cy.wait(1000)

    cy.wait(1000)
    // companyregistration
    cy.get(':nth-child(2) > .items-start > .rounded-sm > .flex').click();
    cy.wait(1000)
    // general_info
    // cy.get(".rounded-sm").eq(1).click();
    // // cy.get(':nth-child(2) > .items-start > .rounded-sm > .flex > .font-normal').click();
    // // province
    // cy.wait(1000);
    // // cy.get('.css-2lg52e').eq(0).click({force:true})
    // cy.get('.mb-5 > .grid > :nth-child(1) > :nth-child(1) > .css-1ue3l7a-container > .css-2lg52e').click({force:true});
    // cy.wait(2000);
    // cy.get('#react-select-2-option-0').click();
    // // district
    // cy.get(':nth-child(2) > :nth-child(1) > .css-1ue3l7a-container > .css-2lg52e').click();
    // cy.wait(2000);
    // cy.get('#react-select-3-option-4').click();
    // // localbody
    // cy.get(':nth-child(3) > :nth-child(1) > .css-1ue3l7a-container > .css-2lg52e > .css-xqn7vz').click();
    // cy.get('#react-select-4-option-5').click();
    // // ward
    // cy.get(':nth-child(4) > :nth-child(1) > .css-1ue3l7a-container > .css-2lg52e > .css-xqn7vz').click();
    // cy.get('#react-select-5-option-1').click();
    // // tolestreet
    // cy.get('.w-full').eq(23).click({force:true});
    // cy.wait(2000)
    // cy.get('.items-center.justify-end > .flex > .text-white').click({force:true});
    // // addressline1
    // cy.get('#addressLine1').type('Kathmandu');
    // // phonenumber
    // cy.get('#phoneNumber').type('9823765374');
    // // faxnumber
    // cy.get('#faxNumber').type('865389646');
    // // poboxnumber
    // cy.get('#poBoxNumber').type('7859352573');
    // // email
    // cy.get('#officeEmail').type('testocr@yopmail.com');
    // // website
    // cy.get('#website').type('https://abce.com');
    // cy.wait(1000);
    // // Company Registered in Another Government Body ?
    // cy.get('.mb-4 > .grid > :nth-child(1) > :nth-child(1) > .css-1ue3l7a-container > .css-2lg52e').click({force:true});
    // cy.wait(1000);
    // cy.get('#react-select-6-option-3').click();
    // cy.get('#anotherGovernmentbodyRegistrationNumber').type('69');
    // cy.get(':nth-child(3) > .grid > :nth-child(1) > :nth-child(1) > .css-1ue3l7a-container > .css-2lg52e').click()
    // cy.get('#react-select-7-option-6').click();
    // cy.wait(10000);
    // cy.get('.justify-end > .px-3').eq(0).click({ multiple: true });

  

    // // companybranch
    // cy.wait(10000);
    // cy.get('.pb-3 > .text-white > .flex > .font-normal').click({force:true});
      
    // // Objectivedetails
    // cy.get(':nth-child(1) > :nth-child(4) > .items-start > :nth-child(2) > .mr-4 > .flex > .text-gray-56').click();
    // cy.wait(1000)
    // cy.get(':nth-child(4) > .cursor-pointer').type('add');
    // cy.get('[data-testid="dialog-element"] > .justify-end > .text-white').click();
    // cy.get('.justify-end > .rounded-sm').click({force:true});
    // cy.wait(10000);

    // // capitalstructure
    // cy.wait(1000)
    // // Authorizedstructure
    // cy.get('.border-b > :nth-child(1) > :nth-child(1) > .cursor-pointer').type('90000000');
    // // IssuedCapital
    // cy.get(':nth-child(5) > :nth-child(1) > :nth-child(1) > .cursor-pointer').type('80000000');
    // // paid_up_capital
    // cy.get(':nth-child(8) > :nth-child(1) > :nth-child(1) > .cursor-pointer').type('60000000');
    // cy.wait(10000)
    // cy.get('.rounded-sm').eq(10).click();

    // // Company_Shareholder
    // cy.get('.items-center.justify-between > .rounded-sm').click();
    // cy.get('#nidNumber').type('1938345534')
    // cy.get('#fullNameEn').type('Sarowar Malla')
    // cy.get('#fullNameNp').type('सरोवर मल्ल')
    // cy.get('#fatherName').type('Bhim Malla')
    // cy.get('#fatherNameinNepali').type('भीम मल्ल')
    // cy.get('#motherName').type('Bhumi Malla')
    // cy.get('#motherNameinNepali').type('भूमि मल्ल')
    // cy.get('#grandFatherName').type('Anil Malla')
    // cy.get('#grandFatherNameinNepali').type('अनिल मल्ल')
    // cy.get('.pl-2 > .flex > svg > polyline').click({force:true})
    // cy.get(':nth-child(2) > .relative > .font-normal').click({force:true})
    // cy.get(':nth-child(2) > .relative > .font-normal').should('exist');
    // cy.get(':nth-child(2) > .relative > .cursor-pointer').click({force:true})
    // cy.get(':nth-child(2) > .relative > .cursor-pointer').should('exist');
    // cy.get('.py-1').eq(110).should('exist')
    // cy.get('.py-1').eq(110).click({force:true})
    // cy.get(':nth-child(4) > :nth-child(5) > .text-center').should('exist');
    // cy.get(':nth-child(4) > :nth-child(5) > .text-center').click({force:true})
    // cy.get('.h-screen > .justify-end > :nth-child(2)').click({force:true})

    // Edit
    
    // cy.get(':nth-child(4) > .justify-end > .text-white').click({force:true})
    cy.wait(1000);
    cy.get('.text-gray-700').click({force:true})
   
    // legal
    cy.get('.text-gray-700').click({force:true})

    cy.get(':nth-child(4) > .justify-end > .text-white').click({force:true})
    cy.get(':nth-child(12) > :nth-child(1) > .css-1ue3l7a-container > .css-2lg52e > .css-xqn7vz').click({force:true})




    // cy.wait(1000)
    // cy.get('#react-select-5-option-0').click({force:true})
    // cy.get('#identificationDocNo').type('2050111903')
    // cy.get(':nth-child(14) > :nth-child(1) > .cursor-pointer.undefined > .cursor-pointer').click({force:true})
    // cy.get(':nth-child(2) > .relative > .font-normal').click({force:true})
    // cy.wait(1000)
    // cy.get('.pl-0 > :nth-child(4)').click({force:true})
    // // // Identification issue date
    // cy.get(':nth-child(4) > :nth-child(2) > .text-center').click({force:true})
    // // // Issue District
    // cy.get(':nth-child(15) > :nth-child(1) > .css-1ue3l7a-container > .css-2lg52e').click({force:true})
    // cy.get('#react-select-2-option-34').click({force:true})
    // // // Pan Number
    // cy.get('#panNo').type('19543763443')
    // // // Investment Source
    // cy.get(':nth-child(17) > :nth-child(1) > .css-1ue3l7a-container > .css-2lg52e').click({force:true})
    // cy.get('#react-select-3-option-2').click({force:true})
    // // // Investment Amount
    // cy.get('#investmentAmount').type('20000000')
    // // // shareholder type
    // cy.get('#position-DIRECTOR').click({force:true})
    // // Number of Shares 
    // cy.get('#noOfShares').type('200000')
    // // File Upload 
    // // cy.get('.text-center').eq(5).selectFile("cypress/fixtures/signature.png")
    // // cy.get('.justify-start').eq(33).attachFile("/pancard.png").click({force:true})
    // cy.get('.justify-start').eq(33).attachFile("/signature.png", { subjectType: 'drag-n-drop' })

    cy.wait(1000)
    // general info next

    cy.get('.mb-6 > .justify-end > .rounded-sm').click({force:true})
    cy.wait(1000)

    
    // Contact Information
    // Province
    // cy.get(':nth-child(1) > :nth-child(1) > .css-1ue3l7a-container > .css-2lg52e').click({force:true})
    // cy.get('#react-select-6-option-0').click({force:true})
    // // District
    // cy.get(':nth-child(2) > :nth-child(1) > .css-1ue3l7a-container > .css-2lg52e').click({force:true})
    // cy.get('#react-select-7-option-4').click({force:true})
    // // Local Body
    // cy.get(':nth-child(3) > :nth-child(1) > .css-1ue3l7a-container > .css-2lg52e').click({force:true})
    // cy.get('#react-select-8-option-5').click({force:true})
    // // Ward Number
    // cy.get(':nth-child(4) > :nth-child(1) > .css-1ue3l7a-container > .css-2lg52e').click({force:true})
    // cy.get('#react-select-9-option-1').click({force:true})
    // // Address line1
    // cy.get('#address').type('Naxal')
    // // checkbox
    // cy.get('#sameAsPermanent-sameAsPermanent').click({force:true})
    // // phone_number
    // cy.get('#phone').type('9818536853')
    // // House number
    // cy.get('#houseNo').type('Z-69')
    // // Fax number
    // cy.get('#fax').type('7545578756')
    // // Box number
    // cy.get('#poBox').type('644755699')
    // // email
    // cy.get('#email').type('testocr@yopmail.com')
    // // website
    // cy.get('#website').type('https://abce.com')
    // next button
    cy.get('.mb-6 > .justify-end > .text-white').click({force:true})

    // witness_page
    // cy.get('.my-2 > .rounded-sm').click({force:true})
    // // Full_Name
    // cy.get('#fullName').type('Bhim Malla')
    // // Province
    // cy.get(':nth-child(2) > :nth-child(1) > .css-1ue3l7a-container > .css-2lg52e').click({force:true})
    // cy.get('#react-select-15-option-0').click({force:true})
    // // District
    // cy.get(':nth-child(3) > :nth-child(1) > .css-1ue3l7a-container > .css-2lg52e').click({force:true})
    // cy.get('#react-select-16-option-4').click({force:true})
    // // localbody
    // cy.get(':nth-child(4) > :nth-child(1) > .css-1ue3l7a-container > .css-2lg52e').click({force:true})
    // cy.get('#react-select-17-option-5').click({force:true})
    // // ward no
    // cy.get(':nth-child(5) > :nth-child(1) > .css-1ue3l7a-container > .css-2lg52e').click({force:true})
    // cy.get('#react-select-18-option-0').click({force:true})
    // cy.get('#address').type('Naxal')
    // // identification document type
    // cy.get(':nth-child(7) > :nth-child(1) > .css-1ue3l7a-container > .css-2lg52e').click({force:true})
    // cy.get('#react-select-19-option-4').click({force:true})
    // // identification doc number
    // cy.get('#identificationDocNo').type('206029384765')
    // // phone no
    // cy.get('#contactNo').type('9812458738')
    // // email
    // cy.get('#email').type('testocr@yopmail.com')
    // // save
    // cy.get('.mt-10 > .text-white').click({force:true})

    // upload
    cy.wait(1000)
    cy.get(':nth-child(6) > .justify-end > .py-2').attachFile('/passport.jpg', { subjectType: 'drag-n-drop' })
    // cy.get('#file').selectFile
  


    
    

    


  

    
    

  })
})