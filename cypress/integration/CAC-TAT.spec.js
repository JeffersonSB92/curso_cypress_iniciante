/// <reference types="Cypress" />

describe('Central de Atendimento ao Cliente TAT', function() {
    beforeEach(() => {
        //visita o site/caminho que queremos checar
        cy.visit('./src/index.html')
    })

    it('verifica o título da aplicação', function() {
        //checa que o texto está correto
        cy.title().should('be.equal', 'Central de Atendimento ao Cliente TAT')
    })

    it('preenche os campos obrigatórios e envia o formulário', function() {
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
        cy.get('button[type="submit"]')
            .should('be.visible')
            .click()

        //checa se a mensagem de sucesso está visível
        cy.get('.success').should('be.visible')

    })

    it('exibe mensagem de erro ao submeter o formulário com um email com formatação inválida', function() {
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
            .type('jefftavares92@gmail')
            .should('have.value', 'jefftavares92@gmail')

        //acha o campo de input de "como podemos ajudar", checa se está visível, preenche o campo e checa se tem o valor preenchido anteriormente
        cy.get('#open-text-area')
            .should('be.visible')
            //adicionada a option {delay} para preencher texto longo mais rápido
            .type('Lorem ipsum dolor sit amet. Quo pariatur dolores nam itaque dolores aut enim numquam et quas esse rem unde explicabo et galisum dolores. Qui illo culpa quo itaque voluptas qui quibusdam officiis. Et consequatur nulla qui dolore dolor est alias magnam aut dolores nemo. Eos minima illum ab magnam eius et dolorem unde sit consequatur nostrum et consectetur modi. Sit neque delectus nam porro natus qui nisi voluptas. Id accusantium culpa et sunt accusantium aut placeat tempora sit porro provident cum enim recusandae eos repudiandae aspernatur', {delay: 0})
            .should('have.value', 'Lorem ipsum dolor sit amet. Quo pariatur dolores nam itaque dolores aut enim numquam et quas esse rem unde explicabo et galisum dolores. Qui illo culpa quo itaque voluptas qui quibusdam officiis. Et consequatur nulla qui dolore dolor est alias magnam aut dolores nemo. Eos minima illum ab magnam eius et dolorem unde sit consequatur nostrum et consectetur modi. Sit neque delectus nam porro natus qui nisi voluptas. Id accusantium culpa et sunt accusantium aut placeat tempora sit porro provident cum enim recusandae eos repudiandae aspernatur')

        //acha o botão de enviar, checa se ele está visível e clica nele
        cy.get('button[type="submit"]')
            .should('be.visible')
            .click()

        //checa se a mensagem de erro está visível
        cy.get('.error').should('be.visible')

    })

    it('falha ao tentar digitar telefone não numérico', function() {
        //acha o campo de input de telefone, checa se está visível, tenta preencher o campo com não numérico e checa que continua vazio
        cy.get('#phone')
            .should('be.visible')
            .type('Jefferson')
            .should('have.value', '')
    })

    it('exibe mensagem de erro quando o telefone se torna obrigatório mas não é preenchido antes do envio do formulário', function() {
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
            .type('jefftavares92@gmail')
            .should('have.value', 'jefftavares92@gmail')

        //acha o checkbox de telefone, checa se está visível, clica no checkbox
        cy.get('input[id="phone-checkbox"]')
            .should('be.visible')
            .click()

        //acha o campo de input de "como podemos ajudar", checa se está visível, preenche o campo e checa se tem o valor preenchido anteriormente
        cy.get('#open-text-area')
        .should('be.visible')
        .type('Lorem ipsum dolor sit amet. Quo pariatur dolores nam itaque dolores aut enim numquam et quas esse rem unde explicabo et galisum dolores. Qui illo culpa quo itaque voluptas qui quibusdam officiis. Et consequatur nulla qui dolore dolor est alias magnam aut dolores nemo. Eos minima illum ab magnam eius et dolorem unde sit consequatur nostrum et consectetur modi. Sit neque delectus nam porro natus qui nisi voluptas. Id accusantium culpa et sunt accusantium aut placeat tempora sit porro provident cum enim recusandae eos repudiandae aspernatur', {delay: 0})
        .should('have.value', 'Lorem ipsum dolor sit amet. Quo pariatur dolores nam itaque dolores aut enim numquam et quas esse rem unde explicabo et galisum dolores. Qui illo culpa quo itaque voluptas qui quibusdam officiis. Et consequatur nulla qui dolore dolor est alias magnam aut dolores nemo. Eos minima illum ab magnam eius et dolorem unde sit consequatur nostrum et consectetur modi. Sit neque delectus nam porro natus qui nisi voluptas. Id accusantium culpa et sunt accusantium aut placeat tempora sit porro provident cum enim recusandae eos repudiandae aspernatur')

        //acha o botão de enviar, checa se ele está visível e clica nele
        cy.get('button[type="submit"]')
        .should('be.visible')
        .click()

        //checa se a mensagem de erro está visível
        cy.get('.error').should('be.visible')
       
    })

    it('preenche e limpa os campos nome, sobrenome, email e telefone', function() {
        //acha o campo de input de nome, checa se está visível, preenche o campo, checa se tem o valor preenchido anteriormente, limpa o campo e checa se limpou
        cy.get('#firstName')
            .should('be.visible')
            .type('Jefferson', { log: false }) //"{ log: false }" faz com que o que foi digitado não aparece no log de comando ao rodar o teste
            .should('have.value', 'Jefferson')
            .clear()
            .should('have.value', '')

        //acha o campo de input de sobrenome, checa se está visível, preenche o campo e checa se tem o valor preenchido anteriormente, limpa o campo e checa se limpou
        cy.get('#lastName')
            .should('be.visible')
            .type('Borges')
            .should('have.value', 'Borges')
            .clear()
            .should('have.value', '')

        //acha o campo de input de email, checa se está visível, preenche o campo e checa se tem o valor preenchido anteriormente, limpa o campo e checa se limpou
        cy.get('#email')
            .should('be.visible')
            .type('jefftavares92@gmail.com')
            .should('have.value', 'jefftavares92@gmail.com')
            .clear()
            .should('have.value', '')

        //acha o campo de input de "como podemos ajudar", checa se está visível, preenche o campo e checa se tem o valor preenchido anteriormente, limpa o campo e checa se limpou
        cy.get('#open-text-area')
            .should('be.visible')
            //adicionada a option {delay} para preencher texto longo mais rápido
            .type('Lorem ipsum dolor sit amet. Quo pariatur dolores nam itaque dolores aut enim numquam et quas esse rem unde explicabo et galisum dolores. Qui illo culpa quo itaque voluptas qui quibusdam officiis. Et consequatur nulla qui dolore dolor est alias magnam aut dolores nemo. Eos minima illum ab magnam eius et dolorem unde sit consequatur nostrum et consectetur modi. Sit neque delectus nam porro natus qui nisi voluptas. Id accusantium culpa et sunt accusantium aut placeat tempora sit porro provident cum enim recusandae eos repudiandae aspernatur', {delay: 0})
            .should('have.value', 'Lorem ipsum dolor sit amet. Quo pariatur dolores nam itaque dolores aut enim numquam et quas esse rem unde explicabo et galisum dolores. Qui illo culpa quo itaque voluptas qui quibusdam officiis. Et consequatur nulla qui dolore dolor est alias magnam aut dolores nemo. Eos minima illum ab magnam eius et dolorem unde sit consequatur nostrum et consectetur modi. Sit neque delectus nam porro natus qui nisi voluptas. Id accusantium culpa et sunt accusantium aut placeat tempora sit porro provident cum enim recusandae eos repudiandae aspernatur')
            .clear()
            .should('have.value', '')
    })

    it('exibe mensagem de erro ao submeter o formulário sem preencher os campos obrigatórios', function() {
        //acha o botão de enviar, checa se ele está visível e clica nele
        cy.get('button[type="submit"]')
            .should('be.visible')
            .click()

        //checa se a mensagem de erro está visível
        cy.get('.error').should('be.visible')

    })

    it('envia o formuário com sucesso usando um comando customizado', function(){
        cy.fillMandatoryFieldsAndSubmit()
    })

    it('seleciona um produto (YouTube) por seu texto', function() {
        cy.get('select').select('YouTube') // Seleção pelo texto Youtube
        .should('have.value', 'youtube')
    })

    it('seleciona um produto (Mentoria) por seu valor (value)', function() {
        cy.get('select').select('mentoria') // Seleção pelo value mentoria
        .should('have.value', 'mentoria')
    })

    it('seleciona um produto (Blog) por seu índice', function() {
        cy.get('select').select(1) // Seleção pelo value mentoria
        .should('have.value', 'blog')
    })

    it('marca o tipo de atendimento "Feedback"', function() {
        cy.get('input[value="feedback"]')
            .check()
            .should('have.value', 'feedback')
    })

    it.only('marca cada tipo de atendimento', function() {
        cy.get('input[type="radio"]')
            .should('have.length', 3)
            .each(function($radio) { //.each encapsula cada um dos $radio para executar comandos específicos para cada iteração
                cy.wrap($radio).check() //.wrap enpacota cada opção para que possa executar os comandos passados
                cy.wrap($radio).should('be.checked')
            })
            
    })

  })