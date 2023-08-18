describe('Оформление заказа', function () {

    it('Проверка оформления заказа', function () {
        cy.visit('https://huntingpony.com/');
        cy.get('#splide02-slide01 > .product-preview > .product-preview__content > .product-preview__area-title > .product-preview__title > a').click();
        cy.wait(2000);
        cy.get('.add-cart-counter__btn').click();
        cy.get('[data-add-cart-counter-plus=""]').click();
        cy.wait(2000);
        cy.get('.header__cart > .icon').click();
        cy.get('.cart-controls > .button').click();
        cy.contains('Оформление заказа').should('be.visible');
    })

    })
