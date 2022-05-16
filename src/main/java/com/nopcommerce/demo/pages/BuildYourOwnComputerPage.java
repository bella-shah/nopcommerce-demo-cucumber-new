package com.nopcommerce.demo.pages;

import com.nopcommerce.demo.utility.Utility;
import org.apache.log4j.LogManager;
import org.apache.log4j.Logger;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.CacheLookup;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class BuildYourOwnComputerPage extends Utility {
    private static final Logger log = LogManager.getLogger(BuildYourOwnComputerPage.class.getName());

    public BuildYourOwnComputerPage() {
        PageFactory.initElements(driver, this);
    }

    @CacheLookup
    @FindBy(xpath = "//h2[@class='product-title']//a[text()='Build your own computer']")
    WebElement buildComputerText;

    @CacheLookup
    @FindBy(xpath = "//select[@name='product_attribute_1']")
    WebElement processorDropDown;

    @CacheLookup
    @FindBy(xpath = "//select[@name='product_attribute_2']")
    WebElement ramDropDown;

    @CacheLookup
    @FindBy(xpath = "//input[@id='product_attribute_3_6']")
    WebElement hddRadio320GB;

    @CacheLookup
    @FindBy(xpath = "//input[@id='product_attribute_3_7']")
    WebElement hddRadio400GB;

    @CacheLookup
    @FindBy(xpath = "//input[@id='product_attribute_4_8']")
    WebElement osRadioVistaHome;

    @CacheLookup
    @FindBy(xpath = "//input[@id='product_attribute_4_9']")
    WebElement osRadioVistaPremium;

    @CacheLookup
    @FindBy(xpath = "//input[@id='product_attribute_5_10']")
    WebElement softwareMsOffice;

    @CacheLookup
    @FindBy(xpath = "//input[@id='product_attribute_5_11']")
    WebElement softwareAcrobatReader;

    @CacheLookup
    @FindBy(xpath = "//input[@id='product_attribute_5_12']")
    WebElement softwareTotalCommander;

    @CacheLookup
    @FindBy(xpath = "//button[@id='add-to-cart-button-1']")
    WebElement addToCartButton;

    @CacheLookup
    @FindBy(xpath = "//p[text()='The product has been added to your ']")
    WebElement greenText;

    @CacheLookup
    @FindBy(xpath = "//span[@class='close']")
    WebElement crossSign;

    @CacheLookup
    @FindBy(xpath = "//body/div[6]/div[3]/div[1]/div[3]/div[1]/div[2]/div[2]/div[2]/div[1]/div[1]/div[1]/div[1]/div[2]/h2[1]/a[1]")
    WebElement buildComputerLink;

    public String getBuildComputerText() {
        log.info("getting buildComputer Text " + buildComputerText.toString());
        return getTextFromElement(buildComputerText);
    }

    public void selectProcessor(String processor) {
        selectByVisibleTextFromDropDown(processorDropDown, processor);
        log.info("Selecting processor " + processor + " from dropdown " + processorDropDown.toString());
    }

    public void selectRam(String ram) {
        selectByVisibleTextFromDropDown(ramDropDown, ram);
        log.info("Selecting ram " + ram + " from dropdown " + ramDropDown.toString());
    }

    public void clickOnAddToCartButton() {
        clickOnElement(addToCartButton);
        log.info("Clicking on addToCartButton " + addToCartButton.toString());
    }

    public String getGreenText() {
        log.info("getting greenText " + greenText.toString());
        return getTextFromElement(greenText);
    }

    public void clickOnCrossSign() {
        clickOnElement(crossSign);
        log.info("Clicking on crossSign " + crossSign.toString());
    }

    public void clickOnBuildComputerLink() {
        clickOnElement(buildComputerLink);
        log.info("Clicking on buildComputer Link " + buildComputerLink.toString());
    }

    public void selectHddButton(String text) {
        if (text.equalsIgnoreCase("320 GB")) {
            mouseHoverToElement(hddRadio320GB);
            clickOnElement(hddRadio320GB);
            log.info("Selecting day " + text + " from dropdown " + hddRadio320GB.toString());
        }
        else if (text.equalsIgnoreCase("400 GB [+$100.00]")) {
            mouseHoverToElement(hddRadio400GB);
            clickOnElement(hddRadio400GB);
            log.info("Selecting day " + text + " from dropdown " + hddRadio400GB.toString());
        }
    }

    public void selectOs(String text) {
        if (text == "Vista Home [+$50.00]") {
            clickOnElement(osRadioVistaHome);
            log.info("Selecting day " + text + " from dropdown " + osRadioVistaHome.toString());
        } else if (text == "Vista Premium [+$60.00]") {
            clickOnElement(osRadioVistaPremium);
            log.info("Selecting day " + text + " from dropdown " + osRadioVistaPremium.toString());
        }
    }

    public void selectSoftware(String text) {
        if (text == "Microsoft Office [+$50.00]") {
            clickOnElement(softwareMsOffice);
            log.info("Selecting day " + text + " from dropdown " + softwareMsOffice.toString());
        } else if (text == "Acrobat Reader [+$10.00]") {
            clickOnElement(softwareAcrobatReader);
            log.info("Selecting day " + text + " from dropdown " + softwareAcrobatReader.toString());
        } else if (text == "Total Commander [+$5.00]") {
            clickOnElement(softwareTotalCommander);
            log.info("Selecting day " + text + " from dropdown " + softwareTotalCommander.toString());
        }
    }


}
