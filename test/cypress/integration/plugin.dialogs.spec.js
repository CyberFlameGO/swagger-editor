describe('Dialogs: Confirm', () => {
  /**
   * TopBar uses the `ConfirmDialog` and `AlertDialog` components
   * from the `Dialogs` plugin, but both are available for use by
   * other plugins and components.
   * The AlertDialog component is generally reserved for unxpected
   * end user error messages, and hopefully not seen in normal use,
   * so we do not currently test it here.
   * */
  beforeEach(() => {
    cy.visitBlankPage();
    cy.prepareAsyncAPI();
    cy.waitForSplashScreen();
  });
  it('should close the Confirm Dialog via `x` button', () => {
    cy.contains('File').click(); // File Menu
    cy.contains('Import URL')
      .trigger('mousemove')
      .click()
      .get('#input-import-url')
      .should('be.visible')
      .get('.close')
      .click()
      .get('#input-import-url')
      .should('not.exist');
  });
  it('should close the Confirm Dialog via `Cancel` button', () => {
    cy.contains('File').click(); // File Menu
    cy.contains('Import URL')
      .trigger('mousemove')
      .click()
      .get('#input-import-url')
      .should('be.visible')
      .get('.btn-secondary')
      .click()
      .get('#input-import-url')
      .should('not.exist');
  });
});
