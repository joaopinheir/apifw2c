module.exports = (app) => {
    app.get("/noticias", async (req, res) => {
        try{
        await app.dbClient.connect();
        const nome= req.params.nome
        const resutado = await app.dbClient.db('sample_mflix')
            .collection('users')
            FindCursor()
            toArray();
            res.json(users);           
          }catch(error){
            res.send("erro:"+error)
          }finally {
            await app.dbClient.close()
            
          }
    })
}