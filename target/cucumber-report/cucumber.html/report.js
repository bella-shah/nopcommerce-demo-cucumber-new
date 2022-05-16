$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("computer.feature");
formatter.feature({
  "line": 2,
  "name": "Computer Test",
  "description": "As a user I want to build computer and add to cart into nop commerce website",
  "id": "computer-test",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@Regression"
    }
  ]
});
formatter.before({
  "duration": 3287677900,
  "status": "passed"
});
formatter.scenario({
  "line": 5,
  "name": "Verify User Should Navigate To Computer Page Successfully",
  "description": "",
  "id": "computer-test;verify-user-should-navigate-to-computer-page-successfully",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 6,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "I click on computer link",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "I should see the \"Computers\" text message computer page",
  "keyword": "Then "
});
formatter.match({
  "location": "RegisterSteps.iAmOnHomepage()"
});
formatter.result({
  "duration": 81628700,
  "status": "passed"
});
formatter.match({
  "location": "ComputerSteps.iClickOnComputerLink()"
});
formatter.result({
  "duration": 527188300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Computers",
      "offset": 18
    }
  ],
  "location": "ComputerSteps.iShouldSeeTheTextMessageComputerPage(String)"
});
formatter.result({
  "duration": 46196600,
  "status": "passed"
});
formatter.after({
  "duration": 697254000,
  "status": "passed"
});
formatter.before({
  "duration": 1871728400,
  "status": "passed"
});
formatter.scenario({
  "line": 10,
  "name": "Verify User Should Navigate To Desktops Page Successfully",
  "description": "",
  "id": "computer-test;verify-user-should-navigate-to-desktops-page-successfully",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 11,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 12,
  "name": "I click on computer link",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "I click on desktop link",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I should see the \"Desktops\" text message desktop page",
  "keyword": "Then "
});
formatter.match({
  "location": "RegisterSteps.iAmOnHomepage()"
});
formatter.result({
  "duration": 12900,
  "status": "passed"
});
formatter.match({
  "location": "ComputerSteps.iClickOnComputerLink()"
});
formatter.result({
  "duration": 514832400,
  "status": "passed"
});
formatter.match({
  "location": "ComputerSteps.iClickOnDesktopLink()"
});
formatter.result({
  "duration": 443023800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Desktops",
      "offset": 18
    }
  ],
  "location": "ComputerSteps.iShouldSeeTheTextMessageDesktopPage(String)"
});
formatter.result({
  "duration": 38900800,
  "status": "passed"
});
formatter.after({
  "duration": 666873800,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 17,
  "name": "Verify That User Should Build You Own Computer And Add Them To Cart Successfully",
  "description": "",
  "id": "computer-test;verify-that-user-should-build-you-own-computer-and-add-them-to-cart-successfully",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 18,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 19,
  "name": "I click on computer link",
  "keyword": "When "
});
formatter.step({
  "line": 20,
  "name": "I click on desktop link",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "I click on build computer link",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "I select \"\u003cprocessor\u003e\" processor",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "I select \"\u003chdd\u003e\" hdd button",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "I select \"\u003cram\u003e\" ram",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "I select \"\u003cos\u003e\" os",
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "I select \"\u003csoftware\u003e\" software",
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "I click on add to cart button",
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "I should see the \"The product has been added to your shopping cart\" success message",
  "keyword": "Then "
});
formatter.examples({
  "line": 30,
  "name": "",
  "description": "",
  "id": "computer-test;verify-that-user-should-build-you-own-computer-and-add-them-to-cart-successfully;",
  "rows": [
    {
      "cells": [
        "processor",
        "ram",
        "hdd",
        "os",
        "software"
      ],
      "line": 31,
      "id": "computer-test;verify-that-user-should-build-you-own-computer-and-add-them-to-cart-successfully;;1"
    },
    {
      "cells": [
        "2.2 GHz Intel Pentium Dual-Core E2200",
        "2 GB",
        "320 GB",
        "Vista Home [+$50.00]",
        "Microsoft Office [+$50.00]"
      ],
      "line": 32,
      "id": "computer-test;verify-that-user-should-build-you-own-computer-and-add-them-to-cart-successfully;;2"
    },
    {
      "cells": [
        "2.5 GHz Intel Pentium Dual-Core E2200 [+$15.00]",
        "4GB [+$20.00]",
        "400 GB [+$100.00]",
        "Vista Premium [+$60.00]",
        "Acrobat Reader [+$10.00]"
      ],
      "line": 33,
      "id": "computer-test;verify-that-user-should-build-you-own-computer-and-add-them-to-cart-successfully;;3"
    },
    {
      "cells": [
        "2.5 GHz Intel Pentium Dual-Core E2200 [+$15.00]",
        "8GB [+$60.00]",
        "320 GB",
        "Vista Home [+$50.00]",
        "Total Commander [+$5.00]"
      ],
      "line": 34,
      "id": "computer-test;verify-that-user-should-build-you-own-computer-and-add-them-to-cart-successfully;;4"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 1959787700,
  "status": "passed"
});
formatter.scenario({
  "line": 32,
  "name": "Verify That User Should Build You Own Computer And Add Them To Cart Successfully",
  "description": "",
  "id": "computer-test;verify-that-user-should-build-you-own-computer-and-add-them-to-cart-successfully;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 18,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 19,
  "name": "I click on computer link",
  "keyword": "When "
});
formatter.step({
  "line": 20,
  "name": "I click on desktop link",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "I click on build computer link",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "I select \"2.2 GHz Intel Pentium Dual-Core E2200\" processor",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "I select \"320 GB\" hdd button",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "I select \"2 GB\" ram",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "I select \"Vista Home [+$50.00]\" os",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "I select \"Microsoft Office [+$50.00]\" software",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "I click on add to cart button",
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "I should see the \"The product has been added to your shopping cart\" success message",
  "keyword": "Then "
});
formatter.match({
  "location": "RegisterSteps.iAmOnHomepage()"
});
formatter.result({
  "duration": 28300,
  "status": "passed"
});
formatter.match({
  "location": "ComputerSteps.iClickOnComputerLink()"
});
formatter.result({
  "duration": 552076900,
  "status": "passed"
});
formatter.match({
  "location": "ComputerSteps.iClickOnDesktopLink()"
});
formatter.result({
  "duration": 457818100,
  "status": "passed"
});
formatter.match({
  "location": "ComputerSteps.iClickOnBuildComputerLink()"
});
formatter.result({
  "duration": 811790600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2.2 GHz Intel Pentium Dual-Core E2200",
      "offset": 10
    }
  ],
  "location": "ComputerSteps.iSelectProcessor(String)"
});
formatter.result({
  "duration": 106937500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "320 GB",
      "offset": 10
    }
  ],
  "location": "ComputerSteps.iSelectHddButton(String)"
});
formatter.result({
  "duration": 213463800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2 GB",
      "offset": 10
    }
  ],
  "location": "ComputerSteps.iSelectRam(String)"
});
formatter.result({
  "duration": 86615800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Vista Home [+$50.00]",
      "offset": 10
    }
  ],
  "location": "ComputerSteps.iSelectOs(String)"
});
formatter.result({
  "duration": 2249200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Microsoft Office [+$50.00]",
      "offset": 10
    }
  ],
  "location": "ComputerSteps.iSelectSoftware(String)"
});
formatter.result({
  "duration": 3051000,
  "status": "passed"
});
formatter.match({
  "location": "ComputerSteps.iClickOnAddToCartButton()"
});
formatter.result({
  "duration": 53658500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "The product has been added to your shopping cart",
      "offset": 18
    }
  ],
  "location": "ComputerSteps.iShouldSeeTheSuccessMessage(String)"
});
formatter.result({
  "duration": 849163900,
  "status": "passed"
});
formatter.after({
  "duration": 679580500,
  "status": "passed"
});
formatter.before({
  "duration": 1842597000,
  "status": "passed"
});
formatter.scenario({
  "line": 33,
  "name": "Verify That User Should Build You Own Computer And Add Them To Cart Successfully",
  "description": "",
  "id": "computer-test;verify-that-user-should-build-you-own-computer-and-add-them-to-cart-successfully;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 18,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 19,
  "name": "I click on computer link",
  "keyword": "When "
});
formatter.step({
  "line": 20,
  "name": "I click on desktop link",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "I click on build computer link",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "I select \"2.5 GHz Intel Pentium Dual-Core E2200 [+$15.00]\" processor",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "I select \"400 GB [+$100.00]\" hdd button",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "I select \"4GB [+$20.00]\" ram",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "I select \"Vista Premium [+$60.00]\" os",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "I select \"Acrobat Reader [+$10.00]\" software",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "I click on add to cart button",
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "I should see the \"The product has been added to your shopping cart\" success message",
  "keyword": "Then "
});
formatter.match({
  "location": "RegisterSteps.iAmOnHomepage()"
});
formatter.result({
  "duration": 25300,
  "status": "passed"
});
formatter.match({
  "location": "ComputerSteps.iClickOnComputerLink()"
});
formatter.result({
  "duration": 505526700,
  "status": "passed"
});
formatter.match({
  "location": "ComputerSteps.iClickOnDesktopLink()"
});
formatter.result({
  "duration": 444309200,
  "status": "passed"
});
formatter.match({
  "location": "ComputerSteps.iClickOnBuildComputerLink()"
});
formatter.result({
  "duration": 722106700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2.5 GHz Intel Pentium Dual-Core E2200 [+$15.00]",
      "offset": 10
    }
  ],
  "location": "ComputerSteps.iSelectProcessor(String)"
});
formatter.result({
  "duration": 76204500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "400 GB [+$100.00]",
      "offset": 10
    }
  ],
  "location": "ComputerSteps.iSelectHddButton(String)"
});
formatter.result({
  "duration": 182890900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "4GB [+$20.00]",
      "offset": 10
    }
  ],
  "location": "ComputerSteps.iSelectRam(String)"
});
formatter.result({
  "duration": 83105900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Vista Premium [+$60.00]",
      "offset": 10
    }
  ],
  "location": "ComputerSteps.iSelectOs(String)"
});
formatter.result({
  "duration": 1606400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Acrobat Reader [+$10.00]",
      "offset": 10
    }
  ],
  "location": "ComputerSteps.iSelectSoftware(String)"
});
formatter.result({
  "duration": 2327300,
  "status": "passed"
});
formatter.match({
  "location": "ComputerSteps.iClickOnAddToCartButton()"
});
formatter.result({
  "duration": 55490300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "The product has been added to your shopping cart",
      "offset": 18
    }
  ],
  "location": "ComputerSteps.iShouldSeeTheSuccessMessage(String)"
});
formatter.result({
  "duration": 845246800,
  "status": "passed"
});
formatter.after({
  "duration": 672445200,
  "status": "passed"
});
formatter.before({
  "duration": 1827076400,
  "status": "passed"
});
formatter.scenario({
  "line": 34,
  "name": "Verify That User Should Build You Own Computer And Add Them To Cart Successfully",
  "description": "",
  "id": "computer-test;verify-that-user-should-build-you-own-computer-and-add-them-to-cart-successfully;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 18,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 19,
  "name": "I click on computer link",
  "keyword": "When "
});
formatter.step({
  "line": 20,
  "name": "I click on desktop link",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "I click on build computer link",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "I select \"2.5 GHz Intel Pentium Dual-Core E2200 [+$15.00]\" processor",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "I select \"320 GB\" hdd button",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "I select \"8GB [+$60.00]\" ram",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "I select \"Vista Home [+$50.00]\" os",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "I select \"Total Commander [+$5.00]\" software",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "I click on add to cart button",
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "I should see the \"The product has been added to your shopping cart\" success message",
  "keyword": "Then "
});
formatter.match({
  "location": "RegisterSteps.iAmOnHomepage()"
});
formatter.result({
  "duration": 33200,
  "status": "passed"
});
formatter.match({
  "location": "ComputerSteps.iClickOnComputerLink()"
});
formatter.result({
  "duration": 500372000,
  "status": "passed"
});
formatter.match({
  "location": "ComputerSteps.iClickOnDesktopLink()"
});
formatter.result({
  "duration": 443940300,
  "status": "passed"
});
formatter.match({
  "location": "ComputerSteps.iClickOnBuildComputerLink()"
});
formatter.result({
  "duration": 722523400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2.5 GHz Intel Pentium Dual-Core E2200 [+$15.00]",
      "offset": 10
    }
  ],
  "location": "ComputerSteps.iSelectProcessor(String)"
});
formatter.result({
  "duration": 83735900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "320 GB",
      "offset": 10
    }
  ],
  "location": "ComputerSteps.iSelectHddButton(String)"
});
formatter.result({
  "duration": 193064400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "8GB [+$60.00]",
      "offset": 10
    }
  ],
  "location": "ComputerSteps.iSelectRam(String)"
});
formatter.result({
  "duration": 82428900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Vista Home [+$50.00]",
      "offset": 10
    }
  ],
  "location": "ComputerSteps.iSelectOs(String)"
});
formatter.result({
  "duration": 1933900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Total Commander [+$5.00]",
      "offset": 10
    }
  ],
  "location": "ComputerSteps.iSelectSoftware(String)"
});
formatter.result({
  "duration": 1090400,
  "status": "passed"
});
formatter.match({
  "location": "ComputerSteps.iClickOnAddToCartButton()"
});
formatter.result({
  "duration": 57325200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "The product has been added to your shopping cart",
      "offset": 18
    }
  ],
  "location": "ComputerSteps.iShouldSeeTheSuccessMessage(String)"
});
formatter.result({
  "duration": 273530100,
  "status": "passed"
});
formatter.after({
  "duration": 672319300,
  "status": "passed"
});
formatter.uri("login.feature");
formatter.feature({
  "line": 2,
  "name": "Login Test",
  "description": "As a user I want to login into nop commerce website",
  "id": "login-test",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@Regression"
    }
  ]
});
formatter.before({
  "duration": 1851485000,
  "status": "passed"
});
formatter.scenario({
  "line": 5,
  "name": "User Should Navigate To Login Page SuccessFully",
  "description": "",
  "id": "login-test;user-should-navigate-to-login-page-successfully",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 6,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "I click on login link",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "I should see the welcome message",
  "keyword": "Then "
});
formatter.match({
  "location": "RegisterSteps.iAmOnHomepage()"
});
formatter.result({
  "duration": 34400,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.iClickOnLoginLink()"
});
formatter.result({
  "duration": 458106000,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.iShouldSeeTheWelcomeMessage()"
});
formatter.result({
  "duration": 30554900,
  "status": "passed"
});
formatter.after({
  "duration": 647247800,
  "status": "passed"
});
formatter.before({
  "duration": 1840419600,
  "status": "passed"
});
formatter.scenario({
  "line": 11,
  "name": "Verify The Error Message With InValid Credentials",
  "description": "",
  "id": "login-test;verify-the-error-message-with-invalid-credentials",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 12,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 13,
  "name": "I click on login link",
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "I enter email \"Kan1234@gmail.com\"",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I enter password \"123456\"",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I click on login button",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I should see the error message",
  "keyword": "Then "
});
formatter.match({
  "location": "RegisterSteps.iAmOnHomepage()"
});
formatter.result({
  "duration": 18400,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.iClickOnLoginLink()"
});
formatter.result({
  "duration": 471742600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Kan1234@gmail.com",
      "offset": 15
    }
  ],
  "location": "RegisterSteps.iEnterEmail(String)"
});
formatter.result({
  "duration": 75087600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "123456",
      "offset": 18
    }
  ],
  "location": "RegisterSteps.iEnterPassword(String)"
});
formatter.result({
  "duration": 66087000,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.iClickOnLoginButton()"
});
formatter.result({
  "duration": 396108700,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.iShouldSeeTheErrorMessage()"
});
formatter.result({
  "duration": 30665600,
  "status": "passed"
});
formatter.after({
  "duration": 666467300,
  "status": "passed"
});
formatter.before({
  "duration": 2629091600,
  "status": "passed"
});
formatter.scenario({
  "line": 20,
  "name": "Verify That User Should Log In SuccessFully With Valid Credentials",
  "description": "",
  "id": "login-test;verify-that-user-should-log-in-successfully-with-valid-credentials",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 21,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 22,
  "name": "I click on login link",
  "keyword": "When "
});
formatter.step({
  "line": 23,
  "name": "I enter email \"ram12@ymail.com\"",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "I enter password \"123456\"",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "I click on login button",
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "I should see the logout button",
  "keyword": "Then "
});
formatter.match({
  "location": "RegisterSteps.iAmOnHomepage()"
});
formatter.result({
  "duration": 21800,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.iClickOnLoginLink()"
});
formatter.result({
  "duration": 463074500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "ram12@ymail.com",
      "offset": 15
    }
  ],
  "location": "RegisterSteps.iEnterEmail(String)"
});
formatter.result({
  "duration": 69116000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "123456",
      "offset": 18
    }
  ],
  "location": "RegisterSteps.iEnterPassword(String)"
});
formatter.result({
  "duration": 71370100,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.iClickOnLoginButton()"
});
formatter.result({
  "duration": 668250900,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.iShouldSeeTheLogoutButton()"
});
formatter.result({
  "duration": 34335600,
  "status": "passed"
});
formatter.after({
  "duration": 670872600,
  "status": "passed"
});
formatter.before({
  "duration": 1928740600,
  "status": "passed"
});
formatter.scenario({
  "line": 29,
  "name": "VerifyThatUserShouldLogOutSuccessFully",
  "description": "",
  "id": "login-test;verifythatusershouldlogoutsuccessfully",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 30,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 31,
  "name": "I click on login link",
  "keyword": "When "
});
formatter.step({
  "line": 32,
  "name": "I enter email \"ram12@ymail.com\"",
  "keyword": "And "
});
formatter.step({
  "line": 33,
  "name": "I enter password \"123456\"",
  "keyword": "And "
});
formatter.step({
  "line": 34,
  "name": "I click on login button",
  "keyword": "And "
});
formatter.step({
  "line": 35,
  "name": "I click on logout button",
  "keyword": "And "
});
formatter.step({
  "line": 36,
  "name": "I should see the log in button",
  "keyword": "Then "
});
formatter.match({
  "location": "RegisterSteps.iAmOnHomepage()"
});
formatter.result({
  "duration": 14500,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.iClickOnLoginLink()"
});
formatter.result({
  "duration": 496234600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "ram12@ymail.com",
      "offset": 15
    }
  ],
  "location": "RegisterSteps.iEnterEmail(String)"
});
formatter.result({
  "duration": 73454400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "123456",
      "offset": 18
    }
  ],
  "location": "RegisterSteps.iEnterPassword(String)"
});
formatter.result({
  "duration": 70739400,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.iClickOnLoginButton()"
});
formatter.result({
  "duration": 804461000,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.iClickOnLogoutButton()"
});
formatter.result({
  "duration": 615979300,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.iShouldSeeTheLogInButton()"
});
formatter.result({
  "duration": 29770700,
  "status": "passed"
});
formatter.after({
  "duration": 669052600,
  "status": "passed"
});
formatter.uri("register.feature");
formatter.feature({
  "line": 2,
  "name": "Register Test",
  "description": "As a user I want to register into nop commerce website",
  "id": "register-test",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@Regression"
    }
  ]
});
formatter.before({
  "duration": 1835251300,
  "status": "passed"
});
formatter.scenario({
  "line": 5,
  "name": "Verify User Should Navigate To Register Page Successfully",
  "description": "",
  "id": "register-test;verify-user-should-navigate-to-register-page-successfully",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 6,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "I click on register link",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "I should see the register text",
  "keyword": "Then "
});
formatter.match({
  "location": "RegisterSteps.iAmOnHomepage()"
});
formatter.result({
  "duration": 22500,
  "status": "passed"
});
formatter.match({
  "location": "RegisterSteps.iClickOnRegisterLink()"
});
formatter.result({
  "duration": 469143600,
  "status": "passed"
});
formatter.match({
  "location": "RegisterSteps.iShouldSeeTheRegisterText()"
});
formatter.result({
  "duration": 29297900,
  "status": "passed"
});
formatter.after({
  "duration": 672444600,
  "status": "passed"
});
formatter.before({
  "duration": 1809469300,
  "status": "passed"
});
formatter.scenario({
  "line": 10,
  "name": "Verify That First Name, Last Name, Email Password and Confirm Password Fields are Mandatory",
  "description": "",
  "id": "register-test;verify-that-first-name,-last-name,-email-password-and-confirm-password-fields-are-mandatory",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 11,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 12,
  "name": "I click on register link",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "I click on register button",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I should see the error message \"First name is required.\" in first name field",
  "keyword": "Then "
});
formatter.step({
  "line": 15,
  "name": "I should see the error message \"Last name is required.\" in last name field",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I should see the error message \"Email is required.\" in email field",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I should see the error message \"Password is required.\" in password field",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "I should see the error message \"Password is required.\" in confirm password field",
  "keyword": "And "
});
formatter.match({
  "location": "RegisterSteps.iAmOnHomepage()"
});
formatter.result({
  "duration": 22900,
  "status": "passed"
});
formatter.match({
  "location": "RegisterSteps.iClickOnRegisterLink()"
});
formatter.result({
  "duration": 463246700,
  "status": "passed"
});
formatter.match({
  "location": "RegisterSteps.iClickOnRegisterButton()"
});
formatter.result({
  "duration": 66132000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "First name is required.",
      "offset": 32
    }
  ],
  "location": "RegisterSteps.iShouldSeeTheErrorMessageInFirstNameField(String)"
});
formatter.result({
  "duration": 39024500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Last name is required.",
      "offset": 32
    }
  ],
  "location": "RegisterSteps.iShouldSeeTheErrorMessageInLastNameField(String)"
});
formatter.result({
  "duration": 29583700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Email is required.",
      "offset": 32
    }
  ],
  "location": "RegisterSteps.iShouldSeeTheErrorMessageInEmailField(String)"
});
formatter.result({
  "duration": 28354600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Password is required.",
      "offset": 32
    }
  ],
  "location": "RegisterSteps.iShouldSeeTheErrorMessageInPasswordField(String)"
});
formatter.result({
  "duration": 27448700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Password is required.",
      "offset": 32
    }
  ],
  "location": "RegisterSteps.iShouldSeeTheErrorMessageInConfirmPasswordField(String)"
});
formatter.result({
  "duration": 28360900,
  "status": "passed"
});
formatter.after({
  "duration": 660886600,
  "status": "passed"
});
formatter.before({
  "duration": 1869500900,
  "status": "passed"
});
formatter.scenario({
  "line": 20,
  "name": "Verify That User Should Create Account Successfully",
  "description": "",
  "id": "register-test;verify-that-user-should-create-account-successfully",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 21,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 22,
  "name": "I click on register link",
  "keyword": "When "
});
formatter.step({
  "line": 23,
  "name": "I click on female radio button",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "I enter \"Bella\" in first name field",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "I enter \"Shah\" in last name field",
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "I select \"8\" day",
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "I select \"June\" month",
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "I select \"1986\" year",
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "I enter email \"ram123@ymail.com\"",
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "I enter password \"123456\"",
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "I enter confirm password \"123456\"",
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "I click on register button",
  "keyword": "And "
});
formatter.step({
  "line": 33,
  "name": "I should see the registered message \"Your registration completed\"",
  "keyword": "Then "
});
formatter.match({
  "location": "RegisterSteps.iAmOnHomepage()"
});
formatter.result({
  "duration": 17700,
  "status": "passed"
});
formatter.match({
  "location": "RegisterSteps.iClickOnRegisterLink()"
});
formatter.result({
  "duration": 471360800,
  "status": "passed"
});
formatter.match({
  "location": "RegisterSteps.iClickOnFemaleRadioButton()"
});
formatter.result({
  "duration": 54732800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Bella",
      "offset": 9
    }
  ],
  "location": "RegisterSteps.iEnterInFirstNameField(String)"
});
formatter.result({
  "duration": 76549800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Shah",
      "offset": 9
    }
  ],
  "location": "RegisterSteps.iEnterInLastNameField(String)"
});
formatter.result({
  "duration": 71315600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "8",
      "offset": 10
    }
  ],
  "location": "RegisterSteps.iSelectDay(String)"
});
formatter.result({
  "duration": 85478400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "June",
      "offset": 10
    }
  ],
  "location": "RegisterSteps.iSelectMonth(String)"
});
formatter.result({
  "duration": 82072400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1986",
      "offset": 10
    }
  ],
  "location": "RegisterSteps.iSelectYear(String)"
});
formatter.result({
  "duration": 79670500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "ram123@ymail.com",
      "offset": 15
    }
  ],
  "location": "RegisterSteps.iEnterEmail(String)"
});
formatter.result({
  "duration": 73572500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "123456",
      "offset": 18
    }
  ],
  "location": "RegisterSteps.iEnterPassword(String)"
});
formatter.result({
  "duration": 69137600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "123456",
      "offset": 26
    }
  ],
  "location": "RegisterSteps.iEnterConfirmPassword(String)"
});
formatter.result({
  "duration": 71751000,
  "status": "passed"
});
formatter.match({
  "location": "RegisterSteps.iClickOnRegisterButton()"
});
formatter.result({
  "duration": 713462500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Your registration completed",
      "offset": 37
    }
  ],
  "location": "RegisterSteps.iShouldSeeTheRegisteredMessage(String)"
});
formatter.result({
  "duration": 153969800,
  "status": "passed"
});
formatter.after({
  "duration": 652370100,
  "status": "passed"
});
});