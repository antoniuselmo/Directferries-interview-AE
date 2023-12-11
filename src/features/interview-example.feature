Feature: Interview test

    Scenario: A basic test to show set up
        Given I am on the homepage

    Scenario: Change site language to French
        Given I am on the homepage
        And I navigate to the Special Offers page
        When I change the language of the site to French
        Then the header should be in French

    Scenario: Change site language to Italian
        Given I am on the homepage
        And I navigate to the Special Offers page
        When I change the language of the site to Italian
        Then the header should be in Italian

    Scenario: Account Information Check
        Given I am on the Account page
        When I login as qatesting@directferries.com
        Then the Outbound details should be correct
        Then the Inbound details should be correct
        When I view Outbound details
        Then the Vehicle details should be correct
        Then the Passenger details should be correct
