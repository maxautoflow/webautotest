@register
Feature: Register

  Scenario: As a user, I register a new account

    Given I am on the login page
    And I click terms continue without accepting
    And I click register link
    And I enter email address
#    And click continue button
#    And I select title
#    And I enter first name
#    And I enter last name
#    And I enter mobile number
#    And I enter Postcode
#    And click save and continue button
##    And I see title your account info displayed
#    And I enter password
#    And I confirm password
