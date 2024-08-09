Feature: Greater than

    Scenario: 1>0
        Given I have the number 1
        When I check if it is greater than 0
        Then the result should be true
    Scenario: 2>4
        Given I start with 2
        When I check if it is greater than 4
        Then the result should be false