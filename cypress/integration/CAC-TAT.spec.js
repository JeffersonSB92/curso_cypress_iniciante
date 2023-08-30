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
        const longText = Cypress._.repeat('abcd', 50)
        cy.get('#open-text-area')
            .should('be.visible')
            //adicionada a option {delay} para preencher texto longo mais rápido
            .invoke('val', longText)
            .should('have.value', longText)

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

    Cypress._.times(5, () => {
        it('falha ao tentar digitar telefone não numérico', function() {
            //acha o campo de input de telefone, checa se está visível, tenta preencher o campo com não numérico e checa que continua vazio
            cy.get('#phone')
                .should('be.visible')
                .type('Jefferson')
                .should('have.value', '')
        })
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
            .check()

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

    it('marca cada tipo de atendimento', function() {
        cy.get('input[type="radio"]')
            .should('have.length', 3)
            .each(function($radio) { //.each encapsula cada um dos $radio para executar comandos específicos para cada iteração
                cy.wrap($radio).check() //.wrap enpacota cada opção para que possa executar os comandos passados
                cy.wrap($radio).should('be.checked')
            })
            
    })

    it('marca ambos checkboxes, depois desmarca o último', function() {
        cy.get('#check input[type="checkbox"]')
            .check().should('be.checked')
            .last().uncheck()
            .last().should('not.be.checked')
    })

    it('seleciona um arquivo da pasta fixtures', function() {
        cy.get('input[type="file"]')
            .selectFile('cypress/fixtures/example.json')
            .then(input => {
                expect(input[0].files[0].name).to.equal('example.json')
            })
    })

    it('seleciona um arquivo simulando um drag-and-drop', function() {
        cy.get('input[type="file"]')
            .selectFile('cypress/fixtures/example.json', { action: 'drag-drop'})
            .then(input => {
                expect(input[0].files[0].name).to.equal('example.json')
            })
    })

    it('seleciona um arquivo utilizando uma fixture para a qual foi dada um alias', function() {
        cy.fixture('example.json', { encoding: null}).as('exampleFile')
        cy.get('input[type="file"]')
            .selectFile('@exampleFile')
            .then(input => {
                expect(input[0].files[0].name).to.equal('example.json')
            })
    })

    it('verifica que a política de privacidade abre em outra aba sem a necessidade de um clique', function() {
        cy.get('#privacy a')
            .should('have.attr', 'target', '_blank')
    })

    it('acessa a página da política de privacidade removendo o target e então clicando no link', function() {
        cy.get('#privacy a')
            .invoke('removeAttr', 'target')
            .click()
    })

    it('acessa a página da política de privacidade removendo o target e então clicando no link', function() {
        cy.get('#privacy a')
            .invoke('removeAttr', 'target')
            .click()
    })
    /*foi criado um arquivo novo (privacy.spec.js) para testar de forma independente
    o link da página com a política de privacidade, ele roda isoladamente e dessa forma
    conseguimos fazer todos os testes necessários, visto que o Cypress não consegue lidar
    com acesso a outras abas. essa forma funciona apenas se a página que iremos testar
    estiver no mesmo domínio que a página principal, ou seja, dentro do mesmo projeto*/

    it("verifica mensagem usando .clock e .tick", function() {
        cy.get('#firstName')
        .should('be.visible')
        .type('Jefferson')
        .should('have.value', 'Jefferson')

    cy.get('#lastName')
        .should('be.visible')
        .type('Borges')
        .should('have.value', 'Borges')

    cy.get('#email')
        .should('be.visible')
        .type('jefftavares92@gmail.com')
        .should('have.value', 'jefftavares92@gmail.com')

    cy.get('#open-text-area')
        .should('be.visible')
        .type('Lorem ipsum dolor sit amet. Quo pariatur dolores nam itaque dolores aut enim numquam et quas esse rem unde explicabo et galisum dolores. Qui illo culpa quo itaque voluptas qui quibusdam officiis. Et consequatur nulla qui dolore dolor est alias magnam aut dolores nemo. Eos minima illum ab magnam eius et dolorem unde sit consequatur nostrum et consectetur modi. Sit neque delectus nam porro natus qui nisi voluptas. Id accusantium culpa et sunt accusantium aut placeat tempora sit porro provident cum enim recusandae eos repudiandae aspernatur', {delay: 0})
        .should('have.value', 'Lorem ipsum dolor sit amet. Quo pariatur dolores nam itaque dolores aut enim numquam et quas esse rem unde explicabo et galisum dolores. Qui illo culpa quo itaque voluptas qui quibusdam officiis. Et consequatur nulla qui dolore dolor est alias magnam aut dolores nemo. Eos minima illum ab magnam eius et dolorem unde sit consequatur nostrum et consectetur modi. Sit neque delectus nam porro natus qui nisi voluptas. Id accusantium culpa et sunt accusantium aut placeat tempora sit porro provident cum enim recusandae eos repudiandae aspernatur')

    cy.clock()

    cy.get('button[type="submit"]')
        .should('be.visible')
        .click()

    cy.get('.success').should('be.visible')

    cy.tick(3000)

    cy.get('.success').should('not.be.visible')
    })

    it("exibe e esconde as mensagens de sucesso e erro usando o .invoke()", function() {
        cy.get('.success')
            .should('not.be.visible')
            .invoke('show')
            .should('be.visible')
            .and('contain', 'Mensagem enviada com sucesso.')
            .invoke('hide')
            .should('not.be.visible')
        cy.get('.error')
            .should('not.be.visible')
            .invoke('show')
            .should('be.visible')
            .and('contain', 'Valide os campos obrigatórios!')
            .invoke('hide')
            .should('not.be.visible')
    })

    it.only("faz uma requisição HTTP", function() {
        /*
        Minha abordagem para o exercício
        cy.request({
            metodh: 'GET',
            url: 'https://cac-tat.s3.eu-central-1.amazonaws.com/index.html'
        }).then((response) => {
            expect(response.status).to.equal(200);
            expect(response.statusText).to.equal('OK');
            expect(response.body).to.contain('CAC TAT');
        })*/

        //abordagem do professor
       cy.request('https://cac-tat.s3.eu-central-1.amazonaws.com/index.html')
        .should(function(response) {
            const { status, statusText, body } = response //aqui desestruturamos a resposta, estamos pegando do response apenas status, statusText e body
            expect(status).to.equal(200)
            expect(statusText).to.equal('OK')
            expect(body).to.include('CAC TAT')
        }) 
    })







  })