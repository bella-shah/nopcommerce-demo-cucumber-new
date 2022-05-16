package com.nopcommerce.demo.pages;

import com.nopcommerce.demo.utility.Utility;
import org.apache.log4j.LogManager;
import org.apache.log4j.Logger;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.CacheLookup;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class LoginPage extends Utility {
    private static final Logger log = LogManager.getLogger(LoginPage.class.getName());

    public LoginPage() {
        PageFactory.initElements(driver, this);
    }

    @CacheLookup
    @FindBy(xpath = "//input[@id='Email']")
    WebElement emailField;

    @CacheLookup
    @FindBy(xpath = "//input[@id='Password']")
    WebElement passwordField;

    @CacheLookup
    @FindBy(xpath = "//button[contains(text(),'Log in')]")
    WebElement loginButton;

    @CacheLookup
    @FindBy(xpath = "//h1[contains(text(),'Welcome, Please Sign In!')]")
    WebElement welcomeText;

    @CacheLookup
    @FindBy(xpath = "//body/div[6]/div[3]/div[1]/div[1]/div[1]/div[2]/div[1]/div[2]/form[1]/div[1]")
    WebElement errorMessage;

    public void enterEmail(String mail){
        sendTextToElement(emailField, mail);
        log.info("Enter email "+mail+ " to email field "+emailField.toString());
    }
    public void enterPassword(String pass){
        sendTextToElement(passwordField, pass);
        log.info("Enter Password "+pass+ " to email field "+passwordField.toString());
    }
    public void clickOnLoginButton(){
        clickOnElement(loginButton);
        log.info("Clicking on loginButton "+ loginButton.toString());
    }
    public String getWelcomeText(){
        log.info("getting welcome Text from "+welcomeText.toString());
        return getTextFromElement(welcomeText);
    }
    public String getErrorMessageText(){
        log.info("getting errorMessage from "+errorMessage.toString());
        return getTextFromElement(errorMessage);
    }

}