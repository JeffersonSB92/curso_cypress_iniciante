// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })


Cypress.Commands.add('fillMandatoryFieldsAndSubmit', () => { 
    //acha o campo de input de nome, checa se está visível, preenche o campo e checa se tem o valor preenchido anteriormente
    cy.get('#firstName')
    .should('be.visible')
    .type('Jefferson')
    .should('have.value', 'Jefferson')

//acha o campo de input de sobrenome, checa se está visível, preenche o campo e checa se tem o valor preenchido anteriormente
cy.get('#lastName')
    .should('be.visible')
    .type('Borges')
    .should('have.value', 'Borges')

//acha o campo de input de email, checa se está visível, preenche o campo e checa se tem o valor preenchido anteriormente
cy.get('#email')
    .should('be.visible')
    .type('jefftavares92@gmail.com')
    .should('have.value', 'jefftavares92@gmail.com')

//acha o campo de input de "como podemos ajudar", checa se está visível, preenche o campo e checa se tem o valor preenchido anteriormente
cy.get('#open-text-area')
    .should('be.visible')
    //adicionada a option {delay} para preencher texto longo mais rápido
    .type('Lorem ipsum dolor sit amet. Quo pariatur dolores nam itaque dolores aut enim numquam et quas esse rem unde explicabo et galisum dolores. Qui illo culpa quo itaque voluptas qui quibusdam officiis. Et consequatur nulla qui dolore dolor est alias magnam aut dolores nemo. Eos minima illum ab magnam eius et dolorem unde sit consequatur nostrum et consectetur modi. Sit neque delectus nam porro natus qui nisi voluptas. Id accusantium culpa et sunt accusantium aut placeat tempora sit porro provident cum enim recusandae eos repudiandae aspernatur', {delay: 0})
    .should('have.value', 'Lorem ipsum dolor sit amet. Quo pariatur dolores nam itaque dolores aut enim numquam et quas esse rem unde explicabo et galisum dolores. Qui illo culpa quo itaque voluptas qui quibusdam officiis. Et consequatur nulla qui dolore dolor est alias magnam aut dolores nemo. Eos minima illum ab magnam eius et dolorem unde sit consequatur nostrum et consectetur modi. Sit neque delectus nam porro natus qui nisi voluptas. Id accusantium culpa et sunt accusantium aut placeat tempora sit porro provident cum enim recusandae eos repudiandae aspernatur')

//acha o botão de enviar, checa se ele está visível e clica nele
cy.contains('button[type="submit"]', 'Enviar') //usando contais passando um segundo parâmetro que é o texto que teve estar contido no botão, uma opção ao cy.get()
    .should('be.visible')
    .click()

//checa se a mensagem de sucesso está visível
cy.get('.success').should('be.visible')
})