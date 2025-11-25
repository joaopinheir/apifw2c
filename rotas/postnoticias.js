module.exports = (app)=>{
    app.post("/postnoticias",async (req,res)=>{
        try{
            const titulonoticias = req.body.titulonoticias
            const conteudonoticias = req.body. conteudonoticias
            const tiponoticias = req.body. tiponoticias
            await app.dbClient.connect();
            const resutado = await app.dbClient.db("portalnoticias")
            .collection("noticias")
            .insertOne({titulonoticias:titulonoticias,
                conteudonoticias:conteudonoticias,
                tiponoticias:tiponoticias,
                datahoracadastro: new Date()})
                res.status(200).send("noticia gravad com sucesso!",resutado)
            }catch(error){
               res.status(400).send("Erro ao gravado a noticia:",resutado)
            }
            
    })
}