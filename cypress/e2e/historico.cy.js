describe('test suite historico', () => {
    it('Livro indo para histórico + apagando do histórico', () => {
        cy.visit('/');
        cy.get('.nav-link > .logosomb').click()
        cy.get('.btn-primary').click()
        cy.get('.text-primary').click()
        cy.get('#username').type('Lucas')
        cy.get('#email').type('lucas@gmail.com')
        cy.get('#password').type('sukar')
        cy.get('.btn').click()
        cy.get('#id_username').type('Lucas')
        cy.get('#id_password').type('sukar')
        cy.get('.btn').click()
        cy.get(':nth-child(5) > a > .bx').click()
        cy.get('p').invoke('text').should('have.string', 'Nenhum livro no histórico.')
        cy.get(':nth-child(3) > a > .bx').click()
        cy.get('[href="/mainapp/criarlivro/"]').click()
        cy.get('#titulo').type('Guardiola Confidencial')
        cy.get('#autor').type('Marti Perarnau')
        cy.get('#anopublicado').type('2010')
        cy.get('#genero').select('Esportes')
        cy.get('.btn').click()
        cy.get('.list-group-item').click()
        cy.get('#editar').click()
        cy.get('#status_leitura').select('Lido')
        cy.get('.btn').click()
        cy.get(':nth-child(5) > a > .bx').click()
        cy.get('.list-group-item > :nth-child(1) > div').invoke('text').should('have.string', 'Guardiola Confidencial - Marti Perarnau')
        cy.get('.btn').click()
        cy.get(':nth-child(3) > a > .bx').click()
        cy.get('.list-group-item').click()
        cy.get('#editar').click()
        cy.get('#status_leitura').select('Em Leitura')
        cy.get('.btn').click()
        cy.get(':nth-child(5) > a > .bx').click()
        cy.get('.list-group-item > :nth-child(1) > div').invoke('text').should('have.string', 'Guardiola Confidencial - Marti Perarnau')
        cy.get('.btn').click()
    })
    it('Livro não indo 2 vezes para histórico', () => {
        cy.visit('/');
        cy.get('.nav-link > .logosomb').click()
        cy.get('.btn-primary').click()
        cy.get('.text-primary').click()
        cy.get('#username').type('Andre')
        cy.get('#email').type('andre@gmail.com')
        cy.get('#password').type('castro')
        cy.get('.btn').click()
        cy.get('#id_username').type('Andre')
        cy.get('#id_password').type('castro')
        cy.get('.btn').click()
        cy.get(':nth-child(5) > a > .bx').click()
        cy.get('p').invoke('text').should('have.string', 'Nenhum livro no histórico.')
        cy.get(':nth-child(3) > a > .bx').click()
        cy.get('[href="/mainapp/criarlivro/"]').click()
        cy.get('#titulo').type('Guardiola Confidencial')
        cy.get('#autor').type('Marti Perarnau')
        cy.get('#anopublicado').type('2010')
        cy.get('#genero').select('Esportes')
        cy.get('.btn').click()
        cy.get('.list-group-item').click()
        cy.get('#editar').click()
        cy.get('#status_leitura').select('Lido')
        cy.get('.btn').click()
        cy.get(':nth-child(5) > a > .bx').click()
        cy.get('.list-group-item > :nth-child(1) > div').invoke('text').should('have.string', 'Guardiola Confidencial - Marti Perarnau')
        cy.get(':nth-child(3) > a > .bx').click()
        cy.get('.list-group-item').click()
        cy.get('#editar').click()
        cy.get('#status_leitura').select('Em Leitura')
        cy.get('.btn').click()
        cy.get(':nth-child(5) > a > .bx').click()
        cy.get('.list-group-item > :nth-child(1) > div').invoke('text').should('have.string', 'Guardiola Confidencial - Marti Perarnau')
    })
    it('Removendo do histórico pela aba de status', () => {
        cy.visit('/');
        cy.get('.nav-link > .logosomb').click()
        cy.get('.btn-primary').click()
        cy.get('.text-primary').click()
        cy.get('#username').type('Evaldo')
        cy.get('#email').type('evaldo@gmail.com')
        cy.get('#password').type('monitorfds')
        cy.get('.btn').click()
        cy.get('#id_username').type('Evaldo')
        cy.get('#id_password').type('monitorfds')
        cy.get('.btn').click()
        cy.get(':nth-child(5) > a > .bx').click()
        cy.get('p').invoke('text').should('have.string', 'Nenhum livro no histórico.')
        cy.get(':nth-child(3) > a > .bx').click()
        cy.get('[href="/mainapp/criarlivro/"]').click()
        cy.get('#titulo').type('Guardiola Confidencial')
        cy.get('#autor').type('Marti Perarnau')
        cy.get('#anopublicado').type('2010')
        cy.get('#genero').select('Esportes')
        cy.get('.btn').click()
        cy.get('.list-group-item').click()
        cy.get('#editar').click()
        cy.get('#status_leitura').select('Não Lido')
        cy.get('.btn').click()
        cy.get(':nth-child(5) > a > .bx').click()
        cy.get('p').invoke('text').should('have.string', 'Nenhum livro no histórico.')
        cy.get(':nth-child(3) > a > .bx').click()
        cy.get('.list-group-item').click()
        cy.get('.col-md-8 > .btn-danger').click()
        cy.get('.modal-footer > form > .btn').click()
        cy.get('p').invoke('text').should('have.string', 'Nenhum livro adicionado ainda.')
    })
  })