Feature: equal to

    Scenario: 1 == 0
        Given I have the number 1
        When I check if it is equal to 0
        Then the result should be false
    Scenario: 2 == 2
        Given I have the number 2
        When I check if it is equal to 2
        Then the result should be true