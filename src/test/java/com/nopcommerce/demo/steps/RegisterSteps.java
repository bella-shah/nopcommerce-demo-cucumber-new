package com.nopcommerce.demo.steps;

import com.nopcommerce.demo.pages.HomePage;
import com.nopcommerce.demo.pages.RegisterPage;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.junit.Assert;

public class RegisterSteps {
    @Given("^I am on homepage$")
    public void iAmOnHomepage() {

    }

    @When("^I click on register link$")
    public void iClickOnRegisterLink() {
        new HomePage().clickOnRegisterLink();
    }

    @Then("^I should see the register text$")
    public void iShouldSeeTheRegisterText() {
        Assert.assertEquals("Register Page is not displayed", "Register", new RegisterPage().getRegisterText());
    }

    @And("^I click on register button$")
    public void iClickOnRegisterButton() {
        new RegisterPage().clickOnRegisterButton();
    }

    @Then("^I should see the error message \"([^\"]*)\" in first name field$")
    public void iShouldSeeTheErrorMessageInFirstNameField(String firstNameText) {
        Assert.assertEquals("First Name is missing", firstNameText, new RegisterPage().getFirstNameText());
    }

    @And("^I should see the error message \"([^\"]*)\" in last name field$")
    public void iShouldSeeTheErrorMessageInLastNameField(String lastNameText) {
        Assert.assertEquals("Last Name is missing", lastNameText, new RegisterPage().getLastNameText());
    }

    @And("^I should see the error message \"([^\"]*)\" in email field$")
    public void iShouldSeeTheErrorMessageInEmailField(String emailFieldText) {
        Assert.assertEquals("Email field is missing", emailFieldText, new RegisterPage().getEmailText());
    }

    @And("^I should see the error message \"([^\"]*)\" in password field$")
    public void iShouldSeeTheErrorMessageInPasswordField(String passwordFieldText) {
        Assert.assertEquals("Password field is missing", passwordFieldText, new RegisterPage().getPasswordText());
    }

    @And("^I should see the error message \"([^\"]*)\" in confirm password field$")
    public void iShouldSeeTheErrorMessageInConfirmPasswordField(String confirmPassword) {
        Assert.assertEquals("Confirm password field is missing", confirmPassword, new RegisterPage().getConfirmPasswordText());
    }

    @And("^I click on female radio button$")
    public void iClickOnFemaleRadioButton() {
        new RegisterPage().clickOnFemaleButton();
    }

    @And("^I enter \"([^\"]*)\" in first name field$")
    public void iEnterInFirstNameField(String firstName) {
        new RegisterPage().sendFname(firstName);
    }

    @And("^I enter \"([^\"]*)\" in last name field$")
    public void iEnterInLastNameField(String lastName) {
        new RegisterPage().sendLname(lastName);
    }

    @And("^I select \"([^\"]*)\" day$")
    public void iSelectDay(String day) {
        new RegisterPage().selectDay(day);
    }

    @And("^I select \"([^\"]*)\" month$")
    public void iSelectMonth(String month) {
        new RegisterPage().selectMonth(month);
    }

    @And("^I select \"([^\"]*)\" year$")
    public void iSelectYear(String year) {
        new RegisterPage().selectYear(year);
    }

    @And("^I enter email \"([^\"]*)\"$")
    public void iEnterEmail(String email) {
        new RegisterPage().sendEmailFill(email);
    }

    @And("^I enter password \"([^\"]*)\"$")
    public void iEnterPassword(String password) {
        new RegisterPage().sendPassFill(password);
    }

    @And("^I enter confirm password \"([^\"]*)\"$")
    public void iEnterConfirmPassword(String confirmPassword) {
        new RegisterPage().sendConfirmPassFill(confirmPassword);
    }

    @Then("^I should see the registered message \"([^\"]*)\"$")
    public void iShouldSeeTheRegisteredMessage(String registerMessageText) {
        Assert.assertEquals("Register is not completed", registerMessageText, new RegisterPage().getRegistrationCompletedText());
    }
}