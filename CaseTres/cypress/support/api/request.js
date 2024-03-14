class Request{


    getUsers(){
        return cy.request({
            method: 'GET',
            url: '/'
        })
    } 

    getUser(){
        return cy.request({
            method: 'GET',
            url: '/3'
        })
    }   

    postCreate(){
        return cy.request({
            method: 'POST',
            url: '/',
            body:  {
                "name": "Desafio",
                "username": "Técnico",
                "email": "Shanna@melissa.tv.com",
                "address": {
                  "street": "Victor Plains",
                  "suite": "Suite 879",
                  "city": "Wisokyburgh",
                  "zipcode": "90566-7771",
                  "geo": {
                    "lat": "-43.9509",
                    "lng": "-34.4618"
                  }
                },
                "phone": "010-692-6593 x09125",
                "website": "anastasia.net",
                "company": {
                  "name": "Deckow-Crist",
                  "catchPhrase": "Proactive didactic contingency",
                  "bs": "synergize scalable supply-chains"
                }
            }
        })
    } 

    putEdit(){
        return cy.request({
            method: 'PUT',
            url: '/2',
            body: {
                "name": "Desafio Técnico",
                "username": "MeuTudo.",
                "email": "Shanna@melissa.tv",
                "address": {
                  "street": "Victor Plains",
                  "suite": "Suite 879",
                  "city": "Wisokyburgh",
                  "zipcode": "90566-7771",
                  "geo": {
                    "lat": "-43.9509",
                    "lng": "-34.4618"
                  }
                },
                "phone": "010-692-6593 x09125",
                "website": "anastasia.net",
                "company": {
                  "name": "Deckow-Crist",
                  "catchPhrase": "Proactive didactic contingency",
                  "bs": "synergize scalable supply-chains"
                }
            }
        })
    } 

    deleteErase(){
        return cy.request({
            method: 'DELETE',
            url: '/9'
        })
    }
}

export default new Request();
