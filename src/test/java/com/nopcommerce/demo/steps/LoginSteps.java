package com.nopcommerce.demo.steps;

import com.nopcommerce.demo.pages.HomePage;
import com.nopcommerce.demo.pages.LoginPage;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.junit.Assert;

public class LoginSteps {
    @When("^I click on login link$")
    public void iClickOnLoginLink() {
        new HomePage().clickOnLoginLink();
    }

    @Then("^I should see the welcome message$")
    public void iShouldSeeTheWelcomeMessage() {
        Assert.assertEquals("User is not navigate to welcome page", "Welcome, Please Sign In!", new LoginPage().getWelcomeText());
    }

    @And("^I click on login button$")
    public void iClickOnLoginButton() {
        new LoginPage().clickOnLoginButton();
    }

    @Then("^I should see the error message$")
    public void iShouldSeeTheErrorMessage() {
        Assert.assertEquals("User is not navigate to login page", "Login was unsuccessful. Please correct the errors and try again.\n" +
                "No customer account found", new LoginPage().getErrorMessageText());
    }

    @Then("^I should see the logout button$")
    public void iShouldSeeTheLogoutButton() {
        Assert.assertEquals("User is not naviagte to log out page", "Log out", new HomePage().getLogOutText());
    }

    @And("^I click on logout button$")
    public void iClickOnLogoutButton() {
        new HomePage().clickOnLogoutButton();
    }

    @Then("^I should see the log in button$")
    public void iShouldSeeTheLogInButton() {
        Assert.assertEquals("User is not naviagte to log in page", "Log in", new HomePage().getLogInText());
    }
}