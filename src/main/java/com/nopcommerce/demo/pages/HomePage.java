package com.nopcommerce.demo.pages;

import com.nopcommerce.demo.utility.Utility;
import org.apache.log4j.LogManager;
import org.apache.log4j.Logger;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.CacheLookup;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class HomePage extends Utility {
    private static final Logger log = LogManager.getLogger(HomePage.class.getName());

    public HomePage() {
        PageFactory.initElements(driver, this);
    }

    @CacheLookup

    @FindBy(linkText = "Log in")
    WebElement loginLink;

    @CacheLookup
    @FindBy(linkText = "Register")
    WebElement registerLink;

    @CacheLookup
    @FindBy(xpath = "//ul[@class='top-menu notmobile']//a[contains(text(),'Computers')]")
    WebElement computerLink;

    @CacheLookup
    @FindBy(xpath = "//ul[@class='top-menu notmobile']//a[contains(text(),'Electronics')]")
    WebElement electronicsLink;

    @CacheLookup
    @FindBy(xpath = "//ul[@class='top-menu notmobile']//a[contains(text(),'Apparel')]")
    WebElement apparelLink;

    @CacheLookup
    @FindBy(xpath = "//ul[@class='top-menu notmobile']//a[contains(text(),'Digital downloads')]")
    WebElement digitalLink;

    @CacheLookup
    @FindBy(xpath = "//ul[@class='top-menu notmobile']//a[contains(text(),'Books')]")
    WebElement booksLink;

    @CacheLookup
    @FindBy(xpath = "//ul[@class='top-menu notmobile']//a[contains(text(),'Jewelry')]")
    WebElement jewelryLink;

    @CacheLookup
    @FindBy(xpath = "//ul[@class='top-menu notmobile']//a[contains(text(),'Gift Cards')]")
    WebElement gifCardsLink;

    @CacheLookup
    @FindBy(xpath = "//body/div[6]/div[1]/div[2]/div[1]/a[1]/img[1]")
    WebElement nopCommerceLogo;

    @CacheLookup
    @FindBy(xpath = "//a[contains(text(),'My account')]")
    WebElement myAccountLink;

    @CacheLookup
    @FindBy(linkText = "Log out")
    WebElement logOut;

    public void clickOnLoginLink(){
        clickOnElement(loginLink);
        log.info("Clicking on loginLink "+ loginLink.toString());
    }

    public void clickOnRegisterLink(){
        clickOnElement(registerLink);
        log.info("Clicking on registerLink "+ registerLink.toString());
    }
    public void clickOnMyAccountLink(){
        clickOnElement(myAccountLink);
        log.info("Clicking on myAccountLink "+ myAccountLink.toString());
    }

    public String getLogOutText(){
        log.info("getting logOut text "+logOut.toString());
        return getTextFromElement(logOut);
    }
    public void clickOnComputerLink(){
        clickOnElement(computerLink);
        log.info("Clicking on computerLink "+ computerLink.toString());
    }
    public void clickOnLogoutButton(){
        clickOnElement(logOut);
        log.info("Clicking on logOut "+ logOut.toString());
    }
    public String getLogInText(){
        log.info("getting LogInText "+loginLink.toString());
        return getTextFromElement(loginLink);
    }



}
