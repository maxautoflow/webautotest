@login
Feature: Login

  Scenario Outline: As a user, I can log in

    Given I am on the login page
    And I click terms continue without accepting
    When I login with <username> and <password>
#    Then I should see a flash message saying <message>

    Examples:
      | username | password             | message                        |
      | maxtestinfo@gmail.com | Today01 | Your username is invalid!      |
