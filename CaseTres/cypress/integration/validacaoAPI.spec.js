// / <reference types="cypress" /:

import req from '../support/api/request'
import assertions from '../support/api/assertions'

context('Lista com todos usuários', () => {
    it('GET', () => {
    
        req.getUsers().then(getUsersResponse =>{
            assertions.shouldHaveStatus(getUsersResponse, 200)
        })
    });
});


context('Lista apenas um usuário', () => {
    it('GET', () => {
    
        req.getUser().then(getUserResponse =>{
            assertions.shouldHaveStatus(getUserResponse, 200)
            expect(getUserResponse.body.id).to.not.be.null;
        })
    });
});

context('Criar novo usuário', () => {
    it('POST', () => {

        req.postCreate().then(postCreateResponse => {
            assertions.shouldHaveStatus(postCreateResponse, 201)
            expect(postCreateResponse.body.id).to.not.be.null;
        })
    });
});

context('Editar usuário', () => {
    it('PUT', () => {
        
        req.putEdit().then(putEditResponse => {
            assertions.shouldHaveStatus(putEditResponse, 200)
            expect(putEditResponse.body.name).to.eq("Desafio Técnico");
        })
    });
});    

context('Apagar usuário', () => {
    it('DELETE', () => {
        
        req.deleteErase().then(deleteEraseResponse => {
            assertions.shouldHaveStatus(deleteEraseResponse, 200)
        })
    });
});  
