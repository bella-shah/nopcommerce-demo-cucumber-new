@Regression
Feature: Login Test
  As a user I want to login into nop commerce website

  Scenario: User Should Navigate To Login Page SuccessFully
    Given I am on homepage
    When I click on login link
    Then I should see the welcome message


  Scenario: Verify The Error Message With InValid Credentials
    Given I am on homepage
    When I click on login link
    And I enter email "Kan1234@gmail.com"
    And I enter password "123456"
    And I click on login button
    Then I should see the error message


  Scenario: Verify That User Should Log In SuccessFully With Valid Credentials
    Given I am on homepage
    When I click on login link
    And I enter email "ram12@ymail.com"
    And I enter password "123456"
    And I click on login button
    Then I should see the logout button


  Scenario: VerifyThatUserShouldLogOutSuccessFully
    Given I am on homepage
    When I click on login link
    And I enter email "ram12@ymail.com"
    And I enter password "123456"
    And I click on login button
    And I click on logout button
    Then I should see the log in button