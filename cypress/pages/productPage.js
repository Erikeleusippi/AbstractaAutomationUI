class ProductPage {

    clickElement(selector) {
        if (!selector) {
            throw new Error('Selector no proporcionado');
          }
      return cy.get(selector, { timeout: 10000 }).click();
    }
    getText(selector) {
        if (!selector) {
            throw new Error('Selector no proporcionado');
          }
        return cy.get(selector, { timeout: 10000 }).invoke('text');
      }


}

export default ProductPage;