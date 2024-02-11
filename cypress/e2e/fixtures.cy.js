// import logindata from "../fixtures/logindata.json"

// it('Login', () => {
//     cy.visit('http://172.27.1.149/login')

//      // language change
//      cy.get('.flex > .border-gray-300').click({force:true});

//     cy.fixture('logindata').then(user => {

//         cy.get("#username").type(user.username)
//         cy.get("#password").type(user.password)
//         cy.contains('Login').click()
// //       
//         })
// });


// it(logindata.case, () => {
//     cy.visit('http://172.27.1.149/login')
//     //  language change
//      cy.get('.flex > .border-gray-300').click({force:true});
//         cy.get("#username").type(logindata.username)
//         cy.get("#password").type(logindata.password)
//         cy.contains('Login').click()
// //          
// });

// Case:2
// describe('Test login with fixtures', () => {
//     it('Test login w multiple data', () => {
//         cy.visit('http://172.27.1.149/login')
// //         // language change
//         cy.get('.flex > .border-gray-300').click({force:true});
//         cy.fixture('multipleuser')
//         .then(user => {
//             user.forEach((user) => {
//                 cy.get("#username").clear().type(user.username)
//                 // cy.wait(10000);
//                 cy.get("#password").clear().type(user.password)
//                 // cy.wait(400);
//                 // cy.wait(10000);
//                 cy.get(".rounded-sm").eq(4).click()
//                 // cy.wait(10000);  
                    // cy.reload()  
//             })
//         })
//     }); 
// });

// import logindata2 from "../fixtures/logindata2.json"
// describe('Test login with fixtures', () => {
//        logindata2.forEach((user) => {
//             it(user.case, () => {
//                 cy.visit('http://172.27.1.149/login')
// //                  // language change
//                 cy.get('.flex > .border-gray-300').click({force:true});
//                 cy.get("#username").type(user.username)
//                 cy.get("#password").type(user.password)
//                 cy.wait(400)
//                    cy.contains('Login').click()             
//             })          
//         })
// })

// Case: 3
// describe('login with fixture data', () => {
//     it('verify login with invalid datas', () => {    
//         cy.visit('http://172.27.1.149/login')
//             // language change
//                 cy.get('.flex > .border-gray-300').click({force:true});
//         cy.fixture('logindata3')
//         .its('data2')
//         .then(user =>{
//             user.forEach((user) => {
//                 cy.get("#username").type(user.username)
//                 cy.get("#password").type(user.password)
//                 cy.wait(400)
//                 cy.contains('Login').click()
//                 cy.reload()
//             })
//          })
//     })
// });

// import logindata3 from "../fixtures/logindata3.json"
// describe('login with fixture data', () => {
//     logindata3.data.forEach(user => {
//     it(user.case, () => {
//         cy.visit('http://172.27.1.149/login')
//     // language change
//            cy.get('.flex > .border-gray-300').click({force:true});
//         cy.get("#username").type(user.username)
//         cy.get("#password").type(user.password)
//         cy.wait(400)
//         cy.contains('Login').click()
//         })
//     })
// });

// const csv = require('neat-csv');
// describe('Dynamic Test Case', () => {
//     it.only('Uses of then', () => {
//         // Read date from csv
//         cy.fixture('user.csv')
//         .then(csv)
//         .then((data) => {
//             data.forEach((userData) => {
//                 cy.visit('http://172.27.1.149/login')
//                 // language change
//            cy.get('.flex > .border-gray-300').click({force:true});
//                         cy.get("#username").type(userData.username)
//                         cy.get("#password").type(userData.password)
//                         cy.get(".rounded-sm").eq(4).click();
//             })
//         })     
//     });  
// });

import assertionfixtures from '../fixtures/assertionfixtures'

describe ('Assertions using fixtures', () => {
    assertionfixtures.forEach(user => {
        it(user.case, () => {
            cy.visit('http://172.27.1.149/login')
                // language change
           cy.get('.flex > .border-gray-300').click({force:true});
                        cy.get("#username").type(user.username)
                        cy.get("#password").type(user.password)
                        cy.get(".rounded-sm").eq(4).click();
                        cy.get(user.locator).should('contain', user.expectedOutcome)


        })
    })
});



    