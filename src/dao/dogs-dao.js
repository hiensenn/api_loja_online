const { response } = require("express")

module.exports = class DogsDao{

    constructor(bd){
        this.bd =  bd
    }

    Verdog(){
        return new Promise((resolve, reject) => {
            const query = 'SELECT * FROM DOGS'
            this.bd.all(query, (error, res) => {

                if(error) reject(`Erro ao acessar o bd. ${error}`)
                else resolve(res)

            })

        })
    }

    VerUmDog(id){
        return new Promise((resolve, reject) => {
            const query = 'SELECT * FROM DOGS WHERE ID = (?)'
            this.bd.all(query, id, (error, res) =>{
                if(error) reject(`Erro ao acessar o bd. ${error}`)
                else resolve(res)
            })
        })
    }

    NewDog(informacoes){  
    return new Promise((resolve, reject) => {
        const query = 'INSERT INTO DOGS (RACA, FOTO, IDADE, NOME, GENERO, RUA, NUMERO, CIDADE, ESTADO, TELEFONE) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)'

        const parametros = [informacoes[0],informacoes[1],informacoes[2],informacoes[3],informacoes[4],informacoes[5],informacoes[6],informacoes[7],informacoes[8],informacoes[9]]
        this.bd.run(query, parametros, (error,response) => {
            if(error) reject(`Erro ao adicionar pet. ${error}`)
            else resolve('Pet adicionado com sucesso')
        })
    })

}

    deleteDogs(id){
        return new Promise((resolve, reject) =>{

            const query = 'DELETE FROM DOGS WHERE ID = (?)'
            this.bd.run(query, id, (error, response)=> {
                if(error) reject(`Erro ao deletar pet. ${error}`)
                else resolve('Pet deletado com sucesso')
            })
        })
    }

    EditDog(informacoes, id){
        return new Promise((resolve, reject)=>{

              const query = 'UPDATE DOGS SET RACA = (?), FOTO = (?), IDADE = (?), NOME = (?), GENERO = (?), RUA = (?), NUMERO = (?), CIDADE = (?), ESTADO = (?), TELEFONE = (?) WHERE ID = (?)'

              const parametros = [informacoes[0],informacoes[1],informacoes[2],informacoes[3],informacoes[4],informacoes[5],informacoes[6],informacoes[7],informacoes[8],informacoes[9], id]
              
              this.bd.run(query, parametros, (error, response)=>{
                if(error) reject(`Erro ao editar pet. ${error}`)
                else resolve('Pet editado com sucesso')
              })

        })
    }
}