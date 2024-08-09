Feature: Addition
    Scenario: 1 + 0
        Given I start with 1
        When I add 0
        Then I end up with 1
        
    Scenario: 1 + 2
        Given I start with 1
        When I add 2
        Then I end up with 3