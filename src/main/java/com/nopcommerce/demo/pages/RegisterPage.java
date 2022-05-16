package com.nopcommerce.demo.pages;

import com.nopcommerce.demo.utility.Utility;
import org.apache.log4j.LogManager;
import org.apache.log4j.Logger;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.CacheLookup;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class RegisterPage extends Utility {
    private static final Logger log = LogManager.getLogger(RegisterPage.class.getName());

    public RegisterPage() {
        PageFactory.initElements(driver, this);
    }

    @CacheLookup
    @FindBy(xpath = "//h1[text()='Register']")
    WebElement registerText;

    @CacheLookup
    @FindBy(xpath = "//input[@id='gender-male']")
    WebElement maleButton;

    @CacheLookup
    @FindBy(xpath = "//input[@id='gender-female']")
    WebElement femaleButton;

    @CacheLookup
    @FindBy(xpath = "//input[@id='FirstName']")
    WebElement fName;

    @CacheLookup
    @FindBy(xpath = "//input[@id='LastName']")
    WebElement lName;

    @CacheLookup
    @FindBy(xpath = "//body/div[6]/div[3]/div[1]/div[1]/div[1]/div[2]/form[1]/div[1]/div[2]/div[4]/div[1]/select[1]")
    WebElement dayBox;

    @CacheLookup
    @FindBy(xpath = "//body/div[6]/div[3]/div[1]/div[1]/div[1]/div[2]/form[1]/div[1]/div[2]/div[4]/div[1]/select[2]")
    WebElement monthBox;

    @CacheLookup
    @FindBy(xpath = "//body/div[6]/div[3]/div[1]/div[1]/div[1]/div[2]/form[1]/div[1]/div[2]/div[4]/div[1]/select[3]")
    WebElement yearBox;

    @CacheLookup
    @FindBy(xpath = "//input[@id='Email']")
    WebElement emailFill;

    @CacheLookup
    @FindBy(xpath = "//input[@id='Password']")
    WebElement passFill;

    @CacheLookup
    @FindBy(xpath = "//input[@id='ConfirmPassword']")
    WebElement confirmPassFill;

    @CacheLookup
    @FindBy(xpath = "//button[@id='register-button']")
    WebElement registerButton;

    @CacheLookup
    @FindBy(xpath = "//span[@id='FirstName-error']")
    WebElement firstNameText;

    @CacheLookup
    @FindBy(xpath = "//span[@id='LastName-error']")
    WebElement lastNameText;

    @CacheLookup
    @FindBy(xpath = "//span[@id='Email-error']")
    WebElement emailText;

    @CacheLookup
    @FindBy(xpath = "//span[@id='Password-error']")
    WebElement passwordText;

    @CacheLookup
    @FindBy(xpath = "//span[@id='ConfirmPassword-error']")
    WebElement passwordText1;

    @CacheLookup
    @FindBy(xpath = "//div[text()='Your registration completed']")
    WebElement registrationCompletedText;

    @CacheLookup
    @FindBy(xpath = "///a[text()='Continue']")
    WebElement continueButton;


    public String getRegistrationCompletedText(){
        log.info("getting registrationCompleted Text from "+registrationCompletedText.toString());
        return getTextFromElement(registrationCompletedText);
    }
    public void clickOnContinueButton(){
        clickOnElement(continueButton);
        log.info("Clicking on continueButton "+ continueButton.toString());
    }



    public String getRegisterText() {
        log.info("getting register Text from "+registerText.toString());
        return getTextFromElement(registerText);
    }
    public void clickOnMaleButton(){
        clickOnElement(maleButton);
        log.info("Clicking on maleButton "+ maleButton.toString());
    }
    public void clickOnFemaleButton(){
        clickOnElement(femaleButton);
        log.info("Clicking on femaleButton "+ femaleButton.toString());
    }

    public void sendFname(String fnn) {
        sendTextToElement(fName, fnn);
        log.info("Enter first name "+fnn+ " to first name field "+fName.toString());
    }

    public void sendLname(String lnn) {
        sendTextToElement(lName, lnn);
        log.info("Enter last name "+lnn+ " to last name field "+lName.toString());
    }


    public void sendEmailFill(String text) {
        sendTextToElement(emailFill, text);
        log.info("Enter email "+text+ " to email field "+emailFill.toString());
    }

    public void selectDay(String day){
        selectByVisibleTextFromDropDown(dayBox, day);
        log.info("Selecting day "+day+" from dropdown "+dayBox.toString());
    }
    public void selectMonth(String month){
        selectByVisibleTextFromDropDown(monthBox, month);
        log.info("Selecting month "+month+" from dropdown "+monthBox.toString());
    }
    public void selectYear(String year){
        selectByVisibleTextFromDropDown(yearBox, year);
        log.info("Selecting year "+year+" from dropdown "+yearBox.toString());
    }


    public void sendPassFill(String pass) {
        sendTextToElement(passFill, pass);
        log.info("Enter password "+pass+ " to password field "+passFill.toString());
    }

    public void sendConfirmPassFill(String repass) {
        sendTextToElement(confirmPassFill, repass);
        log.info("Enter confirm Password "+repass+ " to email field "+confirmPassFill.toString());
    }

    public void clickOnRegisterButton() {
        clickOnElement(registerButton);
        log.info("Clicking on registerButton "+ registerButton.toString());
    }
    public String getFirstNameText() {
        log.info("getting firstName Text "+firstNameText.toString());
        return getTextFromElement(firstNameText);
    }
    public String getLastNameText() {
        log.info("getting lastName Text "+lastNameText.toString());
        return getTextFromElement(lastNameText);
    }
    public String getEmailText() {
        log.info("getting email Text "+emailText.toString());
        return getTextFromElement(emailText);
    }
    public String getPasswordText() {
        log.info("getting password Text "+passwordText.toString());
        return getTextFromElement(passwordText);
    }
    public String getConfirmPasswordText() {
        log.info("getting password Text "+passwordText1.toString());
        return getTextFromElement(passwordText1);
    }



}