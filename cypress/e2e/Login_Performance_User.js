describe("Login using qa-challenge codesubmit", () => {
it("This user has high loading times. Does the site still work as expected?", () =>{
    // cypress code for Performance_Glitch_User
    cy.visit("https://qa-challenge.codesubmit.io/")
    cy.get('[data-test="username"]').type("performance_glitch_user");
    cy.get('[data-test="password"]').type("secret_sauce");
    cy.get('[data-test="login-button"]').click();
});
});
