describe("Login using qa-challenge codesubmit", () => {
    it("it should be able performance_glitch_user to login", () =>{
        // cypress code
        cy.visit("https://qa-challenge.codesubmit.io/")
        cy.get('[data-test="username"]').type("performance_glitch_user");
        cy.get('[data-test="password"]').type("secret_sauce");
        cy.get('[data-test="login-button"]').click();
        cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click();
        cy.get('[data-test="add-to-cart-sauce-labs-bike-light"]').click();
        cy.get('[data-test="add-to-cart-sauce-labs-bolt-t-shirt"]').click();
        cy.get('[data-test="add-to-cart-sauce-labs-fleece-jacket"]').click();
        cy.get('[data-test="add-to-cart-sauce-labs-onesie"]').click();
        cy.get('[data-test="add-to-cart-test.allthethings()-t-shirt-(red)"]').click();
        cy.get('[data-test="shopping-cart-badge"]').click();
        // Remove the items from cart
        cy.get('[data-test="remove-sauce-labs-backpack"]').click();
        cy.get('[data-test="remove-sauce-labs-bike-light"]').click();
        cy.get('[data-test="remove-sauce-labs-bolt-t-shirt"]').click();
        cy.get('[data-test="remove-sauce-labs-fleece-jacket"]').click();
        cy.get('[data-test="remove-sauce-labs-onesie"]').click();
        cy.get('[data-test="remove-test.allthethings()-t-shirt-(red)"]').click();
        cy.get('[data-test="continue-shopping"]').click();
        cy.get('.select_container').click();
          
    });
});




