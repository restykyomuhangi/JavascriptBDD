Feature: Modulus

     Scenario: 1%1
        Given I start with 1
        When I take the modulo of 1
        Then I end up with 0

    Scenario: 3%2
        Given I start with 3
        When I take the modulo of 2
        Then I end up with 1