package com.nopcommerce.demo.steps;

import com.nopcommerce.demo.pages.BuildYourOwnComputerPage;
import com.nopcommerce.demo.pages.ComputerPage;
import com.nopcommerce.demo.pages.DesktopsPage;
import com.nopcommerce.demo.pages.HomePage;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.junit.Assert;

public class ComputerSteps {
    @When("^I click on computer link$")
    public void iClickOnComputerLink() {
        new HomePage().clickOnComputerLink();
    }


    @And("^I click on desktop link$")
    public void iClickOnDesktopLink() {
        new ComputerPage().clickOnDeskTopLink();
    }

    @And("^I click on build computer link$")
    public void iClickOnBuildComputerLink() {
        new BuildYourOwnComputerPage().clickOnBuildComputerLink();
    }


    @Then("^I should see the \"([^\"]*)\" text message computer page$")
    public void iShouldSeeTheTextMessageComputerPage(String computerText) {
        Assert.assertEquals("User is not on computer page", computerText, new ComputerPage().getComputerText());
    }

    @Then("^I should see the \"([^\"]*)\" text message desktop page$")
    public void iShouldSeeTheTextMessageDesktopPage(String desktopText) {
        Assert.assertEquals("User is not on desktop page", desktopText, new DesktopsPage().getDesktopText());
    }

    @And("^I select \"([^\"]*)\" processor$")
    public void iSelectProcessor(String processor) {
        new BuildYourOwnComputerPage().selectProcessor(processor);
    }

    @And("^I select \"([^\"]*)\" ram$")
    public void iSelectRam(String ram) {
        new BuildYourOwnComputerPage().selectRam(ram);
    }

    @And("^I select \"([^\"]*)\" hdd button$")
    public void iSelectHddButton(String hdd) {
        new BuildYourOwnComputerPage().selectHddButton(hdd);
    }


    @And("^I select \"([^\"]*)\" os$")
    public void iSelectOs(String os) {
        new BuildYourOwnComputerPage().selectOs(os);
    }

    @And("^I select \"([^\"]*)\" software$")
    public void iSelectSoftware(String software) {
        new BuildYourOwnComputerPage().selectSoftware(software);
    }

    @And("^I click on add to cart button$")
    public void iClickOnAddToCartButton() {
        new BuildYourOwnComputerPage().clickOnAddToCartButton();
    }

    @Then("^I should see the \"([^\"]*)\" success message$")
    public void iShouldSeeTheSuccessMessage(String addToCartMessage) {
        Assert.assertEquals("Product is not added to shopping cart", addToCartMessage, new BuildYourOwnComputerPage().getGreenText());

    }


}