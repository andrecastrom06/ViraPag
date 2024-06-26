describe('test suite biblioteca', () => {
    it('Adicionar e gerenciar livro', () => {
        cy.visit('/');
        cy.get('.nav-link > .logosomb').click()
        cy.get('.btn-primary').click()
        cy.get('.text-primary').click()
        cy.get('#username').type('Joaquim')
        cy.get('#email').type('Joaquim@gmail.com')
        cy.get('#password').type('testando')
        cy.get('.btn').click()
        cy.get('#id_username').type('Joaquim')
        cy.get('#id_password').type('testando')
        cy.get('.btn').click()
        cy.get(':nth-child(3) > a > .bx').click()
        cy.get('[href="/mainapp/criarlivro/"]').click()
        cy.get('#titulo').type('Guardiola Confidencial')
        cy.get('#autor').type('Marti Perarnau')
        cy.get('#anopublicado').type('2010')
        cy.get('#genero').select('Esportes')
        cy.get('.btn').click()
        cy.get('.list-group-item').click()
        cy.get('.card-title').invoke('text').should('have.string', 'Guardiola Confidencial')
        cy.get('#editar').click()
        cy.get('#titulo').clear()
        cy.get('#titulo').type('Carlo Ancelotti: Liderança tranquila')
        cy.get('#autor').clear()
        cy.get('#autor').type('Carlo Ancelotti')
        cy.get('#anopublicado').clear()
        cy.get('#anopublicado').type('2018')
        cy.get('#genero').select('Esportes')
        cy.get('#status_leitura').select('Lido')
        cy.get('.btn').click()
        cy.get('.list-group-item').click()
        cy.get('#editar').click()
        cy.get('#status_leitura').select('Não Lido')
        cy.get('.btn').click()
        cy.get('.list-group-item').click()
        cy.get('.card-title').invoke('text').should('have.string', 'Carlo Ancelotti: Liderança tranquila')
        cy.get('.col-md-8 > .btn-danger').click()
        cy.get('.modal-footer > form > .btn').click()
    })
    it('Avaliar livro', () => {
        cy.visit('/');
        cy.get('.nav-link > .logosomb').click()
        cy.get('.btn-primary').click()
        cy.get('.text-primary').click()
        cy.get('#username').type('Marta')
        cy.get('#email').type('marta@gmail.com')
        cy.get('#password').type('teste')
        cy.get('.btn').click()
        cy.get('#id_username').type('Marta')
        cy.get('#id_password').type('teste')
        cy.get('.btn').click()
        cy.get(':nth-child(3) > a > .bx').click()
        cy.get('[href="/mainapp/criarlivro/"]').click()
        cy.get('#titulo').type('Guardiola Confidencial')
        cy.get('#autor').type('Marti Perarnau')
        cy.get('#anopublicado').type('2010')
        cy.get('#genero').select('Esportes')
        cy.get('.btn').click()
        cy.get('.list-group-item').click()
        cy.get('#avaliarBtn').click()
        cy.get('#avaliarAlert').invoke('text').should('have.string', 'O livro precisa ser lido para ser avaliado.')
        cy.get('#editar').click()
        cy.get('#status_leitura').select('Lido')
        cy.get('.btn').click()
        cy.get('.list-group-item').click()
        cy.get('#avaliarBtn').click()
        cy.get('#avaliacao').select('1 Estrela')
        cy.get('.btn-primary').click()
        cy.get('.col-md-8 > :nth-child(6)').invoke('text').should('have.string', 'Avaliacão: 1 Estrelas')
        cy.get('#avaliarBtn').click()
        cy.get('#avaliacao').select('2 Estrelas')
        cy.get('.btn-primary').click()
        cy.get('.col-md-8 > :nth-child(6)').invoke('text').should('have.string', 'Avaliacão: 2 Estrelas')
        cy.get('#avaliarBtn').click()
        cy.get('#avaliacao').select('3 Estrelas')
        cy.get('.btn-primary').click()
        cy.get('.col-md-8 > :nth-child(6)').invoke('text').should('have.string', 'Avaliacão: 3 Estrelas')
        cy.get('#avaliarBtn').click()
        cy.get('#avaliacao').select('4 Estrelas')
        cy.get('.btn-primary').click()
        cy.get('.col-md-8 > :nth-child(6)').invoke('text').should('have.string', 'Avaliacão: 4 Estrelas')
        cy.get('#avaliarBtn').click()
        cy.get('#avaliacao').select('5 Estrelas')
        cy.get('.btn-primary').click()
        cy.get('.col-md-8 > :nth-child(6)').invoke('text').should('have.string', 'Avaliacão: 5 Estrelas')
        cy.get('.col-md-8 > .btn-danger').click()
        cy.get('.modal-footer > form > .btn').click()
    })
    it('Adicionar/remover comentario', () => {
        cy.visit('/');
        cy.get('.nav-link > .logosomb').click()
        cy.get('.btn-primary').click()
        cy.get('.text-primary').click()
        cy.get('#username').type('Caio')
        cy.get('#email').type('caca@gmail.com')
        cy.get('#password').type('senha')
        cy.get('.btn').click()
        cy.get('#id_username').type('Caio')
        cy.get('#id_password').type('senha')
        cy.get('.btn').click()
        cy.get(':nth-child(3) > a > .bx').click()
        cy.get('[href="/mainapp/criarlivro/"]').click()
        cy.get('#titulo').type('Guardiola Confidencial')
        cy.get('#autor').type('Marti Perarnau')
        cy.get('#anopublicado').type('2010')
        cy.get('#genero').select('Esportes')
        cy.get('.btn').click()
        cy.get('.list-group-item').click()
        cy.get('.btn-success').click()
        cy.get('#comentario_texto').type('comentario 1')
        cy.get('.btn-primary').click()
        cy.get('.card-body > p').invoke('text').should('have.string', 'comentario 1')
        cy.get('.btn-sm').click()
        cy.get('.modal-footer > .btn-danger').click()
        cy.get('.card-body > p').invoke('text').should('have.string', 'Nenhum comentário feito sobre o livro.')
    })
    it('Favoritar livro', () => {
        cy.visit('/');
        cy.get('.nav-link > .logosomb').click()
        cy.get('.btn-primary').click()
        cy.get('.text-primary').click()
        cy.get('#username').type('Ricardo')
        cy.get('#email').type('ricardo@gmail.com')
        cy.get('#password').type('fdsprof')
        cy.get('.btn').click()
        cy.get('#id_username').type('Ricardo')
        cy.get('#id_password').type('fdsprof')
        cy.get('.btn').click()
        cy.get(':nth-child(3) > a > .bx').click()
        cy.get('[href="/mainapp/criarlivro/"]').click()
        cy.get('#titulo').type('Guardiola Confidencial')
        cy.get('#autor').type('Marti Perarnau')
        cy.get('#anopublicado').type('2010')
        cy.get('#genero').select('Esportes')
        cy.get('.btn').click()
        cy.get('.list-group-item').click()
        cy.get('#favoritoBtn').click()
        cy.get(':nth-child(7) > strong').invoke('text').should('have.string', 'Este livro está favoritado.')
        cy.get('.col-md-8 > [href="/mainapp/biblioteca/"]').click()
        cy.get('.list-group-item').click()
        cy.get('#favoritoBtn').click()
        cy.get(':nth-child(7) > strong').invoke('text').should('have.string', 'Este livro não está favoritado.')
        cy.get('.col-md-8 > [href="/mainapp/biblioteca/"]').click()
        cy.get('.list-group-item').click()
        cy.get('.col-md-8 > .btn-danger').click()
        cy.get('.modal-footer > form > .btn').click()
    })
    it('Procurar livro', () => {
        cy.visit('/');
        cy.get('.nav-link > .logosomb').click()
        cy.get('.btn-primary').click()
        cy.get('.text-primary').click()
        cy.get('#username').type('Felipe')
        cy.get('#email').type('felipe@gmail.com')
        cy.get('#password').type('testando')
        cy.get('.btn').click()
        cy.get('#id_username').type('Felipe')
        cy.get('#id_password').type('testando')
        cy.get('.btn').click()
        cy.get(':nth-child(3) > a > .bx').click()
        cy.get('[href="/mainapp/criarlivro/"]').click()
        cy.get('#titulo').type('Guardiola Confidencial')
        cy.get('#autor').type('Marti Perarnau')
        cy.get('#anopublicado').type('2010')
        cy.get('#genero').select('Esportes')
        cy.get('.btn').click()
        cy.get('[href="/mainapp/pesquisarlivro/"]').click()
        cy.get('#id_titulo').type('Guardiola Confidencial')
        cy.get('#id_autor').type('Marti Perarnau')
        cy.get('.btn').click()
        cy.get('.list-group-item').click()
        cy.get('.col-md-8 > .btn-danger').click()
        cy.get('.modal-footer > form > .btn').click()

    })
})