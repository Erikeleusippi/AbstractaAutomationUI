import HomePage from '../pages/homePage'
import locators from '../pages/locators';
import ProductPage from '../pages/productPage';
import CartPage from '../pages/cartPage';

const home = new HomePage();
const productPage = new ProductPage();
const cartPage = new CartPage();

describe('Parte 1', () => {
  const productos = [];

  beforeEach(() => {
    cy.visit('https://www.demoblaze.com/');
  });

  it('Parte 1', () => {
    const procesarPagina = () => {
      home.getAllProducts(locators.homePageLocators.productsItem).then(($items) => {
        const total = $items.length;

        for (let i = 0; i < total; i++) {
          home.scanProduct(locators.homePageLocators.titleProduct, i).then((name) => {
            home.scanProduct(locators.homePageLocators.priceProduct, i).then((price) => {
              home.scanHref(locators.homePageLocators.titleProduct, i).then((href) => {
                const bloque = `Nombre: ${name}\nPrecio: ${price}\nLink: https://www.demoblaze.com/${href}\n\n`;
                productos.push(bloque);
              });
            });
          });
        }
      });
    };   
    procesarPagina();    
    home.clickElement(locators.homePageLocators.nextPageButton);    
    procesarPagina();
    cy.then(() => {
      cy.writeFile('cypress/fixtures/productos.txt', productos.join(''));
    });
  });

  it('Parte 2',()=>{
    let productoSeleccionado = '';
    
    home.getText(locators.homePageLocators.firstProductTitle,0).then((name) => {
        productoSeleccionado = name.trim();
      });
      home.clickElementIndex(locators.homePageLocators.titleProduct,0);
      productPage.getText(locators.productPageLocators.productTitle).then((nombreDetalle) => {
      expect(nombreDetalle.trim()).to.eq(productoSeleccionado);
      });
      
     productPage.clickElement(locators.productPageLocators.btnPurchase);
        productPage.clickElement(locators.productPageLocators.btnCart);
        cartPage.getText(locators.cartPageLocators.cartProductTitle).then((nombreCarrito) => {
        expect(nombreCarrito.trim()).to.eq(productoSeleccionado);
    });
        cartPage.clickElement(locators.cartPageLocators.btnOrder);
        cartPage.fillField(locators.cartPageLocators.nameField,'Erik');
        cartPage.fillField(locators.cartPageLocators.countryField,'Argentina');
        cartPage.fillField(locators.cartPageLocators.cityField,'Capital Federal');
        cartPage.fillField(locators.cartPageLocators.cardField,'4625252525584');
        cartPage.fillField(locators.cartPageLocators.monthField,'04');
        cartPage.fillField(locators.cartPageLocators.yearField,'2030');
        cartPage.clickElement(locators.cartPageLocators.btnPurchase);
        cy.wait(500);
        cartPage.clickElement(locators.cartPageLocators.btnConfirm);//en la llamada de esta funcion hay una espera dinamica pero para que me redireccione al homepage tuve que poner una espera estatica,por eso el wait de 0,5 seg.
    })

    it('registrar usuario(opcional nro 1)',()=>{
        const nombreUsuario = `Erik${Math.floor(1000 + Math.random() * 9000)}`;
        home.clickElement(locators.homePageLocators.signupBtn);
        home.fillField(locators.homePageLocators.userNameField,nombreUsuario);
        cy.wait(500);
        home.fillField(locators.homePageLocators.newpassField,'1234');
        home.clickElement(locators.homePageLocators.confirmRegistrationBtn);
    })
    it('Contactar usuario(opcional nro 2)',()=>{
        home.clickElement(locators.homePageLocators.contactBtn);
        home.fillField(locators.homePageLocators.fieldContactEmail,'prueba456@hotmail.com')
        home.fillField(locators.homePageLocators.fieldContactName,'Erik')
        home.fillField(locators.homePageLocators.fieldMessange,'Realizando prueba de contacto.')
        home.clickElement(locators.homePageLocators.sendContactBtn);
        cy.intercept('GET', '/config.json').as('Contacto recibido');





        
    })




 })



