describe("Login using qa-challenge codesubmit", () => {
    it("The site should work as expected for this user login", () =>{
        // cypress code for Standard_User
        cy.visit("https://qa-challenge.codesubmit.io/")
        cy.get('[data-test="username"]').type("standard_user");
        cy.get('[data-test="password"]').type("secret_sauce");
        cy.get('[data-test="login-button"]').click();  
    
    });
});    