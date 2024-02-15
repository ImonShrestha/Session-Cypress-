import name_reservation from "../fixtures/name_reservation.json"

it('Name Reservation', () => {

    name_reservation.forEach((user) =>{
    cy.visit('http://172.27.1.149/login')
    // cy.fixture('logindata').then(user => {
    
        //language change
        cy.get('.flex > .border-gray-300').click({force:true});
        cy.get("#username").type(user.loginUser,{delay:50})
        cy.get("#password").type(user.loginPassword,{delay:50})
        cy.get(".rounded-sm").eq(4).click()
        cy.wait(1000)
        cy.get('.rounded-sm').click({force:true})
        cy.wait(1000)

        // Is your company part of a group
        cy.get('.capitalize').eq(1).click({force:true})

        // company type
        cy.get('.css-2lg52e').click({force:true})

        // For Non-Profit
        // cy.get('#react-select-2-option-0').click({force:true})

        // For Private >> Sole Proprietor
        // cy.get('#react-select-2-option-1').click({force:true})

        // For Private >> Multiple Proprietor >> Joint venture between nepali and foreign promoters
        // cy.get('#react-select-2-option-2').click({force:true})

        // For Private >> Multiple Proprietor >> All foreign promoters
        // cy.get('#react-select-2-option-3').click({force:true})

        // For Public >> Government >> All government
        // cy.get('#react-select-2-option-4').click({force:true})

        // For Public >> Non Government >> Joint Venture between Nepali and foreign company
        // cy.get('#react-select-2-option-5').click({force:true})

        // For Public >> Government >> Joint Venture Between government and Public
        cy.get('#react-select-2-option-6').click({force:true})

        // For Public >> Non Government >> All Nepali (Public)
        // cy.get('#react-select-2-option-7').click({force:true})

        // For Foreign >> Branch
        // cy.get('#react-select-2-option-8').click({force:true})

        // For Foreign >> Liaison
        // cy.get('#react-select-2-option-9').click({force:true})

        // For Private >> Multiple Proprietor >> All Nepali (Pvt.)
        // cy.get('#react-select-2-option-10').click({force:true})

        // companyname english
        cy.get('#englishName').type(user.CompanyNameEn,{delay:50})

        // companyname nepali
        cy.get('#nepaliName').type(user.CompanyNameNp,{delay:50})

        // continue button
        cy.wait(3000)
        cy.get('form > .items-start > .text-white').click({force:true})

        // name check
        cy.get('.border-green-700').click({force:true})
        cy.wait(2000)

        // Add objective
        cy.get('.font-normal').eq(10).click({force:true})
        cy.wait(3000)

        // select objectives
        cy.get(':nth-child(1) > :nth-child(1) > .px-1 > .cursor-pointer').click({force:true})
        cy.get(':nth-child(2) > :nth-child(1) > .px-1 > .cursor-pointer').click({force:true})

        // save
        cy.wait(3000)
        cy.get('.justify-end > .flex > .rounded-sm').click({force:true})
        cy.get('.rounded-sm').eq(11).click({force:true})

        // confirmation
        // cy.get('.gap-4 > .text-white').click({force:true})
        
})
})