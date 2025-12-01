module.exports = (app) => {
  app.get("/noticias", async (req, res) => {
    res.send( "ola")
  })
}