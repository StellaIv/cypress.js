describe('Тестирование формы логина', function () {

    it('Ввожу верный логин и верный пароль', function () {
        cy.visit('https://login.qa.studio/');
        cy.get('#mail').type('german@dolnikov.ru');
        cy.get('#pass').type('iLoveqastudio1');
        cy.get('#loginButton').click();
        cy.contains('Авторизация прошла успешно').should('be.visible');
        cy.get('#exitMessageButton > .exitIcon').should('be.visible');
         })

    it('Проверка логики восстановления пароля', function () {
        cy.visit('https://login.qa.studio/');
        cy.get('#loginButton').should('be.disabled'); //кнопка при входе задизейблена
        cy.get('#forgotEmailButton').click();
        cy.contains('Восстановите пароль').should('be.visible');
        cy.get('#mailForgot').type('123@mail.ru');
        cy.get('#restoreEmailButton').should('be.enabled'); //кнопка отправить код задизейблена
        cy.get('#restoreEmailButton').click();
        cy.contains('Успешно отправили пароль на e-mail').should('be.visible');
        cy.get('#exitMessageButton > .exitIcon').should('be.visible');
        })

    it('Ввожу верный логин и не верный пароль', function () {
        cy.visit('https://login.qa.studio/');
        cy.get('#loginButton').should('be.disabled'); //кнопка при входе задизейблена
        cy.get('#mail').type('german@dolnikov.ru');
        cy.get('#loginButton').should('be.disabled'); //кнопка при логине задизейблена
        cy.get('#pass').type('iLoveqastudio99999');
        cy.get('#loginButton').should('be.enabled'); //кнопка при вводе пароля активна
        cy.get('#loginButton').click();
        cy.contains('Такого логина или пароля нет').should('be.visible');
        cy.get('#exitMessageButton > .exitIcon').should('be.visible');
        })

    it('Ввожу не верный логин и верный пароль', function () {
        cy.visit('https://login.qa.studio/');
        cy.get('#loginButton').should('be.disabled'); //кнопка при входе задизейблена
        cy.get('#mail').type('german@mail.ru');
        cy.get('#loginButton').should('be.disabled'); //кнопка при логине задизейблена
        cy.get('#pass').type('iLoveqastudio1');
        cy.get('#loginButton').should('be.enabled'); //кнопка при вводе пароля активна
        cy.get('#loginButton').click();
        cy.contains('Такого логина или пароля нет').should('be.visible');
        cy.get('#exitMessageButton > .exitIcon').should('be.visible');
        })

    it('Проверка валидации логина', function () {
        cy.visit('https://login.qa.studio/');
        cy.get('#mail').type('germandolnikov.ru');
        cy.get('#pass').type('iLoveqastudio1');
        cy.get('#loginButton').click();
        cy.contains('Нужно исправить проблему валидации').should('be.visible');
        cy.get('#exitMessageButton > .exitIcon').should('be.visible');
        })

    it('Проверка на приведение к строчным буквам в логине', function () {
        cy.visit('https://login.qa.studio/');
        cy.get('#mail').type('GerMan@Dolnikov.ru');
        cy.get('#pass').type('iLoveqastudio1');
        cy.get('#loginButton').click();
        cy.contains('Авторизация прошла успешно').should('be.visible');
        cy.get('#exitMessageButton > .exitIcon').should('be.visible');
        })
})