class HomePage {
    getAllProducts(selector) {
        if (!selector) {
            throw new Error('Selector no proporcionado');
          }
      return cy.get(selector, { timeout: 10000 });
    }
  
    scanProduct(selector, index) {
      if (!selector || index === undefined) {
        throw new Error('Selector o índice no proporcionado');
      }
      return cy.get(selector, { timeout: 10000 }).eq(index).invoke('text');
    }
  
    scanHref(selector, index) {
      if (!selector || index === undefined) {
        throw new Error('Selector o índice no proporcionado');
      }
      return cy.get(selector, { timeout: 10000 }).eq(index).invoke('attr', 'href');
    }
  
    clickElement(selector) {
        if (!selector) {
            throw new Error('Selector no proporcionado');
          }
      return cy.get(selector, { timeout: 10000 }).click();
    }
    clickElementIndex(selector,index){
        if (!selector || index === undefined) {
            throw new Error('Selector o índice no proporcionado');
          }
          return cy.get(selector, { timeout: 10000 }).eq(index).click();
    }
    getText(selector,index) {
        return cy.get(selector, { timeout: 10000 }).eq(index).invoke('text');
      }
      fillField(selector,data){
        if (!selector) {
            throw new Error('Selector no proporcionado');
          }
          return cy.get(selector, { timeout: 10000 }).type(data, { force: true });
    }
    
  }
  
  export default HomePage;