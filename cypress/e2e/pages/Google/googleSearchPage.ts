import { googleResultsPage } from "./googlePage";
import googleUI from "../../interfaces/Google/googleUI";
import { CommonPage } from "../../intergration/commonPage";

export class googleSearchPage extends CommonPage {
  static visit() {
    cy.visit("/");
  }

  static type(query: string) {
    cy.get(googleUI.SEARCH_FIELD) // 2 seconds
      .type(query);
  }

  static pressSearch() {
    this.clickGetElements(googleUI.SEARCH_BUTTON);
    cy.get(googleUI.SEARCH_BUTTON).contains(googleUI.SEARCH_TEXT).click();
    return new googleResultsPage();
  }

  static pressFeelLucky() {
    cy.get(googleUI.FEEL_LUCKY_BUTTON)
      .contains(googleUI.FEEL_LUCKY_TEXT)
      .click();
  }
}
