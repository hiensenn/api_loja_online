module.exports = class CatsDao{

    constructor(bd){
        this.bd =  bd
    }

    Vercat(){
        return new Promise((resolve, reject) => {
            const query = 'SELECT * FROM CATS'
            this.bd.all(query, (error, res) => {

                if(error) reject(`Erro ao acessar o bd. ${error}`)
                else resolve(res)

            })

        })
    }

    VerUmCat(id){
        return new Promise((resolve, reject) => {
            const query = 'SELECT * FROM CATS WHERE ID = (?)'
            this.bd.all(query, id, (error, res) =>{
                if(error) reject(`Erro ao acessar o bd. ${error}`)
                else resolve(res)
            })
        })
    }

    NewCat(informacoes){  
        return new Promise((resolve, reject) => {
            const query = 'INSERT INTO DOGS (RACA, FOTO, IDADE, NOME, GENERO, RUA, NUMERO, CIDADE, ESTADO, TELEFONE) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)'
    
            const parametros = [informacoes[0],informacoes[1],informacoes[2],informacoes[3],informacoes[4],informacoes[5],informacoes[6],informacoes[7],informacoes[8],informacoes[9]]
            this.bd.run(query, parametros, (error,response) => {
                if(error) reject(`Erro ao adicionar o cat. ${error}`)
                else resolve('cat adicionado com sucesso')
            })
        })
    
    }
}