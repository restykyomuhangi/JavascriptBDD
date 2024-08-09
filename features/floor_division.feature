Feature: Division

    Scenario: 2//2
        Given I start with 2
        When I floor divide it by 2
        Then I end up with 1

    Scenario: 3//2
        Given I start with 3
        When I floor divide it by 2
        Then I end up with 1
