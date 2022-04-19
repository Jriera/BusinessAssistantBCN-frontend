describe("This tests buttons functionality",()=>{
    it("Should visit home page",()=>{
        cy.visit("/")
    })
    it("Should visit the Business assistant",()=>{
        cy.get('.button-l').click()
        cy.get('[routerlink="/virtual-assistant"]').click();
        cy.get('[routerlink="/virtual-assistant"]').click();
        cy.get("button").should("have.text","guardar")
    })
})
