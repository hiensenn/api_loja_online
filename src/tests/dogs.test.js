const request = require('supertest')

test('/pets/dogs', async()=>{

    await request('http://localhost:3030')
    .get('/pets/dogs')
    .expect(200)
    .then((res)=> console.log('Passou no teste'))

})

test('/pets/dogs/newDog', async()=>{

    await request('http://localhost:3030')
    .get('/pets/dogs/newDog')
    .send({
        "RACA": "beagle",
        "FOTO": "https://images.dog.ceo/breeds/finnish-lapphund/mochilamvan.jpg",
        "IDADE": "2",
        "NOME": "Totó",
        "GENERO": "male",
        "RUA": "Rua Cambará Branco ",
        "NUMERO": "121",
        "CIDADE": "São Bernardo",
        "ESTADO": "São Paulo",
        "TELEFONE": "(11) 4002-8922"
      })
    .expect(200)
    .then((res)=> console.log('Passou no teste'))

})