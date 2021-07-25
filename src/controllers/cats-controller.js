const CatsDao = require('../dao/cats-dao')

module.exports = (app, bd) => {


    const DaoCats =  new CatsDao(bd)

    app.get('/pets/cats', async (req, res) => {
        try{
            
            const respostaVerCats = await DaoCats.Vercat()
            res.send(respostaVerCats)
        } catch(error){
            res.send(error)
        }

    })

    app.get('/pets/cats/:ID', async (req, res) => {
        try{
            const id = req.params.ID
            const respostaVerUmCat = await DaoCats.VerUmCat(id)
            res.send(respostaVerUmCat)
        } catch(error){
            res.send(error)
        }

    })

     app.post('/pets/dogs/newCats', async(req, res)=>{
         try{
            const body = req.body
             const informacoes = [body.RACA, body.FOTO, body.IDADE, body.NOME, body.GENERO, body.RUA, body.ESTADO, body.TELEFONE]
          const respostaNewCat = await DaoCats.NewCat(informacao)
            res.send(respostaNewDog)

        } catch(error){
            res.send(error)
         }
     })

}