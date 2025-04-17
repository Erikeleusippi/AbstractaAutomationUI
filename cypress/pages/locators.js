const homePageLocators = {
    productsItem: '#tbodyid .col-lg-4',
    titleProduct: 'h4.card-title a',
    priceProduct: 'h5',
    nextPageButton: '#next2',
    firstProductTitle: 'h4.card-title a',
    signupBtn:'#signin2',
    userNameField:'#sign-username',
    newpassField:'#sign-password',
    confirmRegistrationBtn:'button.btn.btn-primary:contains("Sign up")',
    contactBtn:'a.nav-link[data-target="#exampleModal"]',
    fieldContactEmail:'#recipient-email',
    fieldContactName:'#recipient-name',
    fieldMessange:'#message-text',
    sendContactBtn:'button.btn.btn-primary[onclick="send()"]',

  };
  
  const secondPageLocators = {
    productsItem: '#tbodyid .col-lg-4',
    titleProduct: 'h4.card-title a',
    priceProduct: 'h5',
  };

  const productPageLocators = {
    btnPurchase: 'a.btn.btn-success.btn-lg',
    btnCart:'.nav-item #cartur',
    btnPurchase: 'a.btn.btn-success.btn-lg',
    btnCart: '#cartur', 
    productTitle: 'h2.name', 
  }

  const cartPageLocators ={
    cartProductTitle: 'tr.success td:nth-child(2)',
    btnOrder:'div .btn-success',
    nameField:'#name',
    countryField:'#country',
    cityField:'#city',
    cardField:'#card',
    monthField:'#month',
    yearField:'#year',
    btnPurchase:'#orderModal .modal-footer button.btn.btn-primary',
    btnConfirm:'.confirm',

  }


   export default {homePageLocators,secondPageLocators,productPageLocators,cartPageLocators}