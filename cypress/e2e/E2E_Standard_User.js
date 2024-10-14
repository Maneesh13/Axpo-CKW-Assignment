describe("Login using qa-challenge codesubmit", () => {
    it("The site should work as expected for this user login", () =>{

        cy.visit("https://qa-challenge.codesubmit.io/")
        cy.get('[data-test="username"]').type("standard_user");
        cy.get('[data-test="password"]').type("secret_sauce");
        cy.get('[data-test="login-button"]').click();
        //Let's do shopping!
        cy.get('[data-test="add-to-cart-sauce-labs-fleece-jacket"]').click();
        cy.get('[data-test="add-to-cart-sauce-labs-onesie"]').click();
        cy.get('[data-test="shopping-cart-link"]').click();
        cy.get('[data-test="checkout"]').click();
        cy.get('[data-test="firstName"]').type("John");
        cy.get('[data-test="lastName"]').type("Smith");
        cy.get('[data-test="postalCode"]').type("29000");
        cy.get('[data-test="continue"]').click();
        cy.get('[data-test="finish"]').click();
    });
});