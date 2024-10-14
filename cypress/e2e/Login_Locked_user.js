describe("Login using qa-challenge codesubmit", () => {
    it("User is locked out and should not be able to log in.", () =>{
        // cypress code for Locked_Out_User
        cy.visit("https://qa-challenge.codesubmit.io/")
        cy.get('[data-test="username"]').type("locked_out_user");
        cy.get('[data-test="password"]').type("secret_sauce");
        cy.get('[data-test="login-button"]').click();
    });
});
