Feature: Test Automation Framework for Oranum

  Background:
    Given I open the homepage
    Then I verify page title contains "Oranum.com - The World`s #1 Most Visited Video Chat Community"

  Scenario: "View all live psychics" button is displayed on the home page.
    When I verify Live experts link is displayed
    When I click on Live Experts link
    Then I verify URL contains "/en/"
    Then I verify page title contains "Oranum.com - The World`s #1 Most Visited Video Chat Community"
    

  Scenario Outline:Searching for partial text should display only matching psychics
    When I search for "<ValuetoSearch>"
    Then I should see "<ValuetoSearch>" in the search results
    When I click on Search button
    Then I verify page title contains "<ValuetoSearch>"
    Then I verify the search results contain "<ValuetoSearch>"

    Examples:
      | ValuetoSearch |
      | Matt          |
      | Myst          |
      | ann           |
      | psy           |


  Scenario Outline: Searching for full text should show a specific psychic profile
      When I search for "<ValuetoSearch>"
      Then I should see "<ValuetoSearch>" in the search results
      When I click on Search button
      Then I verify page title contains "<ValuetoSearch>"
      Then I verify the search results contain "<ValuetoSearch>"
      Then I verify page title contains "<ValuetoSearch>"
      Then I verify URL contains "<ValuetoSearch>"
      Then I verify only one psychic is displayed in the search results

      Examples:
        | ValuetoSearch |
        | MattWarren    |
        | MysticMilena  |
        | EternalFlame  |

  Scenario: Open the livestream of any psychic and validate Sign up overlay
    When I click on Live Experts link
    Given I click on the first live psychic
    Then I verify URL contains "/chat"
    When I click on the Sign Up button
    Then I verify the Sign Up overlay is displayed

  Scenario Outline: On the home page, selecting different topics should display only matching psychics.
    When I open "<category>" link
    Then I verify page title contains "<category>"
    Examples:
      | category             |
      | astrology            |
      | tarot                |
      | clairvoyance         |
      | dream interpretation |
      | healing              |
      | crystals             |
      | mediumship           |
      | crystal ball         |
      | numerology           |
      | runes                |
      | palm reading         |
      | energy work          |





