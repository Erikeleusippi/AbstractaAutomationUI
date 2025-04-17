class CartPage {

    clickElement(selector) {
        if (!selector) {
            throw new Error('Selector no proporcionado');
          }
      return cy.get(selector, { timeout: 10000 }).click();
    }
    getText(selector) {
      return cy.get(selector).invoke('text');
    }
    fillField(selector,data){
        if (!selector) {
            throw new Error('Selector no proporcionado');
          }
          return cy.get(selector, { timeout: 10000 }).type(data, { force: true });
    }
  }
  
  export default CartPage;