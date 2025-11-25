module.exports=(app)=>{
    app.get("noticias/id/:id",async (req,res)=>{
        res.send(req.params.id)
    })
}