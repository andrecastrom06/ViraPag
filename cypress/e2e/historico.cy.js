describe('test suite historico', () => {
    it('Livro indo para histórico + apagando do histórico', () => {
        cy.visit('/');
        cy.get('.nav-link > .logosomb').click()
        cy.get('.btn-primary').click()
        cy.get('#id_username').type('Joaquim')
        cy.get('#id_password').type('testando')
        cy.get('.btn').click()
        cy.get(':nth-child(5) > a > .bx').click()
        cy.get(':nth-child(3) > a > .bx').click()
        cy.get('.btn').click()
        cy.get('#titulo').type('Guardiola Confidencial')
        cy.get('#autor').type('Marti Perarnau')
        cy.get('#anopublicado').type('2010')
        cy.get('#genero').select('teste 2')
        cy.get('.btn').click()
        cy.get('.list-group-item').click()
        cy.get('#editar').click()
        cy.get('#status_leitura').select('Lido')
        cy.get('.btn').click()
        cy.get(':nth-child(5) > a > .bx').click()
        cy.get('.list-group-item > :nth-child(1) > div').invoke('text').should('have.string', 'Guardiola Confidencial - Marti Perarnau (May/2024)')
        cy.get('.btn').click()
        cy.get(':nth-child(3) > a > .bx').click()
        cy.get('.list-group-item').click()
        cy.get('#editar').click()
        cy.get('#status_leitura').select('Em Leitura')
        cy.get('.btn').click()
        cy.get(':nth-child(5) > a > .bx').click()
        cy.get('.list-group-item > :nth-child(1) > div').invoke('text').should('have.string', 'Guardiola Confidencial - Marti Perarnau (May/2024)')
        cy.get('.btn').click()
    })
    it('Livro não indo 2 vezes para histórico', () => {
        cy.visit('/');
        cy.get('.nav-link > .logosomb').click()
        cy.get('.btn-primary').click()
        cy.get('#id_username').type('Joaquim')
        cy.get('#id_password').type('testando')
        cy.get('.btn').click()
        cy.get(':nth-child(5) > a > .bx').click()
        cy.get(':nth-child(3) > a > .bx').click()
        cy.get('.list-group-item').click()
        cy.get('#editar').click()
        cy.get('#status_leitura').select('Lido')
        cy.get('.btn').click()
        cy.get(':nth-child(5) > a > .bx').click()
        cy.get('.list-group-item > :nth-child(1) > div').invoke('text').should('have.string', 'Guardiola Confidencial - Marti Perarnau (May/2024)')
        cy.get(':nth-child(3) > a > .bx').click()
        cy.get('.list-group-item').click()
        cy.get('#editar').click()
        cy.get('#status_leitura').select('Em Leitura')
        cy.get('.btn').click()
        cy.get(':nth-child(5) > a > .bx').click()
        cy.get('.list-group-item > :nth-child(1) > div').invoke('text').should('have.string', 'Guardiola Confidencial - Marti Perarnau (May/2024)')
    })
    it('Removendo do histórico pela aba de status', () => {
        cy.visit('/');
        cy.get('.nav-link > .logosomb').click()
        cy.get('.btn-primary').click()
        cy.get('#id_username').type('Joaquim')
        cy.get('#id_password').type('testando')
        cy.get('.btn').click()
        cy.get(':nth-child(5) > a > .bx').click()
        cy.get(':nth-child(3) > a > .bx').click()
        cy.get('.list-group-item').click()
        cy.get('#editar').click()
        cy.get('#status_leitura').select('Não Lido')
        cy.get('.btn').click()
        cy.get(':nth-child(5) > a > .bx').click()
        cy.get(':nth-child(3) > a > .bx').click()
        cy.get('.list-group-item').click()
        cy.get('.col-md-8 > .btn-danger').click()
        cy.get('.modal-footer > form > .btn').click()
        cy.get('p').invoke('text').should('have.string', 'Nenhum livro adicionado ainda.')
    })
  })