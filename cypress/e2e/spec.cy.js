describe('home da pagina', () => {
  //testando e "brincando" com comandos do cypress 
  
  it('acessando a home da pagina', () => {
    cy.visit('/');
    cy.contains('Exercise');
    cy.get('h1');
    cy.get("h1").contains("Exercise");


    cy.get('.features_items');
    cy.get('div.features_items');
  }),

  it('verificando um produto especifico', () => {
    cy.visit('/');
    cy.get('.features_items').children().eq(12);


  
  }),

  it.only('fazendo login na pagina', () => {
    
    cy.visit('/');

    cy.get('div.shop-menu').contains('Login').should('have.attr','href', '/login').click();

    cy.contains('Login to your account').should('be.visible');

    cy.get('.login-form').find('input[name="email"]')
    .type('teste@gmail.com')
    .should('be.visible')
    .and('have.attr', 'placeholder', 'Email Address')
    .and('have.prop', 'required'); //email

    cy.get('[data-qa="login-password"]').type('123456').should('have.value', '123456')//senha

    //cy.get('[data-qa="login-button"]').contains('Login').click();
    
    cy.get('[data-qa="login-button"]').as('btnLogin').then(($button)=>{
      expect($button).to.have.text('Login');
      expect($button).to.contain('Login');
      expect($button).to.be.visible;
      expect($button).to.have.attr('type', 'submit');
      expect($button).to.have.class('btn');
      cy.wrap($button).click();
      cy.get('@btnLogin').click();

      cy.contains('Your email or password is incorrect!')

    });
  }),

  it('colocando um produto no carrinho', () => {
    cy.visit('/');
    cy.get('[data-product-id="13"]').contains('Add to cart').click();
    cy.get('#cartModal').contains('added');


    cy.get('button.close-modal').click();


  
  })

})