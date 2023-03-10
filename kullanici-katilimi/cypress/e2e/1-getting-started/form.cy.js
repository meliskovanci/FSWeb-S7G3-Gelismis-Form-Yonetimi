describe("User Onboarding App", () => {
    beforeEach(() => {
       cy.visit("http://localhost:3000");
    })
 
    const firstNameInput = () => cy.get('input[name=firstname]');
    const lastNameInput = () => cy.get('input[name=lastname]');
    const emailInput = () => cy.get('input[name=email]');
    const passwordInput = () => cy.get('input[name=password]');
    const checkboxInput = () => cy.get('input[name=termsOfService]');
    const createUserBtn = () => cy.get('button[id="create-user"]');
    const firstNameErrorMsg = () => cy.get('div[id="firstname-error"]');
    const lastNameErrorMsg = () => cy.get('div[id="lastname-error"]');
    const emailErrorMsg = () => cy.get('div[id="email-error"]');
    const passwordErrorMsg = () => cy.get('div[id="password-error"]');
 
 
    it("the elements are showing properly", () => {
       firstNameInput().should("exist");
       lastNameInput().should("exist");
       emailInput().should("exist");
       passwordInput().should("exist");
       checkboxInput().should("exist");
       createUserBtn().should("exist");
       cy.contains("User Onboarding").should("exist");
       cy.contains("Create User").should("exist");
    })
 
    describe("Filling out the inputs and checking button accessibility", () => {
       it("can navigate to the site", () => {
          cy.url().should("include", "localhost");
       })
 
       it("create user button starts out disabled", () => {
          createUserBtn().should("be.disabled");
       })
 
       it("can type in a first name", () => {
          firstNameInput().should("have.value", "").type("Melis").should("have.value", "Melis");
       })
 
       it("can type in a last name", () => {
          lastNameInput().should("have.value", "").type("Kovancı").should("have.value", "Kovancı");
       })
 
       it("can type in an email", () => {
          emailInput().should("have.value", "").type("melis@gmail.com").should("have.value", "melis@gmail.com");
       })
 
       it("can type in an password", () => {
          passwordInput().should("have.value", "").type("123456").should("have.value", "123456");
       })
 
       it("can check the terms of service checkbox", () => {
          checkboxInput().check();
       })
 
       it("can enable the button when all inputs are filled out and satisfied", () => {
          firstNameInput().type("Bora");
          lastNameInput().type("Kovancı");
          emailInput().type("bora@gmail.com");
          passwordInput().type("111111");
          checkboxInput().check();
          createUserBtn().should("not.be.disabled");
       })
 
       it("can check to see that a user can submit the form and confirm that creating a user resets the input fields", () => {
          firstNameInput().type("Engin");
          lastNameInput().type("Kovancı");
          emailInput().type("xxx@gmail.com");
          passwordInput().type("xxxxxxxxx");
          checkboxInput().check();
          createUserBtn().click();
          firstNameInput().should("have.value", "");
          lastNameInput().should("have.value", "");
          emailInput().should("have.value", "");
          passwordInput().should("have.value", "");
          checkboxInput().should("have.value", "false");
          createUserBtn().should("be.disabled");
       })
 
       it("checks that once a the user button is clicked, a new user displays on the webpage", () => {
          cy.contains("Ali Veli").should("not.exist");
          firstNameInput().type("Ali");
          lastNameInput().type("Veli");
          emailInput().type("merhaba@gmail.com");
          passwordInput().type("qwerty");
          checkboxInput().check();
          createUserBtn().click();
          cy.contains("Ali Veli").should("exist");
       })
    })
 
    describe("Checking form validation when an input is empty or not satisfied upon the conditions.", () => {
       it("fails to create a user due to form validation", () => {
          firstNameErrorMsg().should("not.be.visible");
          lastNameErrorMsg().should("not.be.visible");
          emailErrorMsg().should("not.be.visible");
          passwordErrorMsg().should("not.be.visible");
          firstNameInput().type("Fatma");
          lastNameInput().type("Kara");
          firstNameInput().clear();
          lastNameInput().clear();
          emailInput().type("bardak");
          passwordInput().type("22222");
          checkboxInput().check();
          firstNameErrorMsg().should("be.visible");
          lastNameErrorMsg().should("be.visible");
          emailErrorMsg().should("be.visible");
          passwordErrorMsg().should("be.visible");
          createUserBtn().should("be.disabled");
       })
    })
 })