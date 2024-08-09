Feature: less than

    Scenario: 1<0
        Given I have the number 1
        When I check if it is less than 0
        Then the result should be false
    Scenario: 2<4
        Given I have the number 2
        When I check if it is less than 4
        Then the result should be true