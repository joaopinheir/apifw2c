module.exports=(app)=>{
    app.get("nottipocias/tipo/:tiponoticia",async (req,res)=>{
        res.send(req.params.id)
    })
}