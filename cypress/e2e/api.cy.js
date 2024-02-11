// it('synchasynch', () => {
//     cy.visit("http://172.27.1.149/login")

//      // language change
//      cy.get('.flex > .border-gray-300').click({force:true});
//      cy.get('.text-primary-24').then((letsCheck) => {
//         expect(letsCheck).to.have.text('Welcome to OCR e-Services')
//         expect(letsCheck).exist
//         expect(letsCheck.text().length).to.be.greaterThan(0);
//         expect(letsCheck.text().length).to.be.eq(25);
//         cy.get("#username").type('yatraonline')
//     .should('have.value','yatraonline');

//      })
//      cy.get("#password").then((passwordcheck)=>{
//         if (passwordcheck.hasClass('shadow-none')){
//             console.log("Class is present")
//         }
//         else{
//             console.log("class is missing")
//             }
//             expect(passwordcheck).exist
//             expect(passwordcheck).to.have.class("shadow-none")
//     }).type('Test@1234');
//     cy.get(".rounded-sm").eq(4).click()

// })
// OCR
// it('get', () => {
//     cy.request({
//         method:"GET",
//         url:'http://172.27.1.147:8888/external/api/company-registration/basic-info'})
//         .then((response)=>{
//         expect(response.status).to.eq(200)
//         expect(response.body.data.companyId).to.eq(171)
//         expect(response.body.data.companyNameEnglish).to.eq('Hilus Tech');
//         })
// });

// DOI PROJECT GET
it('get', () => {
    cy.request({
        method:"GET",
        url:'http://192.168.50.139:8090/core/app/init'})
        .then((response)=>{
        expect(response.status).to.eq(200)
        expect(response.body.data.fiscalYears.current.entryUserId).to.eq(1)
        })
});

//fifth session
it.only('post', () => {
//     const formData = new FormData();
//     formData.append('username', 'yatraonline');
//     formData.append('password', 'Test@1234');
//     formData.append('grant_type', 'password');
//     formData.append('rememberMe', 'false');

    
    cy.request({
        method:'POST',
        url:'http://172.27.1.147:8888/auth/api/ocr-login',
        form: true,
        headers: {
            'Content-Type': 'multipart/form-data',
            'authorization':'Basic b2NyLWFwcC1jbGllbnQ6T0NSQHBwMTIz',
            'Connection' : 'keep-alive',
            'Accept': 'application/json, text/plain, */*',
            "Referer":"http://172.27.1.148/",
            "User-Agent" : 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/121.0.0.0 Safari/537.36'
     
            
          },
    body:  {
        'username': 'imonv1',
        'password': 'Test@1234',
        'rememberMe': 'true',
        'grant_type': 'password'
       
    }
    })
});

it.only('Get', () => {
    cy.request({
        method: 'GET',
        url:'http://172.27.1.147:8888/internal/api/my-list/ANNUAL_REPORT/SUBMITTED',
        headers: {
            'Content-Type': 'multipart/form-data; boundary=----WebKitFormBoundary0uH9SaojKpmldzOs',
            'authorization':'Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX25hbWUiOiJpbW9udjEiLCJtb2JpbGVOdW1iZXIiOiI5ODM0NTM0NTU0Iiwicm9sZUlkIjo5LCJ1c2VySWQiOjYwMCwiY2xpZW50X2lkIjoib2NyLWFwcC1jbGllbnQiLCJhdWQiOlsiTUlHUkFUSU9OLVNFUlZJQ0UiLCJJTlRFR1JBVElPTi1TRVJWSUNFIiwiQVVUSC1TRVJWSUNFIiwiRVhURVJOQUwtU0VSVklDRSIsIk1FU1NBR0lORy1TRVJWSUNFIiwiQ09SRS1TRVJWSUNFIiwiSU5URVJOQUwtU0VSVklDRSIsIlJFUE9SVC1TRVJWSUNFIiwiRE9DVU1FTlQtU0VSVklDRSJdLCJtYWNoaW5lIjoiOTgzNDUzNDU1NCIsInNjb3BlIjpbInJlYWQiLCJ3cml0ZSJdLCJpc1Bhc3N3b3JkVXBkYXRlZCI6dHJ1ZSwiaXNQYXNzd29yZEV4cGlyZWQiOmZhbHNlLCJleHAiOjE3MDc2NjYyMTcsImp0aSI6ImEzZWM5MzBkLWE2YmItNGNhMC1hZWZiLTFiYTVmMTBkOWZkMSIsInVzZXJuYW1lIjoiaW1vbnYxIn0.LIXEikfxh9Ow2q8G6_SiX6Z9Zi6SoNcS-BeIOVkr63tna6z1A5FXqCcQCkZixjlaZVU3OyhTQTE-jSmweV8tpiV-_Su5R7kM0k9HvwTbhg0TrXqSmdQ9BzV4d5WsY2si9wLwjkZQOECf2uRgXXM-6ynkVgOK2H-81wy1N2wgvyE8AEU5Qz_NELaTLCsFeBA5KENaNdrYEXm8wGRwtfxsf5wVLDZ4vGrq_VtXLYMmFY68aq1w_OiS_71dNVkzVriJjePWpVN8WaS-2tDjmIKwFkcqrwyxV8TMjyT2XkQwhWzgf2N-Mq1NbdPltpexZbGHKA9qCmU_k7WcBToXVwaqKw',
            'accept': 'application/json, text/plain, */*',
           
     
            // Add any other headers if needed
          },
    }).then((response) =>{
        console.log(response)
    })
});





