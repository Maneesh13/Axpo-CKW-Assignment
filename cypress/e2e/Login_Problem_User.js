describe("Login using qa-challenge codesubmit", () => {
it("Images are not loading for this user.", () =>{
    // cypress code for Problem_User
    cy.visit("https://qa-challenge.codesubmit.io/")
    cy.get('[data-test="username"]').type("problem_user");
    cy.get('[data-test="password"]').type("secret_sauce");
    cy.get('[data-test="login-button"]').click();
});
});